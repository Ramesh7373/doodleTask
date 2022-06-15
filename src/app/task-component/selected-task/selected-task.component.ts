import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/task-component/task-service.service';

@Component({
  selector: 'app-selected-task',
  templateUrl: './selected-task.component.html',
  styleUrls: ['./selected-task.component.scss']
})
export class SelectedTaskComponent implements OnInit {

  selectedTaskList

  constructor( private taskServiceService : TaskServiceService) { }

  ngOnInit(): void {
    this.taskServiceService.SharingData.subscribe((res) => {
      this.selectedTaskList = res
    })
  }

}
