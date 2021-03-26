import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';


describe('MedicosComponent', () => {

  let componente: MedicosComponent;
  const servicio = new MedicosService(null);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });


  it('Init: Debe de cargar los medicos', () => {
    const resp = ['medico1', 'medico2', 'medico3'];
    spyOn(servicio, 'getMedicos').and.callFake(() => Observable.from([resp]));
    componente.ngOnInit();
    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('Debe de llamar al servidor para agregar un medico', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake(resp => Observable.empty());
    componente.agregarMedico();
    expect(espia).toHaveBeenCalled();
  });

  it('Debe de agregar un nuevo medico al arreglo d medicos', () => {
    const resp = { id: 1, nombre: 'Juan' };
    spyOn(servicio, 'agregarMedico').and.returnValue(Observable.from([resp]))
    componente.agregarMedico();
    expect(componente.medicos.indexOf(resp)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla la adicion, la propiedad mensajeError, debe ser igual al error del servicio', () => {
    const error = 'mensaje de error';
    spyOn(servicio, 'agregarMedico').and.returnValue(Observable.throw(error));
    componente.agregarMedico();
    expect(componente.mensajeError).toBe(error);
  });

  it('Debe de llamar al servidor para borrar u medico', ()=>{
    spyOn(window, 'confirm').and.returnValue(true);
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(Observable.empty());
    componente.borrarMedico('1');
    expect(espia).toHaveBeenCalledWith('1');
  });

  it('No debe de llamar al servidor para borrar u medico', ()=>{
    spyOn(window, 'confirm').and.returnValue(false);
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(Observable.empty());
    componente.borrarMedico('1');
    expect(espia).not.toHaveBeenCalledWith('1');
  });


});
