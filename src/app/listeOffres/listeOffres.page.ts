import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listeOffres',
  templateUrl: 'listeOffres.page.html',
  styleUrls: ['listeOffres.page.scss']
})
export class ListeOffresPage {

  constructor(private router : Router) {}

}
