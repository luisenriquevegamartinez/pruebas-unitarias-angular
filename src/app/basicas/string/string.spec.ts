
// describe('Pruebas de String');
// it('Debe de regresar un string');

import { mensaje } from "./string";

describe('Pruebas de string', () => {

  it('Debe de regresar un String', () => {
    const resp = mensaje('Fernando');
    expect(typeof resp).toBe('string');
  });

  it('Debe de retornar un saludo con el nombre enviado', () => {
    const nombre = 'Juan';
    const resp = mensaje(nombre);
    expect(resp).toContain(nombre);
  });

});


