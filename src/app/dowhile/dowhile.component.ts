import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';




export interface PeriodicElement {
  condition: string,
  variable: string;
  position: number;
  operator: string;
  action: any;
}

export interface Brand{
  value: string;
  viewValue: string;
}

export interface Food {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {condition:'abc',position: 1,variable: 'a', operator:'+', action:'jsa'},
];

@Component({
  selector: 'app-dowhile',
  templateUrl: './dowhile.component.html',
  styleUrls: ['./dowhile.component.css']
})
export class DowhileComponent implements OnInit {

  displayedColumns: string[] = ['position','condition', 'variable', 'operator','action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable,{static:true}) table!: MatTable<any>;


  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
  }



  condition: Food[] = [
    {value: 'do', viewValue: 'do'},
    {value: 'while', viewValue: 'while'},
    {value: 'execute', viewValue: 'execute'},
  ];



  variable: Food[] = [
    {value: 'a', viewValue: 'a'},
    {value: 'b', viewValue: 'b'},
    {value: 'c', viewValue: 'c'},
    {value: 'd', viewValue: 'd'},
    {value: 'i', viewValue: 'i'},
    {value: 'm', viewValue: 'm'},
    {value: 'n', viewValue: 'n'},
    {value: 'x', viewValue: 'x'},
    {value: 'y', viewValue: 'y'},
    {value: 'z', viewValue: 'z'},
    {value: 'l', viewValue: 'l'},
    {value: 'k', viewValue: 'k'},
    // {value: 'execute', viewValue: 'execute'},
    // {value: 'valid', viewValue: 'valid'},
    // {value: 'invalid', viewValue: 'invalid'},
  ];


  operators: Food[] = [
    {value: '+', viewValue: '+'},
    {value: '-', viewValue: '-'},
    {value: '*', viewValue: '*'},
    {value: '/', viewValue: '/'},
     {value: '=', viewValue: '='},
    {value: '%', viewValue: '%'},
    {value: '&&', viewValue: '&&'},
    {value: '||', viewValue: '||'},
    {value: '^', viewValue: '^'},
    {value: '|', viewValue: '|'},
    {value: '&', viewValue: '&'},
    {value: '!', viewValue: '!'},
    {value: '>', viewValue: '>'},
    {value: '>=', viewValue: '>='},
    {value: '<', viewValue: '<'},
    {value: '<=', viewValue: '<='},

  ];

  action: Food[] = [

    {value: 'done', viewValue: 'done'},
  ];

  openDialog(action: any,obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }
    });
  }

  addRowData(row_obj:any){
    var d = new Date();
    this.dataSource.push({

      position:d.getTime(),
      condition:row_obj.condition,
      variable:row_obj.variable,
      operator:row_obj.operator,
      action: row_obj.action
    });
    this.table.renderRows();

  }

}
