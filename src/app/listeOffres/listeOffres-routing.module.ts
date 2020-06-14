import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeOffresPage } from './listeOffres.page';

const routes: Routes = [
  {
    path: '',
    component: ListeOffresPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeOffresRoutingModule {}
