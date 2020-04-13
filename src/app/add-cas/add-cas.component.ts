import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CasService } from '../services/cas.service';
import { AuthService } from '../services/auth.service';
import { Cas } from '../modeles/cas';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-add-cas',
  templateUrl: './add-cas.component.html',
  styleUrls: ['./add-cas.component.css']
})
export class AddCasComponent implements OnInit, OnDestroy {
  addCasForm :FormGroup;
  loading= false;
  fileUrl: string ='';
  loaded = false;
  listCas: Cas[];
  casSubsription: Subscription;

  
  constructor( private FormBuilder:FormBuilder,
               private authService: AuthService,
               private casService:CasService,
               private router: Router){}
                
  ngOnInit(){
     this.initCas();
     this.casSubsription = this.casService.casSubject.subscribe(
       (listCas: Cas[])=>{
         this.listCas = listCas;
       }
     );
     this.casService.emittreCas;
  }
  onNewCas(){
    this.router.navigate(['/cas', 'new']);
  }
//  pour suppremier un cas 

onDeleteCas(delcas: Cas)
{
  this.casService.removeCas(delcas);
}
// pour voir les cas
onViewCas(id:number){
  this.router.navigate(['/cas','view',id]);
}

ngOnDestroy()
 {
   this.casSubsription.unsubscribe();
 }

  initCas(){
    this.addCasForm = this.FormBuilder.group({
            dateSymptome: ['', [Validators.required]],
            poidsPatient:['', [Validators.required]],
            agePatient:['', [Validators.required]],
            symptomePatient:['', [Validators.required]],
    })
    
  };
   saveCas(){
      const nomCas = {
       dateSymptome: this.addCasForm.get('dateSymptome').value,
       poidsPatient: this.addCasForm.get('poidsPatient').value,
       agePatient: this.addCasForm.get('agePatient').value,
       symptomePatient: this.addCasForm.get('symptomePatient').value,
    };
    //  this.casService.createNewCas(nomCas);
    //  this.router.navigate(['/all-cas']);
   };
     
 }
