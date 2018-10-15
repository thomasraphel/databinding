import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // serverElements = [];
  serverElements = [
    {type : 'server', name : 'TestSErver', content : 'Just a test!!'}
  ];
  

  
}
