import { NgModule, ModuleWithProviders } from '@angular/core';
import  {Routes, RouterModule } from '@angular/router';

import { ListComponent } from './pais/list/list.component';
import { EditComponent } from './pais/edit/edit.component';
import { CreateComponent } from './pais/create/create.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const appRoutes = [
    {path: '', component: LoginComponent},
    {path: 'create', component: CreateComponent},
    {path: 'edit', component: EditComponent},
    {path: 'list', component: ListComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRouteModule{}