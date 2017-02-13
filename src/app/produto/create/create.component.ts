import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProdutoService]
})
export class CreateComponent {
  title = 'Criar produto';
  entity: any = this.initEntity();

  constructor(private produtoService: ProdutoService) { }

  create() {
    const command = {
      id: UUID.UUID(),
      descricao: this.entity.descricao
    };

    this.produtoService.create(command).subscribe(data => {
      alert('Salvo com sucesso!');
      this.entity = this.initEntity();
    });
  }

  private initEntity() {
    return {
      descricao: ''
    };
  }
}
