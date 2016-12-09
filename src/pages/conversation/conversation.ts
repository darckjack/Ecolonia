import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native';
import { Http, Headers } from '@angular/http';

import Parse from 'parse';
import PubNub from 'pubnub';

declare var FCMPlugin;

/*
  Generated class for the Conversation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-conversation',
  templateUrl: 'conversation.html'
})
export class ConversationPage {
  receiver: Parse.User;
  sender: Parse.User;
  messages: Parse.Object[];
  newConversation: Boolean;
  message: string;
  pubnub: any;
  url: string;
  headers: Headers;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.sender = Parse.User.current();
    this.receiver = navParams.get('selectedContact');
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'key=AIzaSyBL88L7BsoDHg9_OniYDX8j73CF8uDSVXE');
    this.pubnub = new PubNub({
      subscribeKey: 'sub-c-2a3655ea-b896-11e6-9868-02ee2ddab7fe',
      publishKey: 'pub-c-bd9faa28-1bae-47bd-9ad3-17f3c8b957ba'
    });
    this.loadMessages();
    this.pubnub.addListener({
      status: (statusEvent) => {
        if (statusEvent.category === "PNUnknownCategory") {
          var newState = {
            new: 'error'
          };
          this.pubnub.setState (
            {
              state: newState
            },
            (status) => {
              console.log(statusEvent.errorData.message);
            }
          );
        }
      },
      message: (message) => {
        LocalNotifications.clearAll();
        LocalNotifications.schedule({
          id: 1,
          text: 'Haz recibido un mensaje de: ' + this.receiver.get('first_name')
        });
        this.loadMessages();
      }
    });

    this.pubnub.subscribe({
      channels: [this.receiver.getEmail() + ' ' + this.sender.getEmail(), this.sender.getEmail() + ' ' + this.receiver.getEmail()]
    });
  }

  ionViewDidLoad() {
    console.log('Hello ConversationPage Page');
  }

  loadMessages() {
    var senderQuery = new Parse.Query(Parse.Object.extend('Message'));
    senderQuery.equalTo("Receiver", this.receiver);
    senderQuery.equalTo("Sender", this.sender);

    var receiverQuery = new Parse.Query(Parse.Object.extend('Message'));
    receiverQuery.equalTo("Receiver", this.sender);
    receiverQuery.equalTo("Sender", this.receiver);

    var messageQuery = Parse.Query.or(senderQuery, receiverQuery);

    messageQuery.limit(10);

    messageQuery.descending('createdAt');

    messageQuery.find().then((messages) => {
      if (messages.length < 1) {
        this.newConversation = true;
      } else {
        this.messages = messages;
        this.newConversation = false;
      }
    });
  }

  public send() {
    var newMessage = new Parse.Object('Message');
    newMessage.set('Receiver', this.receiver);
    newMessage.set('Sender', this.sender);
    newMessage.set('message_body', this.message);

    newMessage.save().then((message) => {
      this.pubnub.publish(
        {
          message: this.message,
          channel: this.sender.getEmail() + ' ' + this.receiver.getEmail()
        },
        (status, response) => {
          if (status.error) {
            console.log(status);
          }
        }
      );
      this.message = '';
      this.loadMessages();
      let notification = {
        messageId: this.getMessageId(),
        
      }
    });
  }

  public getMessageId() {
    return Math.random() * 10000;
  }


}
