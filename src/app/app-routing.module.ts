import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './views/add/add.component';

const routes: Routes = [
  {path: '', redirectTo: 'add', pathMatch: 'full' },
  {path: 'add', component: AddComponent, pathMatch: 'full' }
  //{path: '/all', component: ViewAllComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
