import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the EditHours page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-hours',
  templateUrl: 'edit-hours.html'
})
export class EditHoursPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello EditHoursPage Page');
  }

}
