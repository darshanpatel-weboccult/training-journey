import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-routing';
  expand = '';

  changeExpand(value: string) {
    this.expand = value;
  }
  
}
