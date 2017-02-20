import { ProdutoService } from './../produto.service';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Observable } from 'rxjs/Observable';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


const states = [{ id: 'kklklkl', nome: 'Alabama' }, { id: 'kklklkl', nome: 'Alaska' }, { id: 'kklklkl', nome: 'American Samoa' }, { id: 'kklklkl', nome: 'Arizona' }, { id: 'kklklkl', nome: 'Arkansas' }, { id: 'kklklkl', nome: 'California' }, { id: 'kklklkl', nome: 'Colorado' },
  , { id: 'kklklkl', nome: 'Delaware' }, { id: 'kklklkl', nome: 'District Of Columbia' }, { id: 'kklklkl', nome: 'Federated States Of Micronesia' }, { id: 'kklklkl', nome: 'Florida' }, { id: 'kklklkl', nome: 'Georgia' },
{ id: 'kklklkl', nome: 'Hawaii' }, { id: 'kklklkl', nome: 'Idaho' }, { id: 'kklklkl', nome: 'Illinois' }, { id: 'kklklkl', nome: 'Indiana' }, { id: 'kklklkl', nome: 'Iowa' }, { id: 'kklklkl', nome: 'Kansas' }, { id: 'kklklkl', nome: 'Kentucky' }, { id: 'kklklkl', nome: 'Louisiana' },
{ id: 'kklklkl', nome: 'Maryland' }, { id: 'kklklkl', nome: 'Massachusetts' }, { id: 'kklklkl', nome: 'Michigan' }, { id: 'kklklkl', nome: 'Minnesota' }, { id: 'kklklkl', nome: 'Mississippi' }, { id: 'kklklkl', nome: 'Missouri' }, {
  id: 'kklklkl', nome: 'Montana',
}, { id: 'kklklkl', nome: 'Nevada' }, { id: 'kklklkl', nome: 'New Hampshire' }, { id: 'kklklkl', nome: 'New Jersey' }, { id: 'kklklkl', nome: 'New Mexico' }, { id: 'kklklkl', nome: 'New York' }, { id: 'kklklkl', nome: 'North Carolina' }, {
  id: 'kklklkl', nome: 'North Dakota',
}, { id: 'kklklkl', nome: 'Ohio' }, { id: 'kklklkl', nome: 'Oklahoma' }, { id: 'kklklkl', nome: 'Oregon' }, { id: 'kklklkl', nome: 'Palau' }, { id: 'kklklkl', nome: 'Pennsylvania' }, { id: 'kklklkl', nome: 'Puerto Rico' }, {
  id: 'kklklkl', nome: 'Rhode Island',
}, { id: 'kklklkl', nome: 'South Dakota' }, { id: 'kklklkl', nome: 'Tennessee' }, { id: 'kklklkl', nome: 'Texas' }, { id: 'kklklkl', nome: 'Utah' }, { id: 'kklklkl', nome: 'Vermont' }, { id: 'kklklkl', nome: 'Virgin Islands' }, {
  id: 'kklklkl', nome: 'Virginia',
}, { id: 'kklklkl', nome: 'West Virginia' }, { id: 'kklklkl', nome: 'Wisconsin' }, { id: 'kklklkl', nome: 'Wyoming' }];

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


  // search = (text$: Observable<string>) =>
  //   text$
  //     .debounceTime(200)
  //     .distinctUntilChanged()
  //     .map(term => term.length < 2 ? []
  //       : states.filter(v => v.nome.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10));

  // search = (text$: Observable<string>) =>
  // this.categoriaService.findByParam("a").debounceTime(30).map(term => term);


  search = (text$: Observable<string>) =>
  this.categoriaService.findByParam("a").debounceTime(30).map(term => term);

  formatter(a: any) {
    console.log("inputFormatter", a);
    return a.descricao;
  }

  resultFormatter(a: any) {
    console.log("resultFormatter", a);
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
