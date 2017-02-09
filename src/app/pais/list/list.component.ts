import { PaisService } from './../pais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [PaisService]
})
export class ListComponent implements OnInit {

retorno: any = {};
  constructor(private paisService: PaisService) { }

  ngOnInit() {
    this.paisService.getAll().subscribe(data => this.retorno = data);
  }

}
