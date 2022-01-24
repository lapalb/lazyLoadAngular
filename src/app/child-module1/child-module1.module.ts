import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildModule1RoutingModule } from './child-module1-routing.module';
import { ChildModule1Component } from './child-module1.component';


@NgModule({
  declarations: [
    ChildModule1Component
  ],
  imports: [
    CommonModule,
    ChildModule1RoutingModule
  ]
})
export class ChildModule1Module { }
