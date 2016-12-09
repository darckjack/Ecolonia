import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Ecolonia } from './app.component';
import { ChangePassPage } from '../pages/change-pass/change-pass';
import { ConfigPage } from '../pages/config/config';
import { ContactsPage } from '../pages/contacts/contacts';
import { ConversationPage } from '../pages/conversation/conversation';
import { EditHoursPage } from '../pages/edit-hours/edit-hours';
import { EditJobPage } from '../pages/edit-job/edit-job';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { HelpPage } from '../pages/help/help';
import { HoursPage } from '../pages/hours/hours';
import { JobPage } from '../pages/job/job';
import { LoginPage } from '../pages/login/login';
import { NotificationsPage } from '../pages/notifications/notifications';
import { RequestPage } from '../pages/request/request';
import { RegistrationPage } from '../pages/registration/registration';
import { RessetPassPage } from '../pages/resset-pass/resset-pass';
import { RessetSuccessPage } from '../pages/resset-success/resset-success';
import { SearchPage } from '../pages/search/search';
import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';

@NgModule({
  declarations: [
    Ecolonia,
    ChangePassPage,
    ConfigPage,
    ContactsPage,
    ConversationPage,
    EditHoursPage,
    EditJobPage,
    EditProfilePage,
    HelpPage,
    HomePage,
    HoursPage,
    JobPage,
    LoginPage,
    NotificationsPage,
    RequestPage,
    RegistrationPage,
    RessetPassPage,
    RessetSuccessPage,
    SearchPage,
    GalleryPage
  ],
  imports: [
    IonicModule.forRoot(Ecolonia)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Ecolonia,
    ChangePassPage,
    ConfigPage,
    ContactsPage,
    ConversationPage,
    EditHoursPage,
    EditJobPage,
    EditProfilePage,
    HelpPage,
    HomePage,
    HoursPage,
    JobPage,
    LoginPage,
    NotificationsPage,
    RequestPage,
    RegistrationPage,
    RessetPassPage,
    RessetSuccessPage,
    SearchPage,
    GalleryPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
