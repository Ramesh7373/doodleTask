import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/service/users.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  users: any = []
  showForm = false;
  myForm
  heading
  page: number = 1;
  itemsPerPage = 10
  totalLength: any;

  constructor(private userService: UsersService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getusers()
  }

  getusers() {
    this.userService.getUsers().subscribe(res => {
      console.log(res.data);
      this.users = res.data
    })
  }

  createUserForm() {
    this.myForm = this.formBuilder.group({
      tourist_name: ['', [Validators.required]],
      tourist_email: ['', [Validators.required]],
      tourist_location: ['', [Validators.required]],
    });
  }

  updateUserForm(user) {
    this.myForm = this.formBuilder.group({
      id: [user.id, [Validators.required]],
      tourist_name: [user.tourist_name, [Validators.required]],
      tourist_email: [user.tourist_email, [Validators.required]],
      tourist_location: [user.tourist_location, [Validators.required]],
    });
  }

  onSubmit(form, heading) {
    if (form.valid && heading == 'Create User') {
      this.CreateUser()
    }
    else {
      this.updateUser()
    }

  }


  CreateUser() {
    let data = {
      tourist_name: this.myForm.value.tourist_name,
      tourist_email: this.myForm.value.tourist_email,
      tourist_location: this.myForm.value.tourist_location,
    }
    this.userService.postusers(data).subscribe(res => {
      console.log(res);
      if (res) {
        this.showForm = false;
        this.getusers()
      }
    })
  }

  editUser(user) {
    console.log(user);
    this.showForm = true
    this.heading = 'Update User'
    this.updateUserForm(user)
  }

  updateUser() {
    let data = {
      id: this.myForm.value.id,
      tourist_name: this.myForm.value.tourist_name,
      tourist_email: this.myForm.value.tourist_email,
      tourist_location: this.myForm.value.tourist_location,
    }
    this.userService.updateUser(data).subscribe(res => {
      this.showForm = false;
      this.getusers()
    })
  }

  deleteUser(data){
    this.userService.deleteUser(data).subscribe(res => {
      this.getusers()
    })
  }

}
