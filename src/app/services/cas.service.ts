import { Injectable } from '@angular/core';
import { Cas } from '../modeles/cas';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class CasService {
  public cas:Cas[] = [];
  public casSubject = new Subject<Cas[]>();
  
  constructor() {
    this.getCas();
   };
   emettreCas() {
    this.casSubject.next(this.cas);
  }

  saveCas() {
    firebase.database().ref('/cas').set(this.cas)
  };

  createNewCas(cas: Cas) {
    this.cas.push(cas);
    this.saveCas();
    this.emettreCas();
  }
  
  getCas() {
    firebase.database().ref('/Cas').on(
      'value',
      (data: firebase.database.DataSnapshot) => {
        this.cas = data.val() ? data.val() : [];
        this.emettreCas();
      }
    );
  }
}
