import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./views/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'teste/:id',
    loadChildren: () => import('./views/simulator/simulator.module').then(m => m.SimulatorModule)
  },
  {
    path: 'doe',
    loadChildren: () => import('./views/donate/donate.module').then(m => m.DonateModule)
  },
  {
    path: 'placas',
    loadChildren: () => import('./views/signal/signal.module').then(m => m.SignalModule)
  },
  {
    path: 'detran',
    loadChildren: () => import('./views/detran/detran.module').then(m => m.DetranModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
