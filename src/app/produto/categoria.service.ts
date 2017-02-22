import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriaService {

  constructor(private http: Http) { }

  findByParameter(parameter: string) {
    return this.http.get(`http://localhost:8080/categoria/${parameter}`).map((res: Response) => res.json());
  }
}
