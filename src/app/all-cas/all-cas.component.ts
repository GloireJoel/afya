import { Component, OnInit } from '@angular/core';
import { Cas } from '../modeles/cas';
import { Subscription } from 'rxjs';
import { CasService } from '../services/cas.service';

@Component({
  selector: 'app-all-cas',
  templateUrl: './all-cas.component.html',
  styleUrls: ['./all-cas.component.css']
})
export class AllCasComponent implements OnInit {
  cass: Cas[] = [];
  casSubscription: Subscription;

  constructor(
    public casService: CasService
) { }

  ngOnInit() { {
    this.casSubscription = this.casService.casSubject.subscribe(
      (data: Cas[]) => {
        this.cass = data;
      }
    )
  }
  }

}
