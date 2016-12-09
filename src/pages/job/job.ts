import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HoursPage } from '../hours/hours';

import Parse from 'parse';

/*
  Generated class for the Job page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-job',
  templateUrl: 'job.html'
})
export class JobPage {

  job: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('Hello JobPage Page');
  }

  public setJob() {
    var user = Parse.User.current();
    if (this.job === '' || this.job === undefined) {
      this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Debes seleccionar una opcion',
        buttons: ['Ok']
      }).present();
    } else {
      user.set('job', this.job);

      user.save(null, {
        success: (user) => {
          this.navCtrl.push(HoursPage);
        },
        error: (user, error) => {
          this.alertCtrl.create({
            title: 'Error: ' + error.code,
            subTitle: error.message,
            buttons: ['Ok']
          }).present();
        }
      });
    }
  }
}
