import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { RegistrationPage } from '../registration/registration';
import Parse from 'parse';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  email: string;
  password: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    Parse.initialize('fWSGHqd6mwpvHZZBlp1BaS5ACU638atcYSkisFT2', 'EK07jRudFlpTbq2esiPzbraeCPNaUsVxi0DPHGWZ');
    Parse.serverURL = 'https://juangomez.me/parse';
  }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  public login() {
      
      Parse.User.logIn(this.email, this.password, {
        success: (user) => {
          this.navCtrl.setRoot(SearchPage);
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

  public facebookLogin() {
    var expiresIn = new Date();
    Parse.FacebookUtils.logIn(null);
  }

  public register() {
    this.navCtrl.setRoot(RegistrationPage);
  }

}
