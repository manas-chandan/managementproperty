import { Component } from '@angular/core';
import { Airtable } from 'ngx-airtable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';
  constructor(private at1: Airtable){
  }
  
}
