import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms'; //importando la libreria de Forms
import { EmployeeService } from '../employee.service'; //Importando el Servicio Employee
import { Router } from '@angular/router'; //Importando la libreria de Router

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private empService: EmployeeService,
    private formBuilder: FormBuilder,
    private router : Router) { }

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
    //Validando el status del formulario
    if(this.addForm.status == 'VALID'){
      //Si es Valido envia los daos al servicio usando la funcion createEmployee y redirige a la vista View
      alert('Enviando los datos...');
      this.empService.createEmployee(this.addForm.value)
      .subscribe(data =>{
        this.router.navigate(['view']);
      })
    }else if(this.addForm.status == 'INVALID'){
      //Si no es Valido manda una alerta al usuario
      alert("Error al enviar el Formulario... Revise los datos por favor");
    }
    //console.log(this.addForm.value);
    //console.log(this.addForm.status);
  }

}
