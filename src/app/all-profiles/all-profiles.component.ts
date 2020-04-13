import { Component, OnInit } from '@angular/core';
import { Profile } from '../modeles/profile';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-profiles',
  templateUrl: './all-profiles.component.html',
  styleUrls: ['./all-profiles.component.css']
})
export class AllProfilesComponent implements OnInit {

  profiles: Profile[] = [];
  profileSubscription: Subscription;

  constructor(private profileService: ProfileService,
    private router: Router) 
    { }

  ngOnInit() {
    this.profileSubscription = this.profileService.profilelSubject.subscribe(
      (data: Profile[]) => {
        this.profiles = data;
      }
    );
  }
}
