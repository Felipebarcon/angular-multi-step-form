import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  public personalInfoForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  get name() {
    return this.personalInfoForm.get('name');
  }

  get email() {
    return this.personalInfoForm.get('email');
  }

  get phone() {
    return this.personalInfoForm.get('phone');
  }

  ngOnInit() {}

  submit(): void {
    console.log(this.personalInfoForm);
  }
}
