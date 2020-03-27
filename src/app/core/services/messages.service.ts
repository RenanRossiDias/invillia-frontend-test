import { Injectable } from '@angular/core';
import hurryUpMessages from '../../../assets/json/hurryUpMessages.json';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  private _messages: Array<string>

  get messages() { return this._messages }

  retrieveHurryUpMessages(): Promise<Array<string>> {
    const messages = hurryUpMessages.messages
    return new Promise((resolve) => {
      resolve(messages)
    })
  }
}
