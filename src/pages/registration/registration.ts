import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { JobPage } from '../job/job';
import Parse from 'parse';

/*
  Generated class for the Registration page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {
  first_name: string;
  last_name: string;
  age: number;
  country: string;
  email: string;
  password: string;


  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('Hello RegistrationPage Page');
  }

  public register() {
    // this.navCtrl.push(JobPage);
    var user = new Parse.User();
    
    user.set('first_name', this.first_name);
    user.set('last_name', this.last_name);
    user.set('age', this.age);
    user.set('country', this.country);
    user.set('username', this.email);
    user.set('email', this.email);
    user.set('password', this.password);

    user.signUp(null, {
      success: (user) => {
        console.log(user);
        this.navCtrl.push(JobPage);
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

  public back() {
    this.navCtrl.pop();
  }

}
