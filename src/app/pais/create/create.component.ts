import { PaisService } from './../pais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [PaisService]
})
export class CreateComponent {

  retorno: any = {};
  nome: String = '';
  siglaTresLetras: String = '';
  siglaDuasLetras: String = '';
  codigoDeDiscagem: String = '';

  constructor(private paisService: PaisService) {

  }

  create() {
    let command = {
      nome: this.nome,
      siglaTresLetras: this.siglaTresLetras,
      siglaDuasLetras: this.siglaDuasLetras,
      codigoDeDiscagem: this.codigoDeDiscagem

    }
    this.paisService.create(command).subscribe(data => this.retorno = data);
  }
}
