import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AddPlanetaPage } from '../add-planeta/add-planeta';
import { Planeta } from '../../models/planeta';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  planetas:Planeta[]

  constructor(public navCtrl: NavController) {
    this.planetas = [];
  }

  ionViewDidLoad(){

  }

  goToAdd() {
    this.navCtrl.push(AddPlanetaPage);
  }

}
