import { Injectable } from '@angular/core';
import { Kitten } from './models/classes/kitten.class';
import { KITTENSTOADOPT } from './mock/mock-kittens';
import { MYKITTENS } from './mock/mock-myKittens';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RefugeKittensService {

  private _kittenToAdoptList$: BehaviorSubject<Kitten[]> = new BehaviorSubject(KITTENSTOADOPT);
  myKittenList: Kitten[] = MYKITTENS;

  constructor() {}

  getKittensToAdopt$(): Observable<Kitten[]> {
    return this._kittenToAdoptList$.asObservable();
  }


  getMyKittens(): Kitten[] {
    return this.myKittenList;
  }

  addKittenToAdopt(kitten: Kitten): void {
    this._kittenToAdoptList$.next([...this._kittenToAdoptList$.value, kitten]);
  }

  removeKittenFromAdopt(kitten: Kitten): void {
    const updatedList = this._kittenToAdoptList$.value.filter((el: Kitten) => el.name !== kitten.name);
    this._kittenToAdoptList$.next(updatedList);
  }

  addToMyKittens(kitten: Kitten): void {
    this.myKittenList.push(kitten);
  }
}
