import { Component } from '@angular/core';
import { NodeService, props } from './node.service';

export interface Node {
  level: number;
  parent: string | null;
  value: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Dynamic Menu';
  input: string;
  data: Node[] = [];
  children: Node[];
  props:props;
  constructor(private np:NodeService) {
    np.getData().subscribe((values:Node[]) => {
      this.data = values;
    })
    this.children = [];
    this.input = '';
    this.props = np.getProps();
  }
  
  
  
  addNode() {
    this.np.addData(this.input);
    this.input = '';

    this.children = this.data.filter(
      (item) => item.level === 0
      );
  }
}
