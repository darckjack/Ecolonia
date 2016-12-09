import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';

import { ConfigPage } from '../pages/config/config';
import { ContactsPage } from '../pages/contacts/contacts';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { HelpPage } from '../pages/help/help';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SearchPage } from '../pages/search/search';
import { HomePage } from '../pages/home/home';

import Parse from 'parse';

declare var FCMPlugin;

@Component({
  templateUrl: 'app.html'
})
export class Ecolonia {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  local: Storage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public alertCtrl: AlertController) {
    this.local = new Storage();
    this.initializeApp();

    Parse.initialize('fWSGHqd6mwpvHZZBlp1BaS5ACU638atcYSkisFT2', 'EK07jRudFlpTbq2esiPzbraeCPNaUsVxi0DPHGWZ');
    Parse.serverURL = 'https://juangomez.me/parse';

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Perfil', component: EditProfilePage, icon: 'person' },
      { title: 'Buscar', component: SearchPage, icon: 'search' },
      { title: 'Notificaciones', component: NotificationsPage, icon: 'notifications' },
      { title: 'Chat', component: ContactsPage, icon: 'contacts' },
      { title: 'Configuracion', component: ConfigPage, icon: 'settings' },
      { title: 'Ayuda', component: HelpPage, icon: 'help-buoy' }
      //{ title: 'Cerrar Sesion', component: , icon: 'exit' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

    
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logOut() {
    Parse.User.logOut().then(() => {
      this.nav.setRoot(HomePage);
    });
  }
}
