import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
DoWhile!: FormGroup;

  displayedColumns: string[] = ['position','condition', 'variable', 'operator','action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable,{static:true}) table!: MatTable<any>;


  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {

    this.DoWhile= new FormGroup({
      position: new FormControl(),
      condition: new FormControl(),
      variable: new FormControl(),
      operator: new FormControl(),
      action: new FormControl(),
    });
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

  position: Food[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},

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


  OnTaskAdd(f){

    console.log(f);
  }
}
