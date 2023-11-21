import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { first } from 'rxjs/operators';
@Component({
  selector: 'ext-footer',
  templateUrl: './ext-footer.component.html',
  styleUrls: ['./ext-footer.component.css']
})
export class ExtFooterComponent {
  title = 'Angular 16 Crud example';
  form!: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        
    ) { }

    ngOnInit() {
    }   
}