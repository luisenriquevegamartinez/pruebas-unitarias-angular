import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteMedicoComponent } from './route-medico.component';
import { Subject } from 'rxjs/Subject';


class FakeRouter {
  navigate(params) { }
}

class FakeActivatedRoute {
  // params: Observable<any> = Observable.empty();

  private subject = new Subject()

  push(valor){
    this.subject.next( valor );
  }

  get params(){
    return this.subject.asObservable();
  }
}

describe('RouteMedicoComponent', () => {
  let component: RouteMedicoComponent;
  let fixture: ComponentFixture<RouteMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteMedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redireccionar a Médico cuando se guarde', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.guardarMedico();
    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('Debe de colocar el id = nuevo', ()=>{
    component = fixture.componentInstance;
    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.push({id: 'nuevo'});
    expect(component.id).toBe('nuevo');
  })

});
