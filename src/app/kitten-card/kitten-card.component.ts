import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kitten } from '../models/classes/kitten.class';
import { RefugeKittensService } from '../refuge-kittens.service';

@Component({
  selector: 'app-kitten-card',
  templateUrl: './kitten-card.component.html',
  styleUrl: './kitten-card.component.scss',
})
export class KittenCardComponent {
  @Input() kitten?: Kitten;

  @Output() removeKitten: EventEmitter<Kitten> = new EventEmitter();

  constructor(private refugeKittenService: RefugeKittensService) {}

  // A EVITER METHODE BOF, SUPPRIME LE CHATON SEULEMENT DANS LA LISTE DE L'ELEMENT PARENT
  // PAS DANS LE SERVICE
  sendKitten(element: Kitten) {
    this.removeKitten.emit(element);
  }
  adoptKitten(selectedKitten: Kitten): void {
    //AJOUTE LE CHATON A LA LISTE DE MES CHATONS DU SERVICE
    this.refugeKittenService.addToMyKittens(selectedKitten);
    // this.sendKitten(selectedKitten); ==> SUITE DE LA METHODE A EVITER

    //ENLEVE LE CHATON DE LA LISTE A ADOPTER DU SERVICE MAIS PAS DE MISE AJOUR APRES...
    this.refugeKittenService.removeKittenFromAdopt(selectedKitten)
  }
}
