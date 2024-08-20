import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarperfilesPageRoutingModule } from './editarperfiles-routing.module';

import { EditarperfilesPage } from './editarperfiles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarperfilesPageRoutingModule
  ],
  declarations: [EditarperfilesPage]
})
export class EditarperfilesPageModule {}
