const calculateDiscount = require('./calculateDiscount');

test('Debe aplicar un 20% de descuento para usuarios premium', () => {
    expect(calculateDiscount('premium', 100)).toBe(80);
});

test('No debe aplicar descuento para usuarios normales', () => {
    expect(calculateDiscount('normal', 100)).toBe(100);
});
