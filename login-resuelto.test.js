import { Selector } from 'testcafe';

fixture('Mi segunda prueba')
    .page('https://www.saucedemo.com/');

test('Flujo completo de autenticación', async t => {
    console.log('Probando flujo de login/logout...');
    
    // PASO 1: LOGIN
    await t
        .typeText('#user-name', 'standard_user')
        .typeText('#password', 'secret_sauce')
        .click('#login-button');
    
    // VERIFICAR LOGIN EXITOSO
    await t.expect(Selector('.inventory_item').exists).ok();
    
    // PASO 2: LOGOUT
    await t
        .click('#react-burger-menu-btn')
        .click('#logout_sidebar_link');
    
    // VERIFICAR LOGOUT EXITOSO
    await t.expect(Selector('#login-button').exists).ok();
    
    console.log('¡Flujo completo probado exitosamente!');
});