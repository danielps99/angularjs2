import { AppRouteModule } from './app.route.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CreateComponent } from './produto/create/create.component';
import { ListComponent } from './produto/list/list.component';
import { EditComponent } from './produto/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouteModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
