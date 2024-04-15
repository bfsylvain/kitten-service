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


  constructor(private refugeKittenService: RefugeKittensService) {}


  adoptKitten(selectedKitten: Kitten): void {
    this.refugeKittenService.addToMyKittens(selectedKitten);
    this.refugeKittenService.removeKittenFromAdopt(selectedKitten);
  }
}
