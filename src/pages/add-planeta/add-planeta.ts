import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Planeta } from '../../models/planeta';
import {PlanetaDao} from '../../providers/database/planeta-dao';

@Component({
  selector: 'page-add-planeta',
  templateUrl: 'add-planeta.html'
})
export class AddPlanetaPage {

  planeta: Planeta;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dao:PlanetaDao) { 
    this.planeta = new Planeta();
  }

  save() {
    this.dao.insert(this.planeta);
    this.navCtrl.pop();
  }

}
