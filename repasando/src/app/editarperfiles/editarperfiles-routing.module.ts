import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarperfilesPage } from './editarperfiles.page';

const routes: Routes = [
  {
    path: '',
    component: EditarperfilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarperfilesPageRoutingModule {}
