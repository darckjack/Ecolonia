import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Push } from 'ionc-native';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';
import { SearchPage } from '../search/search';
import Parse from 'parse';


/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    Parse.initialize('fWSGHqd6mwpvHZZBlp1BaS5ACU638atcYSkisFT2', 'EK07jRudFlpTbq2esiPzbraeCPNaUsVxi0DPHGWZ');
    Parse.serverURL = 'https://juangomez.me/parse';
  }

  ionViewDidLoad() {
    if (Parse.User.current()) {
      this.navCtrl.setRoot(SearchPage);
    }
    console.log('Hello HomePage Page');
  }

  public login() {
    this.navCtrl.push(LoginPage);
  }

  public register() {
    this.navCtrl.push(RegistrationPage);
  }

}
