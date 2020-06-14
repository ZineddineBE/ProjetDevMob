import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailOffrePageRoutingModule } from './detail-offre-routing.module';

import { DetailOffrePage } from './detail-offre.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: DetailOffrePageRoutingModule }]),
    DetailOffrePageRoutingModule,
  ],
  declarations: [DetailOffrePage]
})
export class DetailOffrePageModule {}
