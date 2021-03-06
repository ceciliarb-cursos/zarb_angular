import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from "../../services/carrinho.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  carrinho: any;
  total = 0;
  compra = { "cliente": { 
              "nome": "",
              "email": "",
              "cartao": "",
              "validade": "",
              "cvv": "",
            }, "produtos": [], "total": 0 };

  constructor(private carrinhoService: CarrinhoService, private router: Router) { 
    this.carrinhoService.data.subscribe(info => { this.carrinho = info });

    this.total = this.carrinho.reduce(function(previousValue, currentValue) {
      return previousValue + (currentValue.produto.preco * currentValue.qtd);
    },0);
  }

  finalizar() {
    this.compra.produtos = this.carrinho;
    this.compra.total = this.total;
    this.carrinhoService.finalizaCompra(this.compra).subscribe(info => {
      this.carrinhoService.updateCarrinho([]);
      this.router.navigate(['']);
      alert("Compra efetuada com sucesso");
      console.log(info);
    }, erro => {
      alert("Falha na requisicao");
      console.log(erro);
    });
  }

  ngOnInit() {
  }

}
