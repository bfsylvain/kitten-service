import { Component } from '@angular/core';
import { Kitten } from '../models/classes/kitten.class';
import { RefugeKittensService } from '../refuge-kittens.service';

@Component({
  selector: 'app-my-kittens',
  templateUrl: './my-kittens.component.html',
  styleUrl: './my-kittens.component.scss'
})
export class MyKittensComponent {

  constructor(private refugeKittenService: RefugeKittensService){}
  
  ngOnInit(): void {
    this.getMyKittenList()
  }
  
  myKittens: Kitten[] = []

  getMyKittenList(): void {
    this.myKittens = this.refugeKittenService.getMyKittens()
  }
}
