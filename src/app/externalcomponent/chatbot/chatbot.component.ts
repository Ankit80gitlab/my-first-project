import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { chatData } from 'src/app/models/chat';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { chatData2 } from 'src/app/models/testModel';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  @ViewChild('reset') reset!: ElementRef;

  messages: chatData2[] = [];
  questionBasedOnKeyword: string[] = [];
  initialMessages: string[] = [];
  questionMap = new Map<string, string>();
  exist: boolean = false;
  chatResponseDelay: number = 0;
  userQuestion: string = '';

  constructor(public chatService: ChatService) {
  }

  ngOnInit(): void {
    this.exist = false;
    this.chatResponseDelay = this.chatService.chatResponseDelay;
    this.messages.push(
      {
        'holder': 'bot',
        'mainMsg': this.chatService.answeringUser('initMsg1'),
        'msg1': '', 'msg2': '', 'msg3': ''
      });
    this.displayInitialMessages();
    this.userQuestion = '';
  }

  chatBotClicked() {
    if (this.exist == true) {
      this.exist = false;
    } else if (this.exist == false) {
      this.exist = true;
    }
  }

  savingConversation(data: chatData2) {
    this.messages.push(data);
  }

  displayInitialMessages() {
    this.initialMessages = this.chatService.initialMessages();
    let initMsgArray: string[] = [];
    let k: number = 0;
    for (let i of this.initialMessages) {
      initMsgArray[k] = i;
      k++;
    }
    let initMsgFromBot = {
      'holder': 'bot',
      'mainMsg': initMsgArray[0],
      'msg1': initMsgArray[1],
      'msg2': initMsgArray[2],
      'msg3': initMsgArray[3]
    }
    setTimeout(() => {
      this.savingConversation(initMsgFromBot);
    }, this.chatResponseDelay)
  }

  findingQuestions(question: any) {
    // reseting input field
    this.userQuestion = question;
    this.reset.nativeElement.value = "";
    if (question === '') {
      console.log("invalid question");

    }
    else {
      var questionFromUser = {
        'holder': 'user',
        'mainMsg': question,
        'msg1': '',
        'msg2': '',
        'msg3': ''
      }
      // saving user question in messages array
      this.savingConversation(questionFromUser);

      // calling chat service to find question based on keyword
      this.questionBasedOnKeyword.length = 0;
      this.questionBasedOnKeyword = this.chatService.findingQuestions(question);
      let extractArray: string[] = [];
      let i: number = 0;
      for (let v of this.questionBasedOnKeyword) {
        extractArray[i] = v;
        i++;
        console.log(v);
      }
      if (extractArray.length == 0) {
        let answerFromBot = {
          'holder': 'bot',
          'mainMsg': 'Something went wrong. Please try again later',
          'msg1': '',
          'msg2': '',
          'msg3': ''
        }
        setTimeout(() => {
          this.savingConversation(answerFromBot);
        }, this.chatResponseDelay)
      }
      else if (extractArray[0].startsWith('Sorry, I can')) {
        let answerFromBot = {
          'holder': 'bot',
          'mainMsg': extractArray[0],
          'msg1': '',
          'msg2': '',
          'msg3': ''
        }
        setTimeout(() => {
          this.savingConversation(answerFromBot);
        }, this.chatResponseDelay)
      }
      else if (extractArray.length == 1) {
        let answerFromBot = {
          'holder': 'bot',
          'mainMsg': extractArray[0],
          'msg1': extractArray[1],
          'msg2': '',
          'msg3': ''
        }
        setTimeout(() => {
          this.savingConversation(answerFromBot);
        }, this.chatResponseDelay)
      }
      else if (extractArray.length == 2) {
        let answerFromBot = {
          'holder': 'bot',
          'mainMsg': extractArray[0],
          'msg1': extractArray[1],
          'msg2': '',
          'msg3': ''
        }
        setTimeout(() => {
          this.savingConversation(answerFromBot);
        }, this.chatResponseDelay)
      }
      else {
        let answerFromBot = {
          'holder': 'bot',
          'mainMsg': extractArray[0],
          'msg1': extractArray[1],
          'msg2': extractArray[2],
          'msg3': extractArray[3]
        }
        setTimeout(() => {
          this.savingConversation(answerFromBot);
        }, this.chatResponseDelay)
      }
    }
  }

  getBotAnswer(question: string) {
    this.questionMap = this.chatService.questionMap;
    var available: Boolean = false;

    for (let i of this.questionMap) {
      if (question == i[1]) {
        available = true;
      }
    }
    if (available) {
      console.log("available");
      var questionFromUser = {
        'holder': 'user',
        'mainMsg': question,
        'msg1': '',
        'msg2': '',
        'msg3': ''
      }
      this.savingConversation(questionFromUser);
      let ans: string = this.chatService.answerFromBot(question);
      let answerFromBot = {
        'holder': 'bot',
        'mainMsg': ans,
        'msg1': '',
        'msg2': '',
        'msg3': ''
      }
      this.savingConversation(answerFromBot);
      console.log(ans);
      this.relevantQuestions(this.userQuestion);
    }
    else {
      console.log("not available");
    }
  }

  relevantQuestions(question: any) {
    let mainMsg = "related queries : "
    if (question === '') {
      console.log("question not typed yet");
    }
    else {
      // calling chat service to find question based on keyword
      this.questionBasedOnKeyword.length = 0;
      this.questionBasedOnKeyword = this.chatService.findingQuestions(question);
      let extractArray: string[] = [];
      let i: number = 0;
      for (let v of this.questionBasedOnKeyword) {
        extractArray[i] = v;
        i++;
        console.log(v);
      }
      if (extractArray.length == 0) {
        let answerFromBot = {
          'holder': 'bot',
          'mainMsg': 'Something went wrong. Please try again later',
          'msg1': '',
          'msg2': '',
          'msg3': ''
        }
        setTimeout(() => {
          this.savingConversation(answerFromBot);
        }, this.chatResponseDelay)
      }
      else if (extractArray[0].startsWith('Sorry, I can')) {
        let answerFromBot = {
          'holder': 'bot',
          'mainMsg': extractArray[0],
          'msg1': '',
          'msg2': '',
          'msg3': ''
        }
        setTimeout(() => {
          this.savingConversation(answerFromBot);
        }, this.chatResponseDelay)
      }
      else if (extractArray.length == 1) {
        let answerFromBot = {
          'holder': 'bot',
          'mainMsg': mainMsg,
          'msg1': extractArray[1],
          'msg2': '',
          'msg3': ''
        }
        setTimeout(() => {
          this.savingConversation(answerFromBot);
        }, this.chatResponseDelay)
      }
      else if (extractArray.length == 2) {
        let answerFromBot = {
          'holder': 'bot',
          'mainMsg': mainMsg,
          'msg1': extractArray[1],
          'msg2': '',
          'msg3': ''
        }
        setTimeout(() => {
          this.savingConversation(answerFromBot);
        }, this.chatResponseDelay)
      }
      else {
        let answerFromBot = {
          'holder': 'bot',
          'mainMsg': mainMsg,
          'msg1': extractArray[1],
          'msg2': extractArray[2],
          'msg3': extractArray[3]
        }
        setTimeout(() => {
          this.savingConversation(answerFromBot);
        }, this.chatResponseDelay)
      }
    }
  }
}

