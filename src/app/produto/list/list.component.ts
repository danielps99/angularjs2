import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ProdutoService]
})
export class ListComponent implements OnInit {
retorno: any = {};
  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.getAll().subscribe( data => this.retorno = data );
  }

}
