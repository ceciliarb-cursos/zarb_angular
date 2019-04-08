import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit {
  titulo: string = "Cadastro";
  formContato: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  criaForm() {
    this.formContato = this.formBuilder.group({
      nome: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      telefone: ['', Validators.compose([
        // Validators.
      ])],
      data_nasc: ['', Validators.compose([
        // Validators.
      ])]
    })
  }

  salvar() {
    console.log(this.formContato);
  }

  get nome() {
    return this.formContato.get("nome");
  }

  get email() {
    return this.formContato.get("email");
  }

  get telefone() {
    return this.formContato.get("telefone");
  }

  get data_nasc() {
    return this.formContato.get("data_nasc");
  }

  ngOnInit() {
    this.criaForm();
  }

}
