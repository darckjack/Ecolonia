import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditHoursPage } from '../edit-hours/edit-hours';
import { EditJobPage } from '../edit-job/edit-job';

/*
  Generated class for the Config page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class ConfigPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ConfigPage Page');
  }

  public editHours() {
    this.navCtrl.push(EditHoursPage);
  }

  public editJob() {
    this.navCtrl.push(EditJobPage);
  }

}
