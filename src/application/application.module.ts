import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ApplicationComponent } from './application.component';

@NgModule({
  declarations: [
    ApplicationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ApplicationComponent]
})
export class ApplicationModule { }
