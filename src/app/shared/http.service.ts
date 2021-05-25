import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../employees/employees.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService{

  private employeeUrl = 'http://localhost:3000/employees';
 constructor(private http: HttpClient) {
 }

  // tslint:disable-next-line:typedef
 getAllEmployees(): Observable<Employee[]>{
  return this.http.get<Employee[]>(this.employeeUrl);
 }
}
