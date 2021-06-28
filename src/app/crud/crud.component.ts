import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  employees=[
    {name:'Reuben',position:'Full Stack Developer'},
    {name:'Sabita',position:'Mean Stack Developer'},
    {name:'Selvi',position:'Mern Stack Developer'},
  ];
  model:any={};
model2:any={};
  newEmployeeClicked=false;

  constructor() { }

  ngOnInit(): void {
  }

addNewEmployeeBtn(){
  this.newEmployeeClicked=!this.newEmployeeClicked;
}


  addEmployee(){
    console.log(this.model);
    this.employees.push(this.model);
    console.log(this.employees);
    
    this.model={};
  }
  value:any;
  editEmployee(editEmployeeInfo:any){
    this.model2.name=this.employees[editEmployeeInfo].name;
    this.model2.position=this.employees[editEmployeeInfo].position;
    this.value=editEmployeeInfo;
  }
  updateEmployee(){
    let editEmployeInfo=this.value;
    for(let i=0;i<this.employees.length;i++)
    {
      if(i==editEmployeInfo)
      {
        this.employees[i]=this.model2;
        this.model2={};
      }
    }
  }
  deleteEmployee(i:any){
    this.employees.splice(i);
    console.log(i);
    
  }

}
