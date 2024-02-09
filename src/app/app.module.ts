import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassengercardComponent } from './passengercard/passengercard.component';
import { ListpassengerComponent } from './listpassenger/listpassenger.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengercardComponent,
    ListpassengerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
