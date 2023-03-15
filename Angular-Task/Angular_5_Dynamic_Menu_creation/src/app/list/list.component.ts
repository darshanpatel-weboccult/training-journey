import { Component, Input } from '@angular/core';
import { Node } from '../app.component';
import { NodeService } from '../node.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() level!:number;
  @Input() parent!: string | null;
  eligible: Node[]
  constructor(private np:NodeService){
    this.eligible = [];
    np.getData().subscribe((values:Node[]) => {
      this.eligible = values.filter(item => {
        return item.level === this.level && item.parent === this.parent
      })
      
    })
  }
}
