import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';



export interface PeriodicElement {
  condition: string
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
  {position: 1,condition: 'abc',variable: 'a', operator:'+', action:'jsa'},
];

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  For!: FormGroup;
  displayedColumns: string[] = ['position','condition', 'variable', 'operator','action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable,{static:true}) table!: MatTable<any>;


  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.For= new FormGroup({
      position: new FormControl(),
      condition: new FormControl(),
      variable: new FormControl(),
      operator: new FormControl(),
      action: new FormControl(),
    });
  }


  condition: Food[] = [
    {value: 'for', viewValue: 'for'},
    {value: 'execute', viewValue: 'execute'},

  ];


   variable: Food[] = [
    {value: 'a', viewValue: 'a'},
    {value: 'b', viewValue: 'b'},
    {value: 'c', viewValue: 'c'},
    {value: 'd', viewValue: 'd'},
    {value: 'i', viewValue: 'i'},
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
    {value: '10', viewValue: '10'},
    {value: 'execute', viewValue: 'execute'},
    {value: 'valid', viewValue: 'valid'},
    {value: 'invalid', viewValue: 'invalid'},
  ];


  operators: Food[] = [
    {value: '+', viewValue: '+'},
    {value: '-', viewValue: '-'},
    {value: '*', viewValue: '*'},
    {value: '/', viewValue: '/'},
     {value: '=', viewValue: '='},
     {value: '++', viewValue: '++'},
     {value: '--', viewValue: '--'},
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


  brands: Brand[]=[
    {value: 'abc',viewValue:'abc'},
    {value: 'abc',viewValue:'abc'},
    {value: 'abc',viewValue:'abc'},
    {value: 'abc',viewValue:'abc'},
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
