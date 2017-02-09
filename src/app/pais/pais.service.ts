import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class PaisService {

  constructor(private http: Http) { }

  create(command) {

    command = {
      id: 'e9ec61fd-141f-47e2-972c-f6d91995394b',
      descricao: 'apontador'
    }
    return this.http.post(`http://localhost:8080/produto`, command);
  }

  getAll() {

    let headersssss = new Headers({ 'Accept': 'application/json' });
headersssss.append('Access-Control-Allow-Origin', '*')

    return this.http.get(`http://localhost:8080/produto`, headersssss).map((res: Response) => res.json());
  }
}