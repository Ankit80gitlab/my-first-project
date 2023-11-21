import { Injectable } from '@angular/core';

export class Message {
  constructor(public author: string, public content: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chatResponseDelay:number=1200;
  constructor() { }

  options: string[] = [
    '◆ What is the URL of SPARROW?',
    '◆ What is Rajeev Gandhi Shramik Kalyan Yojana (RGSKY)?',
    '◆ Where and how many ESIS hospitals in Gujarat?',
    '◆ What is C-18?',
    '◆ What is Confinement?',
    '◆ What is ESI contribution share of Employee?',
    '◆ What is Atal Beemit Vyakti Kalyan Yojana (ABVKY)?'];

  messageMap: any = {

    //initial messages
    "im1": "Hi, I am ESIC मित्र.I am your PDA.I can walk through your queries regarding ESIC",

    "im2": "Welcome to ESIC.The Employees’ State Insurance Scheme is an integrated measure of Social" +
      "Insurance embodied in the Employees’ State Insurance Act and it is designed to accomplish the task" +
      "of protecting ‘employees’ as defined in the Employees’ State Insurance Act",

    "im3":'You can ask me queries like'+'\n'+
    '◆ What is Confinement?'+'\n'+
    '◆ What is ESI contribution share of Employee?'+'\n'+
    '◆ Where and how many ESIS hospitals in Gujarat?'+'\n'+
    '◆ What is Atal Beemit Vyakti Kalyan Yojana (ABVKY)?'+'\n'+
    '◆ What is C-18?',

    //greetings
    "hi": "Hello",

    //questions
    "what you can do": "I can answer",
    "what is angular": "its a frontend framework",

    //acknowledgement
    "ok": "great!",

    //error message
    "default": "I cant understand",
  }

  answeringUser(question: any) {
    return (this.messageMap[question] || this.messageMap['default']);
  }  

}


