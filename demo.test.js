import { Selector } from 'testcafe';

fixture('Flujo Completo de E-Commerce')
    .page('https://www.saucedemo.com/')
    .beforeEach(async t => {
        await t.maximizeWindow(); //Maximizar ventana para mejor visibilidad
    });

test('Flujo completo de compra con validaciones', async t => {
    // Credenciales válidas
    const USERNAME = 'standard_user';
    const PASSWORD = 'secret_sauce';

    // Selectores
    const loginSelectors = {
        username: Selector('#user-name'),
        password: Selector('#password'),
        loginButton: Selector('#login-button')
    };

    const inventorySelectors = {
        items: Selector('.inventory_item'),
        addToCartButtons: Selector('.btn_inventory'),
        cartBadge: Selector('.shopping_cart_badge'),
        cartLink: Selector('.shopping_cart_link'),
        sortDropdown: Selector('.product_sort_container'),
        itemNames: Selector('.inventory_item_name')
    };

    const cartSelectors = {
        cartItems: Selector('.cart_item'),
        cartItemNames: Selector('.inventory_item_name'), // ✅ CORREGIDO: Selector específico del carrito
        checkoutButton: Selector('#checkout'),
        continueShopping: Selector('#continue-shopping')
    };

    const checkoutSelectors = {
        firstName: Selector('#first-name'),
        lastName: Selector('#last-name'),
        postalCode: Selector('#postal-code'),
        continueButton: Selector('#continue'),
        finishButton: Selector('#finish'),
        total: Selector('.summary_total_label')
    };

    const confirmationSelectors = {
        completeHeader: Selector('.complete-header'),
        ponyImage: Selector('.pony_express')
    };

    console.log('Iniciando prueba...');

    // 1. Login exitoso
    await t
        .typeText(loginSelectors.username, USERNAME)
        .typeText(loginSelectors.password, PASSWORD)
        .click(loginSelectors.loginButton)
        .takeScreenshot('login-completado');

    // 2. Validar página de productos
    await t
        .expect(inventorySelectors.items.count).gte(1, 'Productos cargados correctamente')
        .takeScreenshot('pagina-productos');

    // 3. Ordenar productos (precio mayor a menor)
    await t
        .click(inventorySelectors.sortDropdown)
        .click(inventorySelectors.sortDropdown.find('option').withText('Price (high to low)'))
        .wait(1000)
        .takeScreenshot('productos-ordenados');

    // 4. Agregar productos al carrito
    const firstItemName = await inventorySelectors.itemNames.nth(0).innerText;
    const secondItemName = await inventorySelectors.itemNames.nth(1).innerText;
    
    console.log(`Agregando productos: "${firstItemName}" y "${secondItemName}"`);

    await t
        .click(inventorySelectors.addToCartButtons.nth(0))
        .expect(inventorySelectors.cartBadge.innerText).eql('1', 'Primer producto agregado')
        .click(inventorySelectors.addToCartButtons.nth(1))
        .expect(inventorySelectors.cartBadge.innerText).eql('2', 'Segundo producto agregado')
        .takeScreenshot('productos-agregados');

    // 5. Ir al carrito
    await t
        .click(inventorySelectors.cartLink)
        .expect(cartSelectors.cartItems.count).eql(2, 'Redirección al carrito exitosa')
        .takeScreenshot('pagina-carrito');

    // 6. Validar productos en el carrito
    await t
        .expect(cartSelectors.cartItems.count).eql(2, '2 productos en el carrito')
        .expect(cartSelectors.cartItemNames.nth(0).innerText).eql(firstItemName, `Primer producto correcto: ${firstItemName}`)
        .expect(cartSelectors.cartItemNames.nth(1).innerText).eql(secondItemName, `Segundo producto correcto: ${secondItemName}`)
        .takeScreenshot('validacion-carrito');

    // 7. Proceder al checkout
    await t
        .click(cartSelectors.checkoutButton)
        .expect(checkoutSelectors.firstName.exists).ok('Formulario de checkout cargado')
        .takeScreenshot('formulario-checkout');

    // 8. Completar información de envío - MÁS ROBUSTO
    await t
        .typeText(checkoutSelectors.firstName, 'Demo', { speed: 0.5 })
        .typeText(checkoutSelectors.lastName, 'User', { speed: 0.5 })
        .typeText(checkoutSelectors.postalCode, '12345', { speed: 0.5 })
        .click(checkoutSelectors.continueButton)
        .expect(checkoutSelectors.finishButton.exists).ok('Resumen de compra cargado')
        .takeScreenshot('resumen-compra');

    // 9. Validar total y finalizar compra
    const totalText = await checkoutSelectors.total.innerText;
    console.log(`💰 Total de la compra: ${totalText}`);

    await t
        .expect(checkoutSelectors.total.exists).ok('Total visible')
        .click(checkoutSelectors.finishButton)
        .takeScreenshot('procesando-pago');

    // 10. Validar confirmación
    await t
        .expect(confirmationSelectors.completeHeader.exists).ok('Confirmación de compra mostrada')
        .expect(confirmationSelectors.ponyImage.exists).ok('Imagen de confirmación visible')
        .takeScreenshot('compra-completada');

    console.log('¡FLUJO COMPLETADO!');
});