import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { chatData } from 'src/app/models/chat';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  @ViewChild('reset') reset!: ElementRef;

  messages: chatData[] = [];
  exist: boolean = true;
  chatResponseDelay = this.chatService.chatResponseDelay;

  constructor(public chatService: ChatService) {
  }

  ngOnInit(): void {
    this.exist = false;
    this.messages.push({ 'msg': this.chatService.answeringUser('im1'), 'holder': 'bot' });
    this.messages.push({ 'msg': this.chatService.answeringUser('im2'), 'holder': 'bot' });
    this.messages.push({ 'msg': this.chatService.answeringUser('im3'), 'holder': 'bot' });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  checkingMethod(){
    //yet to be implemented
    //yet to be implemented
  }

  chatBotClicked() {
    if (this.exist == true) {
      this.exist = false;
    } else if (this.exist == false) {
      this.exist = true;
    }
  }

  getBotAnswer(question: string) {
    this.reset.nativeElement.value = "";
    var questionFromUser = {
      'msg': question,
      'holder': 'user'
    }
    this.messages.push(questionFromUser);
    let answer = this.chatService.answeringUser(question);
    let answerFromBot = {
      'msg': answer,
      'holder': 'bot'
    }
    setTimeout(() => {
      this.messages.push(answerFromBot);
    }, this.chatResponseDelay)
  }

  myControl = new FormControl('');

  filteredOptions: Observable<string[]> | undefined;

  searchData: Array<any> = [];
  searchResultMessage = "";
  imageUrlForSearch = "";

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.chatService.options.filter(option => option.toLowerCase().includes(filterValue));
  }


}

