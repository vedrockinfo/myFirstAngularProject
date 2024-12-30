import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  imports: [],
  template: '<div class="employee-listing"><h2 class="primary">Employee List Coming Soon</h2><h6 class="h-six">Sorry for inconvenience</h6></div>',
  styles: ['.primary{font-weight:700;text-align:center;font-size:72px;}.employee-listing{display:grid;place-content:center;min-height:calc(100vh - 56px);}.h-six{text-align:center;font-size:36px;}'] 
})
export class EmployeeListComponent {

}

