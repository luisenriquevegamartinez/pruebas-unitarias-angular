import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { element } from 'protractor';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;

  });

  it('Debe de mostrar la leyenda', () => {
    component.leyenda = 'Progreso de la carga';
    fixture.detectChanges() // Disparar la detección de cambios
    const element: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(element.innerHTML).toContain('Progreso de la carga')
  });

  it('Debe de mostrar en el input el valor de progreso', () => {
    component.cambiarValor(5);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const element = fixture.debugElement.query(By.css('input')).nativeElement;
      console.log(element);
      expect(element.value).toBe('55');
    });
  });

  it('Debe de incrementer/decremantr en 5 con un click en el botón', ()=>{
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    console.log((botones));
    botones[0].triggerEventHandler('click',null);
    expect(component.progreso).toBe(45);
    botones[1].triggerEventHandler('click',null);
    expect(component.progreso).toBe(50);
  });

  it('Debe de modificar el progreso en el html cuando se haga click en el boton', ()=>{
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    botones[0].triggerEventHandler('click',null);
    fixture.detectChanges() // Disparar la detección de cambios
    const element: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(element.innerHTML).toContain('45');
  });

});
