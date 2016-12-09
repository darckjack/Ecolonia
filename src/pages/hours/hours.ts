import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SearchPage } from '../search/search';

/*
  Generated class for the Hours page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hours',
  templateUrl: 'hours.html'
})
export class HoursPage {

  from: string;
  to: string;
  day: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('Hello HoursPage Page');
  }

  public setHours() {
    var user = Parse.User.current();
    if (this.from === '' || this.to === '') {
      this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Debes Asignar un horario de al menos 2 horas',
        buttons: ['Ok']
      }).present();
    } else {
      user.set('from', this.from);
      user.set('to', this.to);
      user.set('day', this.day);
      
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
    this.navCtrl.setRoot(SearchPage);
  }

}
