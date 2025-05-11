const Calculadora = require('./calculadora')

describe('Calculadora', () => {    let calculadora;
    beforeEach(() => {

    calculadora = new Calculadora();});
  it('Deverá retornar a soma de dois números', () => {const calculadora = new Calculadora ()

       expect(calculadora.soma(2,5)).toBe(7)
  })

  it('Deverá retornar a subtração de dois números', () => {
    //Seu código aqui
    
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    //Seu código aqui
  })

  it('Deverá retornar a divisao entre dois números', () => {
    //Seu código aqui
  })
})

