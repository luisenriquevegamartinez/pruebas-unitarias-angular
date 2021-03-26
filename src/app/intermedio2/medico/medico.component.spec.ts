import { HttpClientModule } from '@angular/common/http';
import { MedicoService } from './medico.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoComponent } from './medico.component';

describe('Medico Component', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoComponent ],
      providers:[MedicoService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de Crearse el Componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de Regresar el nombre del medico', () => {
    const nombre = 'Juan';
    const resp = component.saludarMedico(nombre);
    expect(resp).toContain(nombre);
  });
});
