import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent  {

  producto: any = undefined;
  cod: any = undefined;

  constructor(private route: ActivatedRoute,
              private _ps: ProductosService ) {

    route.params.subscribe( parametros => {

      _ps.cargarProducto(parametros['id'])
          .subscribe(res => {
            this.cod = parametros['id'];
            this.producto = res.json();
            console.log(this.producto);
      });
    });
   }

}
