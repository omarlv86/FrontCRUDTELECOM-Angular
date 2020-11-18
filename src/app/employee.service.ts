import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string = 'http://localhost/backendTelecom/';

  constructor(private http: HttpClient) { }

  //Obtener datos a traves de una peticion get
  getData() {
    return this.http.get(this.url+'list.php');
  }

  //Crear o insertar un empleado a traves de una peticion post
  createEmployee(employee: any[]){
    return this.http.post(this.url+'insert.php', employee);
  }

  //Eliminar un empleado a traves de una peticion delete
  deleteEmployee(id:number){
    return this.http.delete(this.url+'delete.php?id='+id);
  }

  //Obtener un empleado a traves de su id
  getById(id:number){
    return this.http.get(this.url+"getById.php?id=" + id);
  }



}
