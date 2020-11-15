import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../employee.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private dataService : EmployeeService) { }
  employees: any;
  ngOnInit() {
    this.getData();
  }

  getData(){
    this.dataService.getData()
    .subscribe((data:any) => {
      this.employees = data;
      console.log(this.employees);
    })
  }

}
