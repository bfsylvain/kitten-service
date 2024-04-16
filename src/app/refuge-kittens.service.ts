import { Injectable } from '@angular/core';
import { Kitten } from './models/classes/kitten.class';
import { KITTENSTOADOPT } from './mock/mock-kittens';
import { MYKITTENS } from './mock/mock-myKittens';

@Injectable({
  providedIn: 'root',
})
export class RefugeKittensService {
  private kittenToAdoptList: Kitten[] = KITTENSTOADOPT;
  private myKittenList: Kitten[] = MYKITTENS;

  constructor() {}

  getKittensToAdopt(): Kitten[] {
    return this.kittenToAdoptList;
  }

  getMyKittens(): Kitten[] {
    return this.myKittenList;
  }

  addKittenToAdopt(kitten: Kitten): void {
    this.kittenToAdoptList.push(kitten);
  }

  removeKittenFromAdopt(index: number): void {
    this.kittenToAdoptList.splice(index, 1)
  }

  addToMyKittens(kitten: Kitten): void {
    this.myKittenList.push(kitten);
  }

  sendToChineseRestaurant(index:number): void {
    this.myKittenList.splice(index, 1)
  }
}
