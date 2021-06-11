import { Component, OnInit } from '@angular/core';
import { Race } from '../interfaces';
import { LlistatServiceService } from '../llistat-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  races: Race[] = [];

  constructor(private llistatService: LlistatServiceService) {}

  ngOnInit() {
    this.llistatService.fetchRaces().subscribe(resp => {
      this.races = resp;
    },
    error => {
      console.log(error);
    }
    )
  }

}
