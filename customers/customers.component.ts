import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { ICustomer } from '../shared/interface';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  private title:string;
  private people:ICustomer[];
  private isVisible:boolean = true;

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.title = 'Compagny Community :';
    this.dataService.getCustomers().subscribe((customers:ICustomer[]) => this.people = customers);
    // this.people = [
    //  { id : 1, name: 'John Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10)},
    //  { id : 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 7, 10)},
    //  { id : 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
    //  { id : 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)}
    //];
  }

  changeVisibility(){
    this.isVisible = !this.isVisible;
  }

}
