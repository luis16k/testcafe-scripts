import { Selector } from 'testcafe';

// CONFIGURACIÓN
fixture('Mi Primera Prueba')
    .page('https://devexpress.github.io/testcafe/example/');

// PRUEBA
test('Completar formulario básico', async t => {
    
    // PASO 1: Escribir nombre
    await t.typeText(Selector('#developer-name'), 'Hola');
    
    // PASO 2: Enviar formulario
    await t.click(Selector('#submit-button'));
    
    // PASO 3: Verificar resultado
    await t.expect(Selector('#article-header').innerText).contains('Hola').takeScreenshot('resultado-formulario');
    
    console.log('¡Prueba exitosa!');
});