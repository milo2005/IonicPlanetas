import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddPlanetaPage } from '../pages/add-planeta/add-planeta';

import { DatabaseConnection } from '../providers/database/database-connection';
import { PlanetaDao } from '../providers/database/planeta-dao';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPlanetaPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPlanetaPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }
    , DatabaseConnection
    , PlanetaDao]
})
export class AppModule { }
