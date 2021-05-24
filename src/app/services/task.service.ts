import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Task , Aspirantes, casa} from './../interfaces/task';


@Injectable({
  providedIn: 'root'
})
//abtranccion para la manipulacion de datos 
export class TaskService {
 
  private api = 'http://hp-api.herokuapp.com/api/characters';
  private apiLocal = 'https://localhost:44323/api/aspirantes';
//injectamos la dependencia
  constructor(
    private http: HttpClient,
    private httpHeadler : HttpHandler
  ) { }



  getHome(casa: string) {
    const path = `${this.api}/house/${casa}`;
  return this.http.get<Task[]>(path);
}

getStudents() {
  const path = `${this.api}/students/`;
return this.http.get<Task[]>(path);
}
getStaff() {
  const path = `${this.api}/staff/`;
return this.http.get<Task[]>(path);
}


getAspirante(id: number) {
  var invocation = new XMLHttpRequest();
  const path = `${this.apiLocal}/${id}`;
return this.http.get<Aspirantes[]>(path);
}

getAllAspirantes() {
  const path = `${this.apiLocal}`;
  return this.http.get<Aspirantes[]>(path);
}

//creamos la tarea 
createAspirantes(aspirante: Aspirantes) {
  const path = `${this.apiLocal}`;
  return this.http.post(path, aspirante);
}

updateAspirante(aspirante: Aspirantes) {
  const path = `${this.apiLocal}/${aspirante.id}`;
  return this.http.put<Task>(path, aspirante);
}

deleteAspirante(id: number) {
  const ids = String(id);
  const path = `${this.apiLocal}/${ids}`;
  return this.http.delete(path);
}

}

