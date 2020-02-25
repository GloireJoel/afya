import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CasService } from '../services/cas.service';




@Component({
  selector: 'app-add-cas',
  templateUrl: './add-cas.component.html',
  styleUrls: ['./add-cas.component.css']
})
export class AddCasComponent implements OnInit {
  addCasForm :FormGroup;
  loading= false;
  fileUrl: string ='';
  loaded = false;
  constructor( private frombuilder:FormBuilder, private casService:CasService,
               private router: Router){}
                
  ngOnInit(){
     this.initCas();
  }

  initCas(){
    this.addCasForm = this.frombuilder.group({
            dateSymptome: ['', [Validators.required]],
            poidsPatient:['', [Validators.required]],
            agePatient:['', [Validators.required]],
            symptomePatient:['', [Validators.required]],
    })
    
  }
   saveCas(){
    const nomCas = {
      dateSymptome: this.addCasForm.get('dateSymptome').value,
      poidsPatient: this.addCasForm.get('poidsPatient').value,
      agePatient: this.addCasForm.get('agePatient').value,
      symptomePatient: this.addCasForm.get('symptomePatient').value,
      
     };
     this.casService.createNewSaveCas(nomCas);
     this.router.navigate(['/all-cas']);
   };
//    onUploadFile(file: File) {
//     this.loading = true;
//     this.casService.uploadFile(file).then(
//       (url: string) => {
//         this.fileUrl = url;
//         this.loading = false;
//         this.loaded = true;
//       }
//     );
//   }
//   detectFiles(event) {
//     this.onUploadFile(event.target.files[0]);
//   }
 }
