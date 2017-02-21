import { ProdutoService } from './../produto.service';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Observable } from 'rxjs/Observable';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProdutoService, CategoriaService]
})
export class CreateComponent {
  title = 'Criar produto';
  entity: any = this.initEntity();

  constructor(private toastr: ToastsManager, private vRef: ViewContainerRef, private produtoService: ProdutoService, private categoriaService: CategoriaService) {
    this.toastr.setRootViewContainerRef(vRef);
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(150).distinctUntilChanged()
      .switchMap(data => {
        return this.categoriaService.findByParam(data)
      });

  inputFormatter(a: any) {
    //console.log("inputFormatter", a);
    return a.descricao;

    ;
  }

  resultFormatter(a: any) {
    //console.log("resultFormatter", a);
    return a.descricao;
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