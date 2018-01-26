import { InformacionService } from './../../services/informacion.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {

  anio: number = new Date().getFullYear();

  constructor( public _is: InformacionService ) {

  }

}
