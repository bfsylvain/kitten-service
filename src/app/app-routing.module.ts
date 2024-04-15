import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KittensToAdoptComponent } from './kittens-to-adopt/kittens-to-adopt.component';
import { AdoptFormComponent } from './adopt-form/adopt-form.component';

const routes: Routes = [
  {
    path:"",
    component: KittensToAdoptComponent
  },
  {
    path:"kittensToAdopt",
    component: KittensToAdoptComponent
  },
  {
    path:"form",
    component: AdoptFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
