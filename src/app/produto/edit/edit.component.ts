import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { ProdutoService } from './../produto.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProdutoService]
})
export class EditComponent implements OnInit {
  title = 'Editar produto';
  inscricao: Subscription;
  entity: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router, private produtoService: ProdutoService) { }

    save() {
    const command = {
      id: this.entity.id,
      descricao: this.entity.descricao
    };

    this.produtoService.update(command).subscribe(data => {
      alert('Salvo com sucesso!');
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
