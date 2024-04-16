import { Component, Input } from '@angular/core';
import { Kitten } from '../models/classes/kitten.class';
import { RefugeKittensService } from '../refuge-kittens.service';

@Component({
  selector: 'app-adopted-kitten',
  templateUrl: './adopted-kitten.component.html',
  styleUrl: './adopted-kitten.component.scss',
})
export class AdoptedKittenComponent {
  constructor(private refugeKittenService: RefugeKittensService) {}
  @Input() kitten!: Kitten;
  @Input() index!: number;

  displayKitten(): void {
    console.log(this.kitten)
    console.log(this.index)
  }
  eatKitten(index: number): void {
    this.refugeKittenService.sendToChineseRestaurant(index);
  }
}
