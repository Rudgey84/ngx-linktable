import { Component } from '@angular/core';
import {SelectionType} from '@swimlane/ngx-datatable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // needed to fire the select event when a checkbox is activated.
  type = SelectionType.checkbox

  columns = [
    { checkboxable: true, headerCheckboxable: true, width: 30 },
    { prop: 'name', name: 'Link'},
  ]

  rows = [
    {name: 'name 1'},
    {name: 'name 2'},
    {name: 'name 3'},
    {name: 'name 4'},
    {name: 'name 1'},
    {name: 'name 2'},
    {name: 'name 3'},
    {name: 'name 4'},
  ]

  select(event) {
    console.log(event);
  }
}
