// home.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { HomeRoutingModule } from './home-routing.module';
import { MwasPipe } from './components/mwas.pipe';

@NgModule({
  declarations: [HomePage, MwasPipe],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
