import { Component, OnInit } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // needed to fire the select event when a checkbox is activated.
  readonly type = SelectionType.checkbox;
  public rows;
  public headerCheckboxable: boolean = false;
  public data = [
    {
      typeName: 'Criminal',
      dateCreated: '2011-08-12T20:17:46.384Z',
      dateLastChanged: '2022-08-12T20:17:46.384Z',
      role: 'top of the list by date order',
      targetEntityId: '5678',
      targetEntityType: 'Person',
      label: 'Criminal (Dealer)',
    },
    {
      typeName: 'Family',
      dateCreated: '2011-08-12T20:17:46.384Z',
      dateLastChanged: '2021-08-12T20:17:46.384Z',
      role: 'Cousin',
      targetEntityId: '1234',
      targetEntityType: 'Person',
      label: 'Family Cousin',
    },
  ];

  public select(event) {
    console.log(event);
  }

  private orderByDate(arr: any[]): any[] {
    return arr.sort((b, a) => {
      const dateA = new Date(a.dateLastChanged);
      const dateB = new Date(b.dateLastChanged);
      return dateA.getTime() - dateB.getTime();
    });
  }

  ngOnInit(): void {
    this.rows = this.orderByDate(this.data);
  debugger
    if (this.rows.length > 1) {
      this.headerCheckboxable = true;
    }
  }
}
