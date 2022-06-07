import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.scss']
})
export class TaskComponentComponent implements OnInit {

  myForm: FormGroup;
  emailPattern = "[A-Za-z0-9._%+-]{1,}@[a-zA-Z-_.]{1,}[.]{1}[a-zA-Z]{2,}";

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.myForm = this.formBuilder.group({
      taskname: ['',[Validators.required, Validators.maxLength(50)]],
      date: [],
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form.valid);
    if(form.valid){
    console.log('Name ==', form.value.taskname);
    console.log('Email == ', form.value.date);
    }
  }

}
