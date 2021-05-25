import {Component, OnDestroy, OnInit} from '@angular/core';
// import employees from './data/employees.json';
import {Employee} from './employees.model';
import {EmployeeService} from './employee.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'em-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, OnDestroy {
  title = 'Employee Management Solution';
  employees!: Employee[];
  filteredEmployees!: Employee[];
  showIcon = false;
  message = '';
  substriber!: Subscription;

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

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.substriber = this.employeeService.getEmployees().subscribe({
      next: data => {
        this.filteredEmployees = data;
        this.employees = this.filteredEmployees;
      }
    });
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
    this.substriber.unsubscribe();
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
