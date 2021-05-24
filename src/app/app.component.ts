import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafioAngular';
  constructor(
    private taskService: TaskService
  ){}

  getStaff() {
    this.taskService.getStaff()
    .subscribe(staff => {
      console.log(staff);
    });
  }
  getAspirante() {
    this.taskService.getAspirante(1)
    .subscribe(aspirante => {
      console.log(aspirante);
    });
  }
  
  getAllAspirantes() {
    this.taskService.getAllAspirantes()
    .subscribe(tasks => {
      console.log(tasks);
      return tasks.length;
    });
  }

  updateAspirante() {
    const Aspirante = {
      id:2,
      nombre:'ana Torroja',
      apellido:'Torrojreyesa',
      identificacion:1090368544,
      edad:35,
      casa:'howards'
    };
    this.taskService.updateAspirante(Aspirante)
    .subscribe(upAspirante => {
      console.log(upAspirante);
    });
  }
 

deleteAspirante() {
      this.taskService.deleteAspirante(2003);    
    }

}
