import { Routes } from '@angular/router';
import { RouterModule } from  '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
      path: '',
      component: ProductListComponent
    },
    {
      path: 'products/:id',
      component: ProductEditComponent
    },
    {
      path: 'create-product',
      component: ProductCreateComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductRoutingModule { }