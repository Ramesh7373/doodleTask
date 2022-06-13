import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  getapiURL = 'http://restapi.adequateshop.com/api/Tourist?page='
  postApiUrl = 'http://restapi.adequateshop.com/api/Tourist'
  updateURl = 'http://restapi.adequateshop.com/api/Tourist/'
  deleteUrl = 'http://restapi.adequateshop.com/api/Tourist/'

  constructor(private http: HttpClient) { }


  getUsers(data?: any,pageNum? : Number):Observable<any>{
    let page = pageNum ? pageNum : 1
    return this.http.get<any>(`${this.getapiURL}`+ page)
  }

  postusers(data? :any) :Observable<any>{
    return this.http.post<any>(`${this.postApiUrl}`, data)
  }

  updateUser(data? : any):Observable<any>{
    return this.http.put<any>(`${this.updateURl}` + data.id , data)
  }

  deleteUser(data : any):Observable<any>{
    return this.http.delete<any>(`${this.deleteUrl}`  + data.id)
  }
}
