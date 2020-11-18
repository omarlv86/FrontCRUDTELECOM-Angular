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
    //Obteniendo datos del formulario y analizando las reglas de validacion
    this.addForm = this.formBuilder.group({
      eId:[],
      nombre: ['',[Validators.required, Validators.maxLength(20)]],
      apellidoP: ['',[Validators.required, Validators.maxLength(20)]],
      apellidoM: ['',[Validators.required, Validators.maxLength(20)]],
      puesto: ['',[Validators.required, Validators.maxLength(50)]],
      fechaNac: ['', [Validators.required]],
      correo:['', [Validators.required, Validators.email]],
      salario: ['', [Validators.required, Validators.maxLength(5)]],
      contratista: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.addForm.status == 'VALID'){
      alert('Enviando los datos...');
    }else if(this.addForm.status == 'INVALID'){
      alert("Error al enviar el Formulario... Revise los datos por favor");
    }
    //console.log(this.addForm.value);
    console.log(this.addForm.status);
  }

}
