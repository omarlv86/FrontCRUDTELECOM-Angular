import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms'; //importando la libreria de Forms
import { EmployeeService} from '../employee.service'; //importando el servicio Employee
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editForm: FormGroup;
  constructor(private empService: EmployeeService,
              private formBuilder: FormBuilder,
              private router: Router,
              private routes: ActivatedRoute
              ) { }


  ngOnInit() {
    const routerParams = this.routes.snapshot.params;

    this.empService.getById(routerParams.id)
    .subscribe((data:any)=>{
      //console.log(data);
      this.editForm.patchValue(data);
      //console.log(this.editForm);
    })

    this.editForm = this.formBuilder.group({
      id: [],
      nombre: ['',[Validators.required, Validators.maxLength(20)]],
      apellidoP: ['',[Validators.required, Validators.maxLength(20)]],
      apellidoM: ['',[Validators.required, Validators.maxLength(20)]],
      puesto: ['',[Validators.required, Validators.maxLength(50)]],
      fechaNac: ['', [Validators.required]],
      correo:['', [Validators.required, Validators.email]],
      salario: ['', [Validators.required, Validators.maxLength(5)]],
      contratista: ['', Validators.required]
    });
  }

  update(){
    console.log(this.editForm);

    this.empService.updateEmployee(this.editForm.value)
    .subscribe(()=>{
      this.router.navigate(['view']);
    }),error => {
      alert(error);
    }

  }

}
