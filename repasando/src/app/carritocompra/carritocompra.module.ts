import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarritocompraPageRoutingModule } from './carritocompra-routing.module';

import { CarritocompraPage } from './carritocompra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarritocompraPageRoutingModule
  ],
  declarations: [CarritocompraPage]
})
export class CarritocompraPageModule {}
