import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Node } from '../app.component';
import { NodeService } from '../node.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnChanges{
  data: Node[];
  @Input() parent: string | null;
  @Input() level!: number;
  eligible: Node[];
  children: Node[] = [];
  selected: string | null = null;

  constructor(private np: NodeService) {
    this.parent = null;
    this.data = []
    this.eligible = []
    np.getData().subscribe((values: Node[]) => {
      this.data = values;
      this.eligible = values.filter(
        (item) => item.level === this.level && item.parent === this.parent
      );
      this.children = this.data.filter((item) => {
        return item.level === this.level + 1 && item.parent === this.selected;
      });  
      console.log("test", this.children);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['parent']){
        this.parent = changes['parent'].currentValue;
        this.selected = null;
      }
      if(changes['level']){
        this.level = changes['level'].currentValue;
      }
      this.eligible = this.data.filter((item) => item.level === this.level && item.parent === this.parent)
      
  }

  handleChange(target: EventTarget | null) {
    if (!target) return;
    
    let value:string|null = (target as HTMLSelectElement).value;
    if(value === 'null') {
      value = null;
    }  
    this.selected = value;
    this.children = this.data.filter((item) => {
      return item.level === this.level + 1 && item.parent === value;
    });
    
    this.np.setParent(value === null ? this.level: this.level+1, value === null ? this.parent : value);
    
  }
}
