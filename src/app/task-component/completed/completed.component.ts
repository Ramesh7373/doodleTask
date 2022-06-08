import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskServiceService } from 'src/app/task-component/task-service.service';
import { Location } from '@angular/common'
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  heading = 'Completed'
  tasks;

  @Output() completedPage:EventEmitter<any> = new EventEmitter<any>()

  constructor(private taskServiceService: TaskServiceService, private location: Location) { }

  ngOnInit(): void {
    const tasks = this.taskServiceService.getTasks();
    tasks.subscribe((studentsData) => {
      this.tasks = studentsData;
    });
  }

  close(data) {
    this.completedPage.emit(data)
  }

}
