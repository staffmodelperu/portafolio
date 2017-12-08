import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class InformacionService {

  info: any = {};
  cargada: Boolean = false;


  constructor(public http: Http) {

    this.http.get('assets/data/info.pagina.json')
    .subscribe( data => {
        console.log(data);
        this.cargada = true;
        this.info = data.json();
    });

  }


}
