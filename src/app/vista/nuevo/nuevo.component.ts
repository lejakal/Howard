import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { TaskService } from './../../services/task.service';
import { Aspirantes } from 'src/app/interfaces/task';



@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})

export class NuevoComponent implements OnInit {
    task!: Array<Aspirantes>;
    nuevoForm = new FormGroup({
    nombre : new FormControl('',Validators.required),
    apellido : new FormControl('',Validators.required),
    identificacion : new FormControl('',Validators.required),
    edad : new FormControl('',Validators.required),
    casa : new FormControl('',Validators.required),  
  })
  
  constructor(
    private taskService: TaskService
  ){}
 

  ngOnInit(): void {
  }

  createAspirantes(form: Aspirantes) {  

    const Aspirante = {
      id:0,
      nombre:form.nombre,
      apellido:form.apellido,
      identificacion:form.identificacion,
      edad:form.edad,
      casa:form.casa
    };  
    this.taskService.createAspirantes(Aspirante)
    .subscribe((newAspirante) => {
      console.log(newAspirante);
    });
  }

  getAllAspirantes() {
    this.taskService.getAllAspirantes().subscribe(aspirantes => {
      this.task = aspirantes;
    });
    }

    deleteAspirante(id: number) {
      console.log(id);
      this.taskService.deleteAspirante(id);
    
    }


}
