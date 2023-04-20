import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DonateComponent } from './donate.component';
import { DonateRoutingModule } from './donate-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';

@NgModule({
  declarations: [
    DonateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    DonateRoutingModule
  ]
})
export class DonateModule { }
