import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarritocompraPage } from './carritocompra.page';

const routes: Routes = [
  {
    path: '',
    component: CarritocompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarritocompraPageRoutingModule {}
