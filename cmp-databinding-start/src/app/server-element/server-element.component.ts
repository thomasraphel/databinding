import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  
  @Input('serverElement')
  element : {type : string, name : string, content : string};
  //kind of property or the data type,, just line ' element : Ingredient '

  constructor() { }

  ngOnInit() {
  }

}
