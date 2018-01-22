import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductosService {

  productos: any[] = [];
  productosFiltrado: any[] = [];
  cargando: Boolean = true;

  constructor(private http: Http ) {
    this.cargarProductos();
  }
  public buscarProducto(termino: string) {

    /* console.log('Buscando producto..');
    console.log( this.productos.length ); */

    if ( this.productos.length === 0 ) {
      this.cargarProductos().then( () => {
        // termino la
        this.productosFiltrado = [];
        this.filtrarProductos(termino);
      });
    } else {
      this.productosFiltrado = [];
      this.filtrarProductos(termino);
    }
  }

  public filtrarProductos(termino: string) {
    this.productos.forEach( prod => {

      termino = termino.toLowerCase();
      if ( prod.categoria.toLowerCase().indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0 ) {
        this.productosFiltrado.push(prod);
      }
      /* console.log(prod); */
    });
  }

  public cargarProductos() {
    this.cargando = true;

    const promesa = new Promise( ( resolve, reject ) => {
      this.http.get('https://portafolio-57aa1.firebaseio.com/productos_idx.json')
      .subscribe( res => {

        // setTimeout(() => {
          this.cargando = false;
          this.productos = res.json();
          resolve();
        // }, 1500);
      });
    });

    return promesa;

  }

  public cargarProducto(cod: string) {
    return this.http.get(`https://portafolio-57aa1.firebaseio.com/productos/${ cod }.json`);

  }


}
