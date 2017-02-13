import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './../produto.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ProdutoService]
})
export class ListComponent implements OnInit {
  title = 'Lista de produtos';
  entityes: any = [];
  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.loadEntityes();
  }

  delete(entity) {
    if (confirm('Deseja deletar ' + entity.descricao + '?')) {
      this.produtoService.delete(entity.id).subscribe(
        data => {
          this.loadEntityes();
        }
      );
    }
  }

  private loadEntityes() {
    this.produtoService.getAll().subscribe(dataGetAll => this.entityes = dataGetAll);
  }
}
