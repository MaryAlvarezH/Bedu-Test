// Implementa una función llamada sumToBinary que sume dos números y regrese la 
// suma en binario, la conversion a binario puede suceder antes o después de la 
// suma. El tipo del return debe ser un string.

// Aquí va tu código
function sumToBinary(num1,num2) {
  let sum=num1+num2
  let res = Number(sum).toString(2)
  console.log('res', res)
  return res;

}


// Test
describe('sumToBinary', () => {
    it("El return de sumToBinary es string 🥳", () => {
      expect(typeof sumToBinary(1, 2) === 'string').toEqual(true);
    });
    it("La suma de 254 y 1 uno en binario es 11111111 🤩", () => {
      expect(sumToBinary(254, 1) === "11111111").toEqual(true);
    });
    it("La suma de 254 y 1 uno en binario no es 1111 😤", () => {
      expect(sumToBinary(254, 1) === "1111").toEqual(false);
    });
})