import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdoptFormComponent } from './adopt-form/adopt-form.component';
import { KittensToAdoptComponent } from './kittens-to-adopt/kittens-to-adopt.component';
import { MyKittensComponent } from './my-kittens/my-kittens.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KittenCardComponent } from './kitten-card/kitten-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdoptFormComponent,
    KittensToAdoptComponent,
    MyKittensComponent,
    NavbarComponent,
    KittenCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
