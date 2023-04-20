import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DetranComponent } from './detran.component';
import { DetranRoutingModule } from './detran-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';

@NgModule({
  declarations: [
    DetranComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    DetranRoutingModule
  ]
})
export class DetranModule { }
