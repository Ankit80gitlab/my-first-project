import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { Menu } from '../../models/Menu';
import { AppComponent } from '../../app.component';
import {ExtMenuService} from '../../services/extmenu.service';
@Component({
  selector: 'ext-nav',
  templateUrl: './ext-nav.component.html',
  styleUrls: ['./ext-nav.component.css']
})
export class ExtNavComponent  {
  form!: FormGroup;
  name = 'Angular ';
  menu:Menu[];
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private appcom:AppComponent, 
    private menuservice:ExtMenuService,  
){
    this.menu=this.menuservice.getExtMenu();    
}
 
}
