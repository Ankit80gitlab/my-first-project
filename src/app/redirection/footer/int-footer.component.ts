import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { first } from 'rxjs/operators';
@Component({
  selector: 'int-footer',
  templateUrl: './int-footer.component.html',
  styleUrls: ['./int-footer.component.css']
})
export class IntFooterComponent {
  title = 'Angular 16 Crud example';
  form!: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
   ) { }

    ngOnInit() {
      //  alert('INT-Footer');
    }   
}