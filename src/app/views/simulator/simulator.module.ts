import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SimulatorComponent } from './simulator.component';
import { SimulatorRoutingModule } from './simulator-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';
import { FormsModule } from '@angular/forms';

import { DialogDeleteComponent } from 'src/app/components/modals/dialog-delete/dialog-delete.component';
import { DialogStartComponent } from 'src/app/components/modals/dialog-start/dialog-start.component';

@NgModule({
  declarations: [
    SimulatorComponent,
    DialogDeleteComponent,
    DialogStartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    SimulatorRoutingModule
  ]
})
export class SimulatorModule { }
