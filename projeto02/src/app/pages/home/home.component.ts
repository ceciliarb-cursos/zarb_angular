import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  produtos: any = [];
  carrinho: any = [];

  constructor(public prodServ: ProdutosService) {
  }
  
  addProduto(produto) {
    let i = this.carrinho.findIndex((obj) => obj.produto.id == produto.id);
    if(i >= 0) {
      let qtd = this.carrinho[i].qtd + 1;
      this.carrinho[i] = { produto, qtd };
    } else {
      let qtd = 1;
      this.carrinho.push({ produto, qtd });
    }
    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
  }

  ngOnInit() {
    this.prodServ.getProdutos().subscribe(data => {
      this.produtos = data;
    });
    this.carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  }

}
