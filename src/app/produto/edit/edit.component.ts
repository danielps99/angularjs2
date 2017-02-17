import { Component, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { ProdutoService } from './../produto.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProdutoService]
})
export class EditComponent implements OnInit, OnDestroy {
  title = 'Editar produto';
  inscricao: Subscription;
  entity: any = {};

  constructor(private toastr: ToastsManager, private vRef: ViewContainerRef, private route: ActivatedRoute,
    private router: Router, private produtoService: ProdutoService) {
    this.toastr.setRootViewContainerRef(vRef);
  }

  save() {
    const command = {
      id: this.entity.id,
      descricao: this.entity.descricao
    };

    this.produtoService.update(command).subscribe(data => {
      this.toastr.success(`${data.json().descricao} salvo com sucesso!`);
    });
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.produtoService.getById(params['id']).subscribe(data => this.entity = data);
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
