import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Node } from './app.component';

export interface props {
  level: number;
  parent: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class NodeService {
  props: props;
  data: BehaviorSubject<Node[]>;
  constructor() {
    this.props = { level: 0, parent: null };
    this.data = new BehaviorSubject<Node[]>([]);
  }

  setParent(level: number, parent: string | null) {
    this.props.level = level;
    this.props.parent = parent === 'null' ? null : parent;
  }

  getProps(): props {
    return this.props;
  }
  addData(inp: string) {
    let curr = this.data.value;
    let flag = true;
    if(inp === ''){
      alert("Empty Values not Allowed");
      return;
    }
    this.data.value.forEach(item => {
      if(item.level === this.props.level && item.value === inp){
        alert('Same Value at this level already exist! Not Allowed');
        flag = false;
        return;
      }
    })

    if(!flag){
      return;
    }

    curr.push({
      level: this.props.level,
      parent: this.props.parent,
      value: inp,
    });
    this.data.next(curr);
  }

  getData() {
    return this.data.asObservable();
  }
}
