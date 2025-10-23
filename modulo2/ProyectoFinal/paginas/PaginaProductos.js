import { Selector, t } from 'testcafe';

/**
 * PÁGINA DE PRODUCTOS - SAUCEDEMO
 * 
 * Esta clase representa la página de productos (la página principal después del login).
 * Aquí están todos los métodos para interactuar con los productos.
 */
class PaginaProductos {
    constructor() {
        // SELECTORES
        this.tituloPagina = Selector('.title');
        this.productosInventario = Selector('.inventory_item');
        this.insigniaCarrito = Selector('.shopping_cart_badge');
        this.enlaceCarrito = Selector('.shopping_cart_link');
        
        // Selectores para productos específicos
        this.botonAgregarMochila = Selector('#add-to-cart-sauce-labs-backpack');
        this.botonAgregarLuzBici = Selector('#add-to-cart-sauce-labs-bike-light');
        this.botonAgregarCamiseta = Selector('#add-to-cart-sauce-labs-bolt-t-shirt');
    }

    /**
     * MÉTODO: Verificar que estamos en la página de productos
     * 
     * Ejemplo de uso:
     *   await paginaProductos.verificarPaginaCargada();
     */
    async verificarPaginaCargada() {
        await t
            .expect(this.tituloPagina.innerText)
            .eql('Products', 'El título debe ser "Products"')
            .expect(this.productosInventario.count)
            .gte(1, 'Debe haber al menos un producto visible');
    }

    /**
     * MÉTODO: Agregar Mochila al carrito
     * 
     * Ejemplo de uso:
     *   await paginaProductos.agregarMochilaAlCarrito();
     */
    async agregarMochilaAlCarrito() {
        await t.click(this.botonAgregarMochila);
    }

    /**
     * MÉTODO: Agregar Luz de Bicicleta al carrito
     * 
     * Ejemplo de uso:
     *   await paginaProductos.agregarLuzBiciAlCarrito();
     */
    async agregarLuzBiciAlCarrito() {
        await t.click(this.botonAgregarLuzBici);
    }

    /**
     * MÉTODO: Agregar Camiseta al carrito
     * 
     * Ejemplo de uso:
     *   await paginaProductos.agregarCamisetaAlCarrito();
     */
    async agregarCamisetaAlCarrito() {
        await t.click(this.botonAgregarCamiseta);
    }

    /**
     * MÉTODO: Verificar cantidad de items en el carrito
     * 
     * @param {number} cantidadEsperada - Cantidad esperada de items
     * 
     * Ejemplo de uso:
     *   await paginaProductos.verificarCantidadCarrito(2);
     */
    async verificarCantidadCarrito(cantidadEsperada) {
        await t
            .expect(this.insigniaCarrito.innerText)
            .eql(cantidadEsperada.toString(), `El carrito debe tener ${cantidadEsperada} items`);
    }

    /**
     * MÉTODO: Ir al carrito de compras
     * 
     * Ejemplo de uso:
     *   await paginaProductos.irAlCarrito();
     */
    async irAlCarrito() {
        await t.click(this.enlaceCarrito);
    }

    /**
     * MÉTODO: Obtener el número de productos en la página
     * Retorna un número con la cantidad de productos
     * 
     * Ejemplo de uso:
     *   const cantidad = await paginaProductos.obtenerCantidadProductos();
     *   console.log(cantidad); // 6
     */
    async obtenerCantidadProductos() {
        return await this.productosInventario.count;
    }
}

export default new PaginaProductos();