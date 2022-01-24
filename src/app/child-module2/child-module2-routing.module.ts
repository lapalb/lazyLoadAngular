import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildModule2Component } from './child-module2.component';

const routes: Routes = [{ path: '', component: ChildModule2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildModule2RoutingModule { }
