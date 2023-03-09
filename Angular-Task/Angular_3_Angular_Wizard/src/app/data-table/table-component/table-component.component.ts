import { Component } from '@angular/core';
import { FormProviderService } from 'src/services/form-provider.service';
import { TableProviderService, TableRow } from 'src/services/table-provider.service';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})
export class TableComponentComponent {
  tableProvider:TableProviderService;
  formProvider:FormProviderService;
  table:TableRow[] = [];
  constructor(private tbs:TableProviderService, private fp:FormProviderService){
    this.tableProvider = tbs;
    this.formProvider = fp;
    this.table = [];
    tbs.getTable().subscribe((elem:TableRow[]) => {
      console.log(elem);
      this.table = elem;
    })
  }

  handleEdit(index:number){
    this.formProvider.setForm(this.tableProvider.getRow(index));
    this.tableProvider.setEdit(index);
  }
}
