import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private empService: EmployeeService,
    private formBuilder: FormBuilder) { }

  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      eId:[],
      nombre: [''],
      apellidoP: [''],
      apellidoM: [''],
      puesto: [''],
      fechaNac: [''],
      correo:[''],
      salario: [''],
      contratista: ['']
    })
  }

  onSubmit(){
    console.log(this.addForm.value);
  }

}
