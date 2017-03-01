import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { ProdutoService } from './../produto.service';
import { CategoriaService } from './../categoria.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProdutoService, CategoriaService]
})
export class CreateComponent {
  title = 'Criar produto';
  entity: any = this.initEntity();

  constructor(private router: Router, private toastr: ToastsManager, private vRef: ViewContainerRef, 
    private produtoService: ProdutoService, private categoriaService: CategoriaService) {
    this.toastr.setRootViewContainerRef(vRef);
  }

  findTerm = (text$: Observable<string>) =>
    text$
      .debounceTime(150).distinctUntilChanged()
      .switchMap(parameter => {
        if (parameter === '') {
          return [];
        }
        return this.categoriaService.findByParameter(parameter);
      })

  inputFormatter(categoria: any) {
    return categoria.descricao;
  }

  resultFormatter(categoria: any) {
    return categoria.descricao;
  }

  create() {
    const command = {
      id: UUID.UUID(),
      descricao: this.entity.descricao,
      categoria: this.entity.categoria,
      preco: this.entity.preco
    };

    this.produtoService.create(command).subscribe(data => {
      this.toastr.success(`${data.json().descricao} salvo com sucesso!`);
      // this.router.navigate(['produto/list']);
      //this.entity = this.initEntity();
      this.router.navigate(['produto/create']);
    });
  }

  private initEntity() {
    return {
      descricao: '',
      categoria: ''
    };
  }
}
