import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProdutoService {

  constructor(private http: Http) { }

  create(command) {
    return this.http.post(`http://localhost:8080/produto`, command);
  }

  getAll() {
    return this.http.get(`http://localhost:8080/produto`).map((res: Response) => res.json());
  }

}
