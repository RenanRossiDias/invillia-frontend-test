import { Injectable } from '@angular/core';
import hurryUpMessages from '../../../assets/json/hurryUpMessages.json';
import loadingMessages from '../../../assets/json/loadingMessages.json'

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

  retrieveLoadingMessages(): Promise<Array<string>> {
    const messages = loadingMessages.messages
    return new Promise((resolve) => {
      resolve(messages)
    })
  } 
}
