import { usuaiorIngresado } from "./booleanos";

describe('Pruebas de Booleanos', () => {

  it('Debe de retornar true', ()=>{
    const resp = usuaiorIngresado();

    expect(resp).toBeTruthy();
  })

});
