import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Postpone page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-postpone',
  templateUrl: 'postpone.html'
})
export class PostponePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PostponePage Page');
  }

}
