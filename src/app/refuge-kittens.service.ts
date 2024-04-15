import { Injectable } from '@angular/core';
import { Kitten } from './models/classes/kitten.class';
import { KITTENSTOADOPT } from './mock/mock-kittens';
import { MYKITTENS } from './mock/mock-myKittens';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RefugeKittensService {
  private kittenToAdoptList: Kitten[] = KITTENSTOADOPT;
  private myKittenList: Kitten[] = MYKITTENS;

  constructor() {}

  // METHODE DE BASE CLASSIQUE POUR RECUPERER LA LISTE DANS LES COMPOSANTS
  // getKittensToAdopt(): Kitten[] {
  //   return this.kittenToAdoptList;
  // }

  // OBSERVABLE DE LA LISTE DE CHATONS A ADOPTER
  getKittensToAdopt(): Observable<Kitten[]> {
    console.log(this.kittenToAdoptList)
    return of(this.kittenToAdoptList)
  }

  getMyKittens(): Kitten[] {
    return this.myKittenList;
  }

  addKittenToAdopt(kitten: Kitten): void {
    this.kittenToAdoptList.push(kitten);
  }

  //ENLEVE LE CHATON DE LA LISTE EN FOCTION DU CHATON ADOPTE
  removeKittenFromAdopt(kitten: Kitten): void {
    const newKittenToAdopt = this.kittenToAdoptList.filter(
      (kittenToAdopt) => kittenToAdopt !== kitten
    );
    this.kittenToAdoptList = newKittenToAdopt
    console.log(this.kittenToAdoptList);
    console.log(newKittenToAdopt)
  }

  addToMyKittens(kitten: Kitten): void {
    this.myKittenList.push(kitten);
  }
}
