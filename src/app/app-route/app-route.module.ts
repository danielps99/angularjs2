import { EditComponent } from '../produto/edit/edit.component';
import { CreateComponent } from '../produto/create/create.component';
import { ListComponent } from '../produto/list/list.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoute = [
  { path: 'produto/list', component: ListComponent },
  { path: 'produto/create', component: CreateComponent },
  { path: 'produto/edit/:id', component: EditComponent }];
@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRouteModule { }