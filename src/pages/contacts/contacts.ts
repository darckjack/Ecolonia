import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ConversationPage } from '../conversation/conversation';

import Parse from 'parse';

/*
  Generated class for the Contacts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {
  user: Parse.User;
  contacts: Parse.User[];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.user = Parse.User.current();
    var query = new Parse.Query(Parse.User);

    query.ascending(['first_name', 'last_name']);
    query.find().then( (users) => {
      this.contacts = users as Parse.User[];
    });
  }

  ionViewDidLoad() {
    
  }

  public sendRequest() {
    let alert = this.alertCtrl.create({
      title: 'Confirmar solicitud',
      subTitle: 'Confirmar solicitud de: Maestro de musica \n El dia: Viernes \n A las: 4:00 PM',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'OK',
          role: 'save'
        }
      ]
    });
    alert.present();
  }

  public openChat(contact: Parse.User) {
    this.navCtrl.push(ConversationPage, {'selectedContact': contact});
  }

}
