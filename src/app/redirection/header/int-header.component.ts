import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { first } from 'rxjs/operators';
@Component({
  selector: 'int-header',
  templateUrl: './int-header.component.html',
  styleUrls: ['./int-header.component.css']
})
export class IntHeaderComponent {
  title = 'Angular 16 Crud example';
  form!: FormGroup;
   constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
     ) { }
    ngOnInit() {
    //  alert('alert on init int-header');
        
    }
}