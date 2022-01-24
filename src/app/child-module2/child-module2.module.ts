import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildModule2RoutingModule } from './child-module2-routing.module';
import { ChildModule2Component } from './child-module2.component';


@NgModule({
  declarations: [
    ChildModule2Component
  ],
  imports: [
    CommonModule,
    ChildModule2RoutingModule
  ]
})
export class ChildModule2Module { }
