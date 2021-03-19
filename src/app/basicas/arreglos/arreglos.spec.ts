import { obtenerRobots } from "./arreglos";

describe('Pruebas de Arreglos', () => {
  it('Debe de retornar al menos 3 robots', () => {
    const resp = obtenerRobots();
    expect(resp.length).toBeGreaterThanOrEqual(3);
  });
  it('Debe de existir Megaman y Ultron', () => {
    const resp = obtenerRobots();
    expect(resp).toContain('MegaMan');
    expect(resp).toContain('Ultron');
  });
});
