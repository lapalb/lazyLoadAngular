import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cm1', loadChildren: () => import('./child-module1/child-module1.module').then(m => m.ChildModule1Module) },
  { path: 'cm2', loadChildren: () => import('./child-module2/child-module2.module').then(m => m.ChildModule2Module) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
