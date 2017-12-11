import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class InformacionService {

  info: any = {};
  cargadaInfo: Boolean = false;
  cargadaAbout: Boolean= false;
  equipo: any[] = [];

  constructor(public http: Http) {
    this.cargaInfo();
    this.cargaAbout();
  }

  public cargaInfo () {
    this.http.get('assets/data/info.pagina.json')
    .subscribe( data => {
        // console.log(data);
        this.cargadaInfo = true;
        this.info = data.json();
    });
  }

  public cargaAbout() {
    this.http.get('https://portafolio-57aa1.firebaseio.com/equipo.json')
    .subscribe( data => {
        console.log(data);
        this.cargadaAbout = true;
        this.equipo = data.json();
    });
  }


}
