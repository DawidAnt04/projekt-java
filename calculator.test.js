const { add, subtract, multiply, divide } = require('./calculator');



describe('Kalkulator', () => {

  test('dodawanie dwóch liczb', () => {

    expect(add(2, 4)).toBe(6);

  });



  test('odejmowanie dwóch liczb', () => {

    expect(subtract(5, 2)).toBe(3);

  });



  test('mnożenie dwóch liczb', () => {

    expect(multiply(4, 4)).toBe(16);

  });



  test('dzielenie dwóch liczb', () => {

    expect(divide(10, 2)).toBe(5);

  });



  test('dzielenie przez zero powinno rzucić błąd', () => {

    expect(() => divide(5, 0)).toThrow('Nie można dzielić przez zero');

  });



  test('sekwencja działań kalkulatora', () => {

    let result = add(1, 2);        

    result = multiply(result, 3);  

    result = subtract(result, 4);  

    expect(divide(result, 5)).toBe(1);

  });

});

