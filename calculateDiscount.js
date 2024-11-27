// Función para Calcular Descuento
// En el archivo calculateDiscount.js, implementa la función calculateDiscount que reciba dos parámetros: userType y amount.
// Si el userType es premium, la función debe retornar el 80% del amount.
// Si el userType es normal, la función debe retornar el amount sin descuento.
// Ejemplo:
function calculateDiscount(userType, amount) {
    if (userType === 'premium') {
        return amount * 0.8; // 20% de descuento
    }
    return amount; // Sin descuento
}

module.exports = calculateDiscount;

// Configurar el Proyecto para Jest
// npm install jest --save-dev

// Configurar el archivo package.json
/* "scripts": {
  "test": "jest"
} */

// Ejecutar el test
// npm test
// o con: npx jest y verificar que todas pasan correctamente

// Resultado Esperado:
// Deberías ver un reporte que indique si las pruebas pasaron o fallaron.