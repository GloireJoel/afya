import { Injectable } from '@angular/core';
import { Cas } from '../modeles/cas';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class CasService {
  public cass:Cas[] = [];
  public casSubject = new Subject < Cas[]>();
  
  constructor() {
    this.getCas();
   };
   emittreCas() {
    this.casSubject.next(this.cass);
  }

  saveCas() {
    firebase.database().ref('cas/').set(this.cass)
  };

 
  getCas() {
    firebase.database().ref('cas')
    .on('value', (data: firebase.database.DataSnapshot) => {
        this.cass = data.val() ? data.val() : [];
        this.emittreCas();
      });
  };
 
  getSingleCas(id: number)
  {
    return new Promise(
          (resolve, reject)=>{
            firebase.database().ref('path:/cas'+id).once('value').then(
              (data)=>{
                resolve(data.val());
              }, (error) =>{
                reject(error);
              }
            );
          }
       );
  }
//  creation d un cas

  createNewCas(newCass: Cas) {
    this.cass.push(newCass);
    this.saveCas();
    this.emittreCas();
  };

  // la methode de supression d un cas

  removeCas(remCas: Cas)
  {
   const  casIndexRemove = this.cass.findIndex(
     (casEl)=>{
       if(casEl === remCas){
         return true;
       }
     }
   );
    this.cass.splice(casIndexRemove, 1);
    this.saveCas();
    this.emittreCas();
  }

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
