import { Component } from '@angular/core';
import { Kitten } from '../models/classes/kitten.class';
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

  getKittenToAdoptList(): void {
    this.refugeKittenService
      .getKittensToAdopt()
      .subscribe((kittenList) => this.kittenToAdoptListToMap = kittenList);
    }

  onGetKittenToRemove(event: Kitten, index: number) {
    this.refugeKittenService.removeKittenFromAdopt(index);

  }
}
