import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SignalComponent } from './signal.component';
import { SignalRoutingModule } from './signal-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';

@NgModule({
  declarations: [
    SignalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SignalRoutingModule
  ]
})
export class SignalModule { }
