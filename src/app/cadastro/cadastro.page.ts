import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  enviar() {
    if (this.form.valid) {
      alert('Formulário enviado com sucesso!');
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }

}

