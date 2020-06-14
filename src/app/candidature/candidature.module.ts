import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CandidaturePage } from './candidature.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CandidaturePageRoutingModule } from './candidature-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CandidaturePageRoutingModule
  ],
  declarations: [CandidaturePage]
})
export class CandidaturePageModule {}
