import { Injectable } from '@angular/core';
declare var alertify: any;


@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message(msg: string, msgT: MessageType) {
    alertify[msgT](msg);
  }
}


export enum MessageType {
  Error = "error",
  Warn = "warning",
  Notify = "notify"
} 