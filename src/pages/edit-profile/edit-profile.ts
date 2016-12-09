import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, ImagePicker } from 'ionic-native';
import { GalleryPage } from '../gallery/gallery';

import Parse from 'parse';
/*
  Generated class for the EditProfile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html'
})
export class EditProfilePage {
  user: Parse.User;
  email: string;
  password: string;

  constructor(public navCtrl: NavController) {
    this.user = Parse.User.current();
  }

  ionViewDidLoad() {
    console.log('Hello EditProfilePage Page');
  }

  public openGallery () {
    let options = {
      maximumImagesCount: 8,
      width: 500,
      height: 500,
      quality: 75
    }

    ImagePicker.getPictures(options).then(
      file_uris => this.navCtrl.push(GalleryPage, {images: file_uris}),
      err => console.log('uh oh')
    );
  }

  public openCamera() {
    Camera.getPicture();
  }

}
