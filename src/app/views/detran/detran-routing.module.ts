import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetranComponent } from './detran.component';

const routes: Routes = [
  {
    path: '',
    component: DetranComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetranRoutingModule { }
