import { Component, ViewChild } from '@angular/core';
import { Kitten } from '../models/classes/kitten.class';
import { RefugeKittensService } from '../refuge-kittens.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adopt-form',
  templateUrl: './adopt-form.component.html',
  styleUrl: './adopt-form.component.scss',
})
export class AdoptFormComponent {
  // @ViewChild('registerForm') registerForm!: NgForm;
  kittenForm: Kitten = {
    name: '',
    img: '',
    group: '',
    age: 1,
  };

  constructor(private refugeKittenService: RefugeKittensService) {}

  createNewKittenToAdopt(): void {
    console.log(this.kittenForm)
    this.refugeKittenService.addKittenToAdopt(this.kittenForm);
    // this.registerForm.reset()
    
  }
}
