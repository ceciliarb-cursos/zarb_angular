import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  public carrinho: any = [];
  public carrinhoSource = new BehaviorSubject(this.carrinho);
  public data = this.carrinhoSource.asObservable();
  public url_api = "http://localhost:3000";

  constructor(public http: HttpClient) { 
    this.carrinhoSource.next(this.getCarrinho());
  }

  getCarrinho() {
    if(localStorage.getItem('carrinho'))
      return JSON.parse(localStorage.getItem('carrinho'));
    else  
      return [];
  }

  updateCarrinho(carrinho) {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    this.carrinhoSource.next(carrinho);
  }

  finalizaCompra(compra) {
    console.log(this.url_api, compra);
    return this.http.post(this.url_api+'/compras', compra);
  }
}
