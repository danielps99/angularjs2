import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProdutoService {

  constructor(private http: Http) { }

  create(command) {
    return this.http.post(`http://localhost:8080/produto`, command);
  }

  getById(id: string) {
    return this.http.get(`http://localhost:8080/produto/${id}`).map((res: Response) => res.json());
  }

  getAll() {
    return this.http.get(`http://localhost:8080/produto`).map((res: Response) => res.json());
  }

  delete(id: string) {
    return this.http.delete(`http://localhost:8080/produto/${id}`).map(response => response);
  }

  update(command) {
    return this.http.put(`http://localhost:8080/produto`, command);
  }
}
