import { Component } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // needed to fire the select event when a checkbox is activated.
  type = SelectionType.checkbox;

  data = [
    {
      typeName: 'Criminal',
      dateCreated: '2011-08-12T20:17:46.384Z',
      dateLastChanged: '2011-08-12T20:17:46.384Z',
      role: 'top of the listsssssss sdsds',
      targetEntityId: '5678',
      targetEntityType: 'Person',
      label: 'Criminal (Dealer)',
    },
    {
      typeName: 'Family',
      dateCreated: '2011-08-12T20:17:46.384Z',
      dateLastChanged: '2011-08-12T20:17:46.384Z',
      role: 'Cousin',
      targetEntityId: '1234',
      targetEntityType: 'Person',
      label: 'Family Cousin',
    },
  ];

  rows = this.data;

  select(event) {
    console.log(event);
  }
}
