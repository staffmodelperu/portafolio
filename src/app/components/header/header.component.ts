import { InformacionService } from './../../services/informacion.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent  {

  constructor(public _is: InformacionService,
              private router: Router ) {}

  buscarProducto (termino: string) {

    // console.log(termino);
    this.router.navigate( ['search', termino]);
  }

}
