import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Planeta } from '../../models/planeta';

@Component({
  selector: 'page-add-planeta',
  templateUrl: 'add-planeta.html'
})
export class AddPlanetaPage {

  planeta: Planeta;

  constructor(public navCtrl: NavController, public navParams: NavParams) { 
    this.planeta = new Planeta();
  }

  save() {

  }

}
