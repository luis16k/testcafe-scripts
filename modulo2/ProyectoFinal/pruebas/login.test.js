// PASO 1: Importar las páginas que vamos a usar
// TODO: Importa paginaLogin desde '../paginas/PaginaLogin'
// TODO: Importa paginaProductos desde '../paginas/PaginaProductos'



// Fixture (grupo de tests)
fixture('Proyecto Final - Login y Productos')
    .page('https://www.saucedemo.com/');



// PRUEBA 1: Login Exitoso
// TODO: Crea un test llamado 'Debería hacer login con credenciales válidas'
test('_____________________________', async t => {
    // ARRANGE - Preparar datos
    // TODO: Crea una constante 'usuario' con el valor 'standard_user'
    // TODO: Crea una constante 'contrasena' con el valor 'secret_sauce'
    
    
    
    // ACT - Ejecutar acciones
    // TODO: Usa paginaLogin.hacerLogin() con el usuario y contrasena
    
    
    
    // ASSERT - Verificar resultados
    // TODO: Usa paginaProductos.verificarPaginaCargada() para verificar que entramos
    
    
});


// PRUEBA 2: Login Fallido
// TODO: Crea un test llamado 'Debería mostrar error con credenciales inválidas'
test('_____________________________', async t => {
    // ARRANGE
    // TODO: Crea constantes con usuario y contrasena INCORRECTOS
    
    
    
    // ACT
    // TODO: Intenta hacer login con las credenciales incorrectas
    
    
    
    // ASSERT
    // TODO: Usa paginaLogin.verificarErrorLogin() para verificar que aparece el error
    // El mensaje esperado es: 'Username and password do not match'
    
    
});


// PRUEBA 3: Agregar Productos al Carrito
// TODO: Crea un test llamado 'Debería agregar productos al carrito después del login'
test('_____________________________', async t => {
    // ARRANGE
    // TODO: Define usuario y contrasena válidos
    
    
    
    // ACT - Parte 1: Login
    // TODO: Haz login primero
    
    
    
    // ACT - Parte 2: Agregar productos
    // TODO: Usa paginaProductos.agregarMochilaAlCarrito()
    // TODO: Usa paginaProductos.agregarLuzBiciAlCarrito()
    
    
    
    // ASSERT
    // TODO: Verifica que el carrito tenga 2 items con paginaProductos.verificarCantidadCarrito(2)
    
    
});


// PRUEBA 4 (DESAFÍO EXTRA - OPCIONAL)
// Si terminas rápido, intenta crear este test adicional
// TODO: Crea un test que agregue 3 productos al carrito y verifique la cantidad
test('DESAFÍO: Debería agregar tres productos diferentes al carrito', async t => {
    // PISTA: Necesitas hacer login primero
    // PISTA: Usa los tres métodos de agregar productos
    // PISTA: Verifica que el carrito tenga 3 items
    
    
    
    
});