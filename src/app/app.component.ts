// This is the main component file. This contains all the data to be rendered in the app.component.html file

import { Component } from '@angular/core';


// Component decorator which has been passed an anonymous object.
//This object has a selector property that is assigned with value app-root.
//When a selector property is assigned a value that can be used as a HTML tag.
//When we inspect the app.component.html page we will get app-root tag instead of the body elements.
//Wherever we will use the app-root as a html tag, the content of that page wll be replaced by the content of app.component.html
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'AngularApp';
  message = 'Angular is the best JavaScript framework for building client-side applications.';
}
