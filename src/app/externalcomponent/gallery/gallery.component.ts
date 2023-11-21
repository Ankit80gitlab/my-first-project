import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent  {
  form!: FormGroup;
  name = 'Angular ';
  pageType:boolean=true;
  url:string="";
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private appcom:AppComponent,  
){}

ngOnInit() {

     
  }
}
