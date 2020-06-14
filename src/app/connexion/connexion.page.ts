import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceTestService} from '../service-test.service';
import { Router } from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

    connexionForm: FormGroup;
    error_messages = {
        email: [
            {type: 'required', message: 'L\'adresse email est requise.'},
            {type: 'pattern', message: 'L\'adresse email saisie n\'est pas valide.'}
        ],
        mdp: [
            {type: 'required', message: 'Le mot de passe est requis.'}
        ]
    }

    constructor(public formBuilder: FormBuilder, public serviceTest: ServiceTestService, private router : Router, public alertController: AlertController) {
        this.connexionForm = this.formBuilder.group({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ])),
            mdp: new FormControl('', Validators.compose([
            Validators.required
        ]))
    });
    }


ngOnInit() {

}

async presentAlertMail() {
        const alert = await this.alertController.create({
            header: 'Email incorrect',
            message: 'L\'adresse mail saisie est incorrecte !',
            buttons: ['OK']
        });

        await alert.present();
}

async presentAlertPassword() {
        const alert = await this.alertController.create({
            header: 'Mot de passe incorrect',
            message: 'Le mot de passe saisie est inccorrect !',
            buttons: ['OK']
        });

        await alert.present();
    }

public connexion(): void {
        const email = this.connexionForm.value.email;
        const mdp = this.connexionForm.value.mdp;

        if (email!== 'admin@admin.com') {
            // afficher une alerte "l'adresse email saisie est incorrecte"
            this.presentAlertMail();
        } else {
            if (mdp!== '1234') {
                // afficher une alert "Le mot de passe saisie est inccorrect"
                this.presentAlertPassword();
            } else {
                // on modifie la valeur de l'attribut connecte dans le service
                this.serviceTest.connecte = true;
                this.router.navigateByUrl('/tabs/listeOffres');
            }
        }
}

}
