import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProdutoService]
})
export class CreateComponent {
  retorno: any = {};
  id: String = '';
  descricao: String = '';

  constructor(private produtoService: ProdutoService) { }

  create() {
    const command = {
      id: this.id,
      descricao: this.descricao
    };
    this.produtoService.create(command).subscribe(data => this.retorno = data);
  }
}
