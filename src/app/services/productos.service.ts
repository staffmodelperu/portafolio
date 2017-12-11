import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductosService {

  producto: any[] = [];
  cargando: Boolean = true;

  constructor(private http: Http ) {
    this.cargarProductos();
  }


  public cargarProductos() {
    this.cargando = true;

    this.http.get('https://portafolio-57aa1.firebaseio.com/productos_idx.json')
        .subscribe(res => {
          console.log( res.json() );
          this.cargando = false;
        });
    }
}
