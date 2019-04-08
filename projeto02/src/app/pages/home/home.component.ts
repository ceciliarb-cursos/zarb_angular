import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  produtos: any = [];

  constructor(public prodServ: ProdutosService) {
  }
  
  ngOnInit() {
    this.prodServ.getProdutos().subscribe(data => {
      this.produtos = data;
    });
    console.log(this.produtos);
  }

}
