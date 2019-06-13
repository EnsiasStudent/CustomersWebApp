import { NgModule } from "@angular/core";
import { OrdersComponent } from './orders.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.model';



@NgModule({
    declarations: [OrdersComponent],
    imports: [CommonModule, FormsModule, SharedModule, OrdersRoutingModule]
})

export class OrdersModule {}