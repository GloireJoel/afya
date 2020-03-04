import { Injectable } from '@angular/core';
import { Cas } from '../modeles/cas';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class CasService {
  public cas:Cas[] = [];
  public casSubject = new Subject < Cas[]>();
  
  constructor() {
    this.getCas();
   };
   emettreCas() {
    this.casSubject.next(this.cas);
  }

  saveCas() {
    firebase.database().ref('/Cas').set(this.cas)
  };

  createNewCas(cass: Cas) {
    this.cas.push(cass);
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
  };

  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFileName = Date.now().toString();
        const upload = firebase.storage().ref()
          .child('photo/' + almostUniqueFileName + file.name).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Chargement…');
          },
          (error) => {
            console.log('Erreur de chargement ! : ' + error.message);
            reject();
          },
          () => {
            resolve(upload.snapshot.ref.getDownloadURL());
          }
        );
      }
    );
  }
}
