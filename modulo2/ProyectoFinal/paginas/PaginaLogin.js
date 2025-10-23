import { Selector, t } from 'testcafe';

/**
 * PÁGINA DE LOGIN - SAUCEDEMO
 * 
 * Esta clase representa la página de login.
 * Contiene todos los elementos (selectores) y acciones que puedes hacer en esta página.
 * 
 * Piensa en esta clase como un "manual de instrucciones" para la página de login.
 */
class PaginaLogin {
    constructor() {
        // SELECTORES - Los elementos que necesitamos encontrar en la página
        this.campoUsuario = Selector('#user-name');
        this.campoContrasena = Selector('#password');
        this.botonLogin = Selector('#login-button');
        this.mensajeError = Selector('.error-message-container');
    }

    /**
     * MÉTODO: Hacer Login
     * Escribe usuario y contraseña, luego hace clic en el botón de login
     * 
     * @param {string} usuario - El nombre de usuario
     * @param {string} contrasena - La contraseña
     * 
     * Ejemplo de uso:
     *   await paginaLogin.hacerLogin('standard_user', 'secret_sauce');
     */
    async hacerLogin(usuario, contrasena) {
        await t
            .typeText(this.campoUsuario, usuario)
            .typeText(this.campoContrasena, contrasena)
            .click(this.botonLogin);
    }

    /**
     * MÉTODO: Verificar Error de Login
     * Verifica que aparezca un mensaje de error
     * 
     * @param {string} textoEsperado - El texto que esperamos ver en el error
     * 
     * Ejemplo de uso:
     *   await paginaLogin.verificarErrorLogin('Username and password do not match');
     */
    async verificarErrorLogin(textoEsperado) {
        await t
            .expect(this.mensajeError.exists)
            .ok('Debe aparecer un mensaje de error')
            .expect(this.mensajeError.innerText)
            .contains(textoEsperado, `El error debe contener: "${textoEsperado}"`);
    }

    /**
     * MÉTODO: Limpiar Campos
     * Limpia los campos de usuario y contraseña
     * Útil cuando quieres hacer múltiples intentos de login
     * 
     * Ejemplo de uso:
     *   await paginaLogin.limpiarCampos();
     */
    async limpiarCampos() {
        await t
            .selectText(this.campoUsuario)
            .pressKey('delete')
            .selectText(this.campoContrasena)
            .pressKey('delete');
    }
}

// Exportamos UNA INSTANCIA de la clase (singleton)
// Así todos los tests usan el mismo objeto
export default new PaginaLogin();