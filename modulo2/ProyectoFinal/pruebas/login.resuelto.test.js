// Esta es la versión completa. NO se la des a los estudiantes aún.
// Úsala para tu demo y como referencia.

import paginaLogin from '../paginas/PaginaLogin';
import paginaProductos from '../paginas/PaginaProductos';

fixture('Proyecto Final - Login y Productos')
    .page('https://www.saucedemo.com/');

test('Debería hacer login con credenciales válidas', async t => {
    // ARRANGE - Preparar datos
    const usuario = 'standard_user';
    const contrasena = 'secret_sauce';
    
    // ACT - Ejecutar acciones
    await paginaLogin.hacerLogin(usuario, contrasena);
    
    // ASSERT - Verificar resultados
    await paginaProductos.verificarPaginaCargada();
});

test('Debería mostrar error con credenciales inválidas', async t => {
    // ARRANGE
    const usuario = 'usuario_incorrecto';
    const contrasena = 'contrasena_incorrecta';
    
    // ACT
    await paginaLogin.hacerLogin(usuario, contrasena);
    
    // ASSERT
    await paginaLogin.verificarErrorLogin('Username and password do not match');
});

test('Debería agregar productos al carrito después del login', async t => {
    // ARRANGE
    const usuario = 'standard_user';
    const contrasena = 'secret_sauce';
    
    // ACT - Parte 1: Login
    await paginaLogin.hacerLogin(usuario, contrasena);
    
    // ACT - Parte 2: Agregar productos
    await paginaProductos.agregarMochilaAlCarrito();
    await paginaProductos.agregarLuzBiciAlCarrito();
    
    // ASSERT
    await paginaProductos.verificarCantidadCarrito(2);
});

test('DESAFÍO: Debería agregar tres productos diferentes al carrito', async t => {
    // ARRANGE
    const usuario = 'standard_user';
    const contrasena = 'secret_sauce';
    
    // ACT
    await paginaLogin.hacerLogin(usuario, contrasena);
    await paginaProductos.agregarMochilaAlCarrito();
    await paginaProductos.agregarLuzBiciAlCarrito();
    await paginaProductos.agregarCamisetaAlCarrito();
    
    // ASSERT
    await paginaProductos.verificarCantidadCarrito(3);
});