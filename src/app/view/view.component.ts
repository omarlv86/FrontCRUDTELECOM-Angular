import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../employee.service'; //Importando el Servicio de Employee
import { Employee } from '../employee'; //Importando la interfaz de employee
import { Router } from '@angular/router'; //Importando la libreria Router
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private dataService : EmployeeService,
              private router:Router) { }

  id: any;

  pageActual: number = 1;
  pageSize = 4;
  pageActualc: number = 1;
  pageSizec = 4;
  employees : any;
  empleados;
  emps;
  dataExist : boolean;
  salarioTC: number;
  salarioT: number;

  ngOnInit() {
    //Al cargar el componente se ejecutara la funcion shoData()
    this.showData();
  }
  //Funcion para obtener los datos a traves del Servicio
  showData() {
    this.dataService.getData()
    .subscribe((data : any[]) => {
      this.employees = data;
      //console.log(this.employees);
      this.salarioT = this.employees.reduce((accum, curr) => accum + curr.salario, 0);
      console.log(this.salarioT);
      if(this.employees.length > 0){
        this.dataExist = true;
      }else{
        this.dataExist = false;
      }
    })
  }

  //Funcion para eliminar un empleado a traves de un id
  delete(employees:any):void{
    this.dataService.deleteEmployee(employees.id)
    .subscribe(data => {
      this.employees = this.employees.filter(u => u !== employees);
      //console.log(this.employees);

    })
  }

  //Funcion para mandar editar un empleado con su id
  edit(employees:any){
    this.id = employees.id;
    this.router.navigate(['edit/' + this.id]);
  }

}
