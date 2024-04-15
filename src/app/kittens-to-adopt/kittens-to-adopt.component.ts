import { Component } from '@angular/core';
import { Kitten } from '../models/classes/kitten.class';
import { KITTENSTOADOPT } from '../mock/mock-kittens';
import { RefugeKittensService } from '../refuge-kittens.service';

@Component({
  selector: 'app-kittens-to-adopt',
  templateUrl: './kittens-to-adopt.component.html',
  styleUrl: './kittens-to-adopt.component.scss',
})
export class KittensToAdoptComponent {
  kittenToAdoptListToMap: Kitten[] = [];

  constructor(private refugeKittenService: RefugeKittensService) {}

  ngOnInit(): void {
    this.getKittenToAdoptList();
  }

  // getKittenToAdoptList(): void {
  //   this.kittenToAdoptList = this.refugeKittenService.getKittensToAdopt()
  // }

  getKittenToAdoptList(): void {
    this.refugeKittenService
      .getKittensToAdopt()
      .subscribe((kittenList) => {this.kittenToAdoptListToMap = kittenList, console.log("yyooooo", kittenList);
      });
    }

  onGetKittenToRemove(event: Kitten) {
    this.refugeKittenService.removeKittenFromAdopt(event);

    // METHODE A EVITER N'AGIT PAS SUR LE SERVICE MAIS JUSTE SUR LA LISTE D'ICI
    // const newKittenToAdoptList = this.kittenToAdoptList.filter((k) => k !== event)
    // this.kittenToAdoptList = newKittenToAdoptList
  }
}
