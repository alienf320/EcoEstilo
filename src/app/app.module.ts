import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselItemElementDirective } from './components/carousel/carousel-item-element.directive';
import { CarouselItemDirective } from './components/carousel/carousel-item.directive';
import { CarouselComponent } from './components/carousel/carousel.component';

import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElementDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
