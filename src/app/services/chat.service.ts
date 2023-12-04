import { Injectable } from '@angular/core';

export class Message {
  constructor(public author: string, public content: string) { }
}

@Injectable({
  providedIn: 'root'
})


export class ChatService {

  chatResponseDelay: number = 1200;
  constructor() { }

  keywords = [
    "pension",
    "withdraw",
    "esic",
    "hospital",
    "benifit",
    "insurance",
    "gratuity",
    "walk",
    "pens",
    "with",
    "aadhaar",
    "aadh"
  ];

  matchedQuestions: string[] = [];

  findingQuestions(value: any) {
    let found: boolean = false;
    this.matchedQuestions.length = 0;
    const filterValue = value.toLowerCase();

    // iterating keywords with the user input
    for (let i of this.keywords) {
      if (i == filterValue) {
        found = true;
      }
    }
    // if user input matches with the keywords
    if (found) {
      console.log("keyword found");
      let questValueArray: string[] = [];

      // creating an array to push all the questions from questionMap (key value pair)
      for (let j of this.questionMap) {
        questValueArray.push(j[1])
      }

      // matching user input with the questions
      this.matchedQuestions = questValueArray.filter(o => o.toLowerCase().includes(filterValue));
      if (this.matchedQuestions.length == 0) {
        console.log("keyword found but questions based on that never found");
        return this.matchedQuestions;
      }
      else {
        this.matchedQuestions.splice(0, 0, "Are you asking about these. Please click any of the link below");
        return this.matchedQuestions;
      }

    }
    // if user input does not matches with the keywords
    else {
      console.log("keyword not found");
      this.matchedQuestions.push("Sorry, I can't help you with this. You may please rephrase the question");
      return this.matchedQuestions;
    }
  }

  answerFromBot(question: string) {
    var answerFound: boolean = false;
    var answerForquestion: string = '';
    for (let k of this.questionMap) {
      if (k[1] == question) {
        answerFound = true;
        answerForquestion = k[0];
      }
    }
    if (answerFound) {
      return answerForquestion;
    }
    else { return "Sorry, I can't help you with this. You may please rephrase the question" }
  }

  initialMessages() {
    var initialMsgArray: string[] = [];
    var count = 0;
    for (let j of this.questionMap) {
      if (count < 3) {
        initialMsgArray.push(j[1]);
        count++;
      }
    }
    initialMsgArray.splice(0, 0, "You can ask me queries like :");
    return initialMsgArray;
  }

  questionMap = new Map<string, string>([
    ['New Pension System has been implemented already',
      'Whether New Pension System has been implemented withdraw in ESIC?'],

    ['Medical Benefit is provided through the ESIS Hospitals and Dispensaries run by the State',
      'What provisions of Pension walk & Gratuity applicable in ESIC?'],

    ['Their requirement without linking it to their wages and contributions',
      'Whether Regional Office ESIC Bangalore is providing Aadhaar seeding facility to Staffs and Pensioners?'],
  ]);


  questions: string[] = [
    'Whether New Pension System has been implemented withdraw in ESIC?',
    'What provisions of Pension & Gratuity applicable in ESIC?',
    'Whether Regional Office ESIC Bangalore is providing Aadhaar seeding facility to Staffs and Pensioners?'
  ];





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
    'initMsg1': "Hi, I am ESIC मित्र.I am your PDA.I can walk through your queries regarding ESIC",
    'initMsg2': "You can ask me queries like" + "/n" + "afa",
    'initMsg3': 'What is ESI contribution share of Employee?',
    'initMsg4': 'What is Atal Beemit Vyakti Kalyan Yojana',
    'initMsg5': 'Where and how many ESIS hospitals in Gujarat?',

    //greetings
    "hi": "Hello",

    //questions
    "what you can do": "I can answer",
    "what is angular": "its a frontend framework",

    //acknowledgement
    "ok": "great!",

    //error message
    "default": "Sorry, I can't help you with this. You may please rephrase the question.",
  }

  answeringUser(question: any) {
    return (this.messageMap[question] || this.messageMap['default']);
  }


}


