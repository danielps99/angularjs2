import { Component } from '@angular/core';

import { PaisService } from './pais.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PaisService]
})
export class AppComponent {
  title = 'app works good!';
  profile = {};
  constructor(paisService: PaisService) {
    paisService.getUser().subscribe(data => this.profile = data
    );
  }
}