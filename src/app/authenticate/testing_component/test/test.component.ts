import { Component } from '@angular/core';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { chatData2 } from 'src/app/models/testModel';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  constructor(private idle: Idle) { }

  items = 0;
  editClicked = false;


  audio = new Audio();

  playAudio(): void {
    //console.log(fileUrl)
    this.audio.src = "https://www.w3schools.com/jsref/horse.ogg";
    this.audio.load();
    this.audio.play();
  }

  stopAudio() {
    this.audio.pause();
  }


  ngOnInit() {
    this.editClicked = false;
  }

  data = {
    "work_type": "Fabricación",
    "work_type_resp": "Mesa",
    "looking_for": "Relación Calidad/Precio",
    "image": "https://s3-sa-east-1.amazonaws.com/online-quotation-images/153366018967.png",
    "width": "22",
    "high": "34",
    "depth": "32mm",
    "modifications": "mod"
  }

  courses: any;
  loadCourses() {


    this.courses = [
      { id: 1, name: 'course 1' },
      { id: 2, name: 'course 2' },
      { id: 3, name: 'course 3' }
    ]
  };

  users = <any>[]

  init() {
    this.users = [
      { name: 'A', id: 1 },
      { name: 'B', id: 2 },
      { name: 'C', id: 3 },
      { name: 'D', id: 4 },
      { name: 'E', id: 5 }
    ];
  }

  edit(data: any) {
    this.editClicked = true;
  }
  editComplete() {
    this.editClicked = false;
  }

  songs = [
    { id: 1, name: 'song1', fileUrl: '' },
    { id: 2, name: 'song2', fileUrl: '' },
    { id: 3, name: 'song3', fileUrl: '' },
    { id: 4, name: 'song4', fileUrl: '' },
    { id: 5, name: 'song5', fileUrl: '' },
  ]


}
