import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
  carrinho: any = [];

  constructor() { }

  load() {
    this.carrinho = JSON.parse(localStorage.getItem('carrinho'));
  }

  ngOnInit() {
    this.load();
  }

}
