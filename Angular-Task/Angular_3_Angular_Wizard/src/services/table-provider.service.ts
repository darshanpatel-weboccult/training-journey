import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface TableRow {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  contact: string;
  dob: string;
  sport: string;
  about: string;
  tnc: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TableProviderService {
  private table: BehaviorSubject<TableRow[]>;
  private editIndex:number | null;

  constructor() {
    this.table = new BehaviorSubject<TableRow[]>([]);
    this.editIndex = null;
  }

  getTable(): Observable<TableRow[]> {
    return this.table.asObservable();
  }
  isEdit():boolean{
    return this.editIndex !== null;
  }

  setEdit(index:number | null){
    this.editIndex = index;
  }

  
  updateRow(row: TableRow) {

    if(this.editIndex !== null){ 
      const updatedTable = this.table.value;
      updatedTable[this.editIndex] = row;
      this.table.next(updatedTable);
      return;
    }
    this.table.next([...this.table.value, row]);
  }

  deleteRow(index:number){
    const updatedTable = this.table.value.filter((elem:TableRow, rowNum:number) => rowNum !== index);
    this.table.next(updatedTable);
  }

  getRow(index: number): TableRow {
    return this.table.value[index] ?? {};
  }
}
