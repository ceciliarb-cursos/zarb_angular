import { Component, OnInit, Input } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
  carrinho: any = [];

  @Input() carrinhoOuter: any;

  constructor(private carrinhoServ: CarrinhoService) { }

  load() {
    this.carrinho = this.carrinhoServ.getCarrinho();
  }

  ngOnInit() {
    this.load();
  }

}
