import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

import Parse from 'parse';

declare var FCMPlugin;


@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  user: Parse.User;
  job: string;
  users: Parse.Object[];
  location: Parse.GeoPoint;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.user = Parse.User.current();
    this.getLocation();
    FCMPlugin.getToken(token => {
      this.user.set('device_token', token);
      this.user.save();
    });
    if (this.location) {
      this.user.set('location', this.location);
      this.user.save(null, {
        success: (user) => {
          console.log(this.location);
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

  ionViewDidLoad() {
    
  }

  getLocation() {
    Geolocation.getCurrentPosition((location) => {
      var point = new Parse.GeoPoint({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      });
      this.location = point;
    });
  }

  public search() {
    console.log(this.location);
    var query = new Parse.Query(Parse.User);
    query.equalTo("job", this.job);
    query.near('location', this.location);
    query.find().then((users) => {
      if (users.length < 1) {
        this.alertCtrl.create({
          title: 'Error',
          subTitle: 'No hay ecolonos cerca de ti',
          buttons: ['Ok']
        }).present();
      } else {
        this.users = users as Parse.User[];
      }
    });
  }

}
