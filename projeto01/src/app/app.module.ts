import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatosComponent } from './contatos/contatos.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormComponent } from './form/form.component';
import { CepPipe } from './cep.pipe';
import { TelefonePipe } from './telefone.pipe';
import { Pagina404Component } from './pagina404/pagina404.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent,
    CalculadoraComponent,
    FormComponent,
    CepPipe,
    TelefonePipe,
    Pagina404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
