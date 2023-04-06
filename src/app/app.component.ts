import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'EcoEstilo';
  items = [
    { url: '../assets/slideshow/2.jpeg'}, 
    { url: '../assets/slideshow/3.jpeg'}, 
    { url: '../assets/slideshow/4.jpeg'}, 
    { url: '../assets/slideshow/5.jpeg'}, 
    { url: '../assets/slideshow/6.jpeg'}, 
    { url: '../assets/slideshow/7.jpeg'}, 

  ];
}
