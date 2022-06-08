import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  tasks = [{
    id: 1,
    task: 'Walking',
    date: '05-06-2022'
  },
  {
    id: 2,
    task: 'Meeting',
    date: '06-06-2022'
  },
  {
    id: 3,
    task: 'Sleeping',
    date: '07-06-2022'
  }];

  constructor() { }


  public getTasks(): any {
     const taskObservable = new Observable(observer => {
            setTimeout(() => {
                observer.next(this.tasks);
            }, 1000);
     });

     return taskObservable;
 }
}
