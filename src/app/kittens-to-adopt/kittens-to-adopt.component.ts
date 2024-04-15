import { Component } from '@angular/core';
import { Kitten } from '../models/classes/kitten.class';
import { KITTENSTOADOPT } from '../mock/mock-kittens';
import { RefugeKittensService } from '../refuge-kittens.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-kittens-to-adopt',
  templateUrl: './kittens-to-adopt.component.html',
  styleUrl: './kittens-to-adopt.component.scss',
})
export class KittensToAdoptComponent {

  kittenList$!: Observable<Kitten[]>;

  constructor(private refugeKittenService: RefugeKittensService) {}

  ngOnInit(): void {
    this.getKittenToAdoptList();
  }


  getKittenToAdoptList(): void {
    this.kittenList$ = this.refugeKittenService
    .getKittensToAdopt$()
    .pipe(tap((v) => console.log("value in component... ", v)));
  }
  
}
