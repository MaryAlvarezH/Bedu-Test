// Jaden Smith, el hijo de Will Smith es la estrella de algunas películas como
// The Karate Kid y After Earth, tambien es conocido por su filosofía que
// comparte a travez de Twitter, cuando escribe en Twitter también es conocido
// por capitalizar cada palabra.

// Crea una función llamada toJadenSmithPhilosophy que convierta strings como
// si hubieran sido escritos por Jaden Smith.

// Ejemplo:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// Aquí va tu código

function toJadenSmithPhilosophy(text) {
    
    array = text.split(" ")
    console.log(array)

    let arrayF = array.map((item)=>{
        console.log('item',item)
        // item.split()
        // item.charAt(0).toUpperCase()
        console.log(item.split())
        console.log(item.charAt(0).toUpperCase())

        item.charAt(0).toUpperCase()





    })

    console.log('ARRAYF', arrayF)



    
}


// Tests
describe("toJadenSmithPhilosophy", () => {
    it("El return de la function toJadenSmithPhilosophy es string. 💪", () => {
        const toJadenSmithString = "How can mirrors be real if our eyes aren't real";
        const wordIsCapitalized = word => /^[A-Z]/;
        expect(typeof toJadenSmithPhilosophy(toJadenSmithString) === 'string').toEqual(true)
    });
    it("Todas las palabras en la frase inician con mayúscula. 🤟", () => {
        const toJadenSmithString = "How can mirrors be real if our eyes aren't real"
        const wordIsCapitalized = word => /^[A-Z]/;
        expect(
            toJadenSmithPhilosophy(toJadenSmithString)
            .split(" ")
            .every(wordIsCapitalized)
        ).toEqual(true);
    });
    it("La frase fue convertida a filosofía de Jaden Smith. 👍", () => {
        console.log = jasmine.createSpy("log");
        const toJadenSmithString = "How can mirrors be real if our eyes aren't real"
        expect(
          toJadenSmithPhilosophy(toJadenSmithString) === "How Can Mirrors Be Real If Our Eyes Aren't Real"
        ).toEqual(true);
    });
})