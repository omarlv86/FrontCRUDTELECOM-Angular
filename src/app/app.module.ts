import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

import { RouterModule, Routes } from '@angular/router'; //importar modulo Router

const appRoutes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent, pathMatch: 'full' },
  { path: '',   redirectTo: '/view', pathMatch: 'full'},
  { path: 'edit/:id', component: EditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
