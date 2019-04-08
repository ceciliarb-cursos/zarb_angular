import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})


export class ContatosComponent implements OnInit {
  contato = {
    nome: "",
    telefone: "",
    email: "",
    data_nasc: null,
  }
  lst: any = [];
  indice = null;

  constructor() {
    this.lst = localStorage.getItem(`contatos`) ? JSON.parse(localStorage.getItem(`contatos`)) : [];
  }

  salvar() {
    let obj = { nome: this.contato.nome, telefone: this.contato.telefone, email: this.contato.email, data_nasc: this.contato.data_nasc };
    if(!this.indice) {
      this.lst.push(obj);
    } else {
      this.lst[this.indice] = obj;
      this.indice = null;
    }
    localStorage.setItem('contato', JSON.stringify(obj));
    localStorage.setItem('contatos', JSON.stringify(this.lst));
    this.contato = { nome: '', telefone: '', email: '', data_nasc: null};
  }

  cancelar() {
    this.contato = { nome: '', telefone: '', email: '', data_nasc: null};
  }

  limpar() {
    let vazio: any = [];
    localStorage.setItem('contatos', vazio);
    localStorage.setItem('contato', null);
    this.lst = vazio;
  }

  seleciona(indice) {
    this.contato = { nome: this.lst[indice].nome, telefone: this.lst[indice].telefone, email: this.lst[indice].email, data_nasc: this.lst[indice].data_nasc };
    this.indice = indice;
  }

  remove(indice) {
    this.lst = this.lst.filter(obj => obj !== this.lst[indice]);
    // this.lst = this.lst.splice(indice, 1);
  }

  ngOnInit() {
  }

}
