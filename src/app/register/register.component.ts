import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted = false
  myForm: FormGroup;
  emailPattern = "[A-Za-z0-9._%+-]{1,}@[a-zA-Z-_.]{1,}[.]{1}[a-zA-Z]{2,}";

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(form: FormGroup) {
    this.submitted = true
    console.log(form.valid);
    if (form.valid) {
      console.log('Name ==', form.value.name);
      console.log('Email == ', form.value.email);
      console.log('Message ==', form.value.password);
      this.router.navigate(['/task-module']);
    }
  }

}
