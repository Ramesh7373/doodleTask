import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { TaskServiceService } from 'src/app/task-component/task-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.scss']
})
export class TaskComponentComponent implements OnInit {

  heading = 'Task';
  showCompleted = false
  selectedTask = false
  selectedTaskList = []
  myForm: FormGroup;
  emailPattern = "[A-Za-z0-9._%+-]{1,}@[a-zA-Z-_.]{1,}[.]{1}[a-zA-Z]{2,}";
  childHeader : any = 'List of Tasks'

  constructor(private formBuilder: FormBuilder, 
    private taskServiceService : TaskServiceService,private router: Router) { }

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

  newEmittedData(e){
    this.selectedTaskList = []
    console.log(e);
    if(e){
      this.selectedTaskList.push(e)
      this.taskServiceService.SharingData.next(this.selectedTaskList)
      this.showCompleted = false
      this.selectedTask = true
    }
    
  }

  openCompleted(){
    this.showCompleted = true
    
  }

  moveToUsers(){
    this.router.navigate(['/users'])
  }

}
