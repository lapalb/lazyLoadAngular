import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildModule1Component } from './child-module1.component';

const routes: Routes = [{ path: '', component: ChildModule1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildModule1RoutingModule { }
