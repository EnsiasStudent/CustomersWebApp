import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FlexTextboxComponent } from './flex-textbox/flex-textbox.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [ CustomersComponent, CustomersListComponent, FlexTextboxComponent],
  imports: [ CommonModule , SharedModule, FormsModule, CustomersRoutingModule],
  exports : [ CustomersComponent ]
})

export class CustomersModule { 

}
