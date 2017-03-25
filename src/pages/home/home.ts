import { Component } from '@angular/core';

import { NavController, Events } from 'ionic-angular';
import { AddPlanetaPage } from '../add-planeta/add-planeta';
import { Planeta } from '../../models/planeta';
import {PlanetaDao} from '../../providers/database/planeta-dao';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  planetas:Planeta[]

  constructor(public navCtrl: NavController, public events:Events, public dao:PlanetaDao) {
    this.planetas = [];
    events.subscribe("db:ready",this.loadPlanetas)
  }

  ionViewDidEnter(){
    this.loadPlanetas();
  }

  loadPlanetas(){
    this.dao.all().then(data =>{
      this.planetas = data;
    })
  }

  goToAdd() {
    this.navCtrl.push(AddPlanetaPage);
  }

}
