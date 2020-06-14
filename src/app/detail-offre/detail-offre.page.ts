import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-offre',
  templateUrl: './detail-offre.page.html',
  styleUrls: ['./detail-offre.page.scss'],
})
export class DetailOffrePage implements OnInit {

  public myimage = '../assets/icon/coeurVide.png';

  like(){
    if(this.myimage==='../assets/icon/coeurVide.png')
    {
      this.myimage='../assets/icon/coeurRempli.png';
      document.getElementById('favoris').innerHTML = '<ion-card>\n' +
                                                                '    <ion-item>\n' +
                                                                '      <ion-avatar item-start>\n' +
                                                                '        <img src="../assets/icon/image.png">\n' +
                                                                '      </ion-avatar>\n' +
                                                                '      <ion-label>\n' +
                                                                '        <h2 class="nomSociete">VCI LUXE SARL</h2>\n' +
                                                                '        <p>\n' +
                                                                '          Responsable marketing\n' +
                                                                '          <br>\n' +
                                                                '          <span>57000 METZ</span>\n' +
                                                                '        </p>\n' +
                                                                '      </ion-label>\n' +
                                                                '    </ion-item>\n' +
                                                                '  </ion-card>';
    }else{
      this.myimage = '../assets/icon/coeurVide.png';
      document.getElementById('favoris').innerHTML = ''
    }

  }

  ajouterCandidature() {
    document.getElementById('candidatures').innerHTML = '<ion-card>\n' +
                                                                  '    <ion-item>\n' +
                                                                  '      <ion-avatar item-start>\n' +
                                                                  '        <img src="../assets/icon/image.png">\n' +
                                                                  '      </ion-avatar>\n' +
                                                                  '      <ion-label>\n' +
                                                                  '        <h2 class="nomSociete">VCI LUXE SARL</h2>\n' +
                                                                  '        <p>\n' +
                                                                  '          Responsable marketing\n' +
                                                                  '          <br>\n' +
                                                                  '          <span>57000 METZ</span>\n' +
                                                                  '        </p>\n' +
                                                                  '      </ion-label>\n' +
                                                                  '    </ion-item>\n' +
                                                                  '  </ion-card>';
  }

  constructor() { }

  ngOnInit() {
  }

}
