import { Component, OnInit } from '@angular/core';
import employees from './data/employees.json';
import {Employee} from './employees.model';

@Component({
  selector: 'em-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  title = 'Employee Management Solution';
  employees: Employee[] = employees;
  filteredEmployees: Employee[] = employees;
  showIcon = false;
  message = '';
  // tslint:disable-next-line:variable-name
  private _designationFilter = '';

  set designationFilter(value: string){
    // console.log('setter fired' + value);
    this._designationFilter = value;
    this.filterByDesignation();
  }

  get designationFilter(): string{
    return this._designationFilter;
  }

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  toggleIcon(){
    this.showIcon = !this.showIcon;
  }

  // tslint:disable-next-line:typedef
  filterByDesignation(){
    this.filteredEmployees = this.employees.filter(employee => employee.designation.includes(this.designationFilter));
  }

  // tslint:disable-next-line:typedef
  onMessageReceived(value: string){
    this.message = value;
  }

}
