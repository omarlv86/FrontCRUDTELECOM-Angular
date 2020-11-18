import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string = 'http://localhost/backendTelecom/';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url+'list.php');
  }

  createEmployee(employee: any[]){
    return this.http.post(this.url+'insert.php', employee);
  }



}
