import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  url_api = "http://localhost:3000/produtos";

  constructor(private client: HttpClient) { 
  }
  
  getProdutos() {
    return this.client.get(this.url_api);
  }
}
