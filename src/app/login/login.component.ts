import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

  profile = {};

  constructor(private loginService: LoginService) { }

  enviar() {
    this.loginService.authenticate().subscribe(data => this.profile = data
    );
  }

}
