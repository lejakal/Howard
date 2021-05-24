import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { TaskService } from './../../services/task.service';
import { Aspirantes, casa, Task } from './../../interfaces/task';
import { Router } from '@angular/router';
import { inject } from '@angular/core/testing';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  task!: Array<Task>;
  casaForm = new FormGroup({
  casa : new FormControl('',Validators.required)
})


  constructor(
    private taskService: TaskService, private router:Router
  ){}

  ngOnInit(): void {
    this.taskService.getStudents();
  }

  getHome(casas: string) {  
    this.taskService.getHome(casas).subscribe(studiante => {
      this.task=studiante;
  });
  }
  getStudents() {
  this.taskService.getStudents().subscribe(studiante => {
    this.task=studiante;
  });
  }

  getStaff() {
    this.taskService.getStaff().subscribe(studiante => {
      this.task=studiante;
  
});
}

}
