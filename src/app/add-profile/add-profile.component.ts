import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {

  addProfileForm:FormGroup;
  loading= false;
  fileUrl: string ='';
  loaded = false;

  constructor(private formBuilder:FormBuilder,
              private profileService: ProfileService,
              private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.addProfileForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      lieuNaissance: ['', [Validators.required]],
      dateNaissance: null,
      profession: ['', [Validators.required]],
      typeUser: ['', [Validators.required]],
      //photo: null,
      genre: ['', [Validators.required]]
    });
  }

  saveProfile(){
    const profile = {
      nom: this.addProfileForm.get('nom').value,
      prenom: this.addProfileForm.get('prenom').value,
      email: this.addProfileForm.get('email').value,
      telephone: this.addProfileForm.get('telephone').value,
      adresse: this.addProfileForm.get('adresse').value,
      lieuNassaince: this.addProfileForm.get('lieuNaissance').value,
      dateNaissance: this.addProfileForm.get('dateNaissance').value,
      profession: this.addProfileForm.get('profession').value,
      typeUser: this.addProfileForm.get('typeUser').value,
     // photo: null,
      genre: this.addProfileForm.get('genre').value,
    };
    this.profileService.createNewProfile(profile);
    this.router.navigate(['/all-profiles']);
  
  }

  onUploadFile(file: File) {
    this.loading = true;
    this.profileService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.loading = false;
        this.loaded = true;
      }
    );
  }
  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }

}
