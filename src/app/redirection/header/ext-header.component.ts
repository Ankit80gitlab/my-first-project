import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { first } from 'rxjs/operators';
@Component({
  selector: 'ext-header',
  templateUrl: './ext-header.component.html',
  styleUrls: ['./ext-header.component.css']
})
export class ExtHeaderComponent {
  title = 'Angular 16 Crud example';
  form!: FormGroup;
    loading = false;
    submitted = false;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
    ) { }
    ngOnInit() {    
    }   
}