import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import Parse from 'parse';

/*
  Generated class for the Notifications page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})
export class NotificationsPage {
  user: Parse.User;
  notifications: Parse.Object[];
  empty: Boolean;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.user = Parse.User.current();
    var senderQuery = new Parse.Query(Parse.Object.extend('Notification'));
    senderQuery.equalTo('Sender', this.user);
    senderQuery.equalTo('Read', false);

    var reciverQuery = new Parse.Query(Parse.Object.extend('Notification'));
    reciverQuery.equalTo('Receiver', this.user);
    reciverQuery.equalTo('Accepted', false);

    var totalQuery = Parse.Query.or(senderQuery, reciverQuery);

    totalQuery.find().then((notifications) => {
      
      if (notifications.length < 1) {
        this.empty = false;
      } else {
        this.notifications = notifications;
        this.empty = true;
      }
    });
  }

  ionViewDidLoad() {
    
  }

}
