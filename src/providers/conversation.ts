import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import Parse from 'parse';


export class Message {
  receiver: Parse.User;
  sender: Parse.User;
  messageBody: string;
}

@Injectable()
export class Conversation {

  constructor(public http: Http) {
    console.log('Hello Conversation Provider');
  }

}
