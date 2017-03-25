import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { DatabaseConnection } from '../providers/database/database-connection';
import { PlanetaDao } from '../providers/database/planeta-dao';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform, con:DatabaseConnection, dao:PlanetaDao, events:Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      con.openConnection().then(()=>{
        dao.createTable().then(()=>{
          events.publish("db:ready");
        });
      });

    });
  }
}
