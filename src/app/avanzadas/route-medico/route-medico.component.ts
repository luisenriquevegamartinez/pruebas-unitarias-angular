import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route-medico',
  templateUrl: './route-medico.component.html',
  styles: [
  ]
})
export class RouteMedicoComponent implements OnInit {

  id: string;

  constructor(
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      this.id = params['id'];
    })
  }

  guardarMedico() {
    this.router.navigate(['medico', '123']);
  }

}
