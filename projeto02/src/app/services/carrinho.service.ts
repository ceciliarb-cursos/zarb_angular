import { Injectable } from '@angular/core';
// import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  // private carrinhoSubject = new BehaviorSubject(null);
  private carrinho: any = [];

  constructor() { }

  getCarrinho() {
    return this.carrinho;
  }

  setCarrinho(carrinho) {
    this.carrinho = carrinho;
  }
}
