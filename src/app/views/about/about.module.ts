import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
