import { ProdutoService } from './../produto.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProdutoService]
})
export class CreateComponent {
  title = 'Criar produto';
  entity: any = this.initEntity();

  constructor(private toastr: ToastsManager, private vRef: ViewContainerRef, private produtoService: ProdutoService) {
    this.toastr.setRootViewContainerRef(vRef);
  }

  create() {
    const command = {
      id: UUID.UUID(),
      descricao: this.entity.descricao
    };

    this.produtoService.create(command).subscribe(data => {
      this.toastr.success(`${data.json().descricao} salvo com sucesso!`);
      this.entity = this.initEntity();
    });
  }

  private initEntity() {
    return {
      descricao: ''
    };
  }
}
