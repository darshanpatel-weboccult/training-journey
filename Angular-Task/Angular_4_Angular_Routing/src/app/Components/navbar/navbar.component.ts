import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements OnChanges{
  
  @Input() expand = '';
  @Output() expandChange = new EventEmitter<string>();

  constructor(private router:Router){
  }

  doNavigate(...path:string[]){
    this.changeExpand('')  
    this.router.navigate(path);  
  }

  changeExpand(value:string){
    this.expandChange.emit(value);
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.expand =  changes['expand'].currentValue
  }

}
