import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the EditJob page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-job',
  templateUrl: 'edit-job.html'
})
export class EditJobPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello EditJobPage Page');
  }

}
