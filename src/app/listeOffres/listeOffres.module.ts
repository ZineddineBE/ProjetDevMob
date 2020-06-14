import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListeOffresPage } from './listeOffres.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ListeOffresRoutingModule } from './listeOffres-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ListeOffresRoutingModule
  ],
  declarations: [ListeOffresPage]
})
export class ListeOffresPageModule {}
