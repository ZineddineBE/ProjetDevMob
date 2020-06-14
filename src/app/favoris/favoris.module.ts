import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavorisPage } from './favoris.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FavorisPageRoutingModule } from './favoris-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: FavorisPageRoutingModule }]),
    FavorisPageRoutingModule,
  ],
  declarations: [FavorisPage]
})
export class FavorisPageModule {}
