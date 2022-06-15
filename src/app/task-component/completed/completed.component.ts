import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TaskServiceService } from 'src/app/task-component/task-service.service';
import { Location } from '@angular/common'
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  // heading = 'Completed'
  tasks;
  color

  @Input() heading;
  @Output() completedPage:EventEmitter<any> = new EventEmitter<any>()

  constructor(private taskServiceService: TaskServiceService, private location: Location) { }

  ngOnInit(): void {
    const tasks = this.taskServiceService.getTasks();
    tasks.subscribe((studentsData) => {
      this.tasks = studentsData;
      this.tasks.forEach(item => {
        this.getRandomColor()
      })
    });
  }

  close(data) {
    this.completedPage.emit(data)
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
   this.color = '#';
    for (var i = 0; i < 6; i++) {
      this.color += letters[Math.floor(Math.random() * 16)];
    }
    return this.color;
  }

}
