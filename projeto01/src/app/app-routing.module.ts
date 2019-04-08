import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContatosComponent } from './contatos/contatos.component';
import { FormComponent } from './form/form.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: 'form', component: FormComponent },
  { path: '**', component: Pagina404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
