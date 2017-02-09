import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  authenticate() {

    let params = {
          username : 'root',
          password : 'ewqiop321'
        }

        let authToken = localStorage.getItem('auth_token');
let headers = new Headers({ 'Accept': 'application/json' });
headers.append('Access-Control-Allow-Origin', '*')
 headers.append('x-api-token', `fsfsdfsafas`);

        console.log(params);
    // return this.http.get(`https://api.github.com/users/danielps99/repos`)
    // return this.http.get(`http://localhost.:8080/telefones/tiposDeTelefone`)
    //return this.http.get(`https://localhost:8443/enderecos/tipoLogradouro`, headers)

     return this.http.post(`https://localhost:8443/paises`, {
    "nome": "BRASILL",
    "siglaDuasLetras": "BB",
    "siglaTresLetras": "BBB",
    "codigoDeDiscagem": "88"
})

   //return this.http.post(`https://localhost:8443/access/authenticate?username=root&password=ewqiop321`, params)
      .map((res: Response) => res.json());
  }
  

}
