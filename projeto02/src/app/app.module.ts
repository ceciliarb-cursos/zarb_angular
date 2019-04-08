import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './pages/cabecalho/cabecalho.component';
import { ConteudoComponent } from './pages/conteudo/conteudo.component';
import { RodapeComponent } from './pages/rodape/rodape.component';
import { HomeComponent } from './pages/home/home.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ConteudoComponent,
    RodapeComponent,
    HomeComponent,
    CarrinhoComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
