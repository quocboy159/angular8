import { ProductRoutingModule } from './product-routing.module';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [ProductRoutingModule, SharedModule, CommonModule ],
    declarations: [ProductListComponent, ProductEditComponent, ProductCreateComponent]
})
export class ProductModule { }