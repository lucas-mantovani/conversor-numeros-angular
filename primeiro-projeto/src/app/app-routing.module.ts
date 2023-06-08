import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversorNumerosComponent } from './conversor-numeros/conversor-numeros.component';

const routes: Routes = [
  {
    path: "", redirectTo: "conversor-numeros", pathMatch: 'full'
  },
  {
    path: "conversor-numeros", component: ConversorNumerosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
