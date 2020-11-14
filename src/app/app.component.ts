import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'FrontedCrudTelecom';

  calculateClasses() {
    return {
        'show': this.show
    };
  }

  show = false;
  cambiarEstado(){
  this.show = !this.show;
  console.log("Click en el boton de menu" + this.show);
  this.calculateClasses();
  }

}
