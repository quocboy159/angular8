import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  RootStoreState,
  ProductStoreSelectors,
} from '../root-store';
import { Store } from '@ngrx/store';

import * as _moment from 'moment';
import { editProductRequest } from '../root-store/product-store/actions';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
  providers: [ProductService]
})

export class ProductEditComponent implements OnInit {
  private productEditForm: FormGroup;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private store$: Store<RootStoreState.RootState>) { }

  ngOnInit() {
    this.productEditForm = this.formBuilder.group({
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      expiredDate: ['', Validators.required],
      url: ['', Validators.required],
    });
    this.route.paramMap.subscribe(params => {
      const id: number = Number.parseInt(params.get('id'));
      this.store$.select(ProductStoreSelectors.selectProductById(id)).subscribe(data => {
        const product: Product = data;
        if (product) {
          this.productEditForm.setValue({
            name: product.name,
            startDate: _moment(product.startDate),
            expiredDate: _moment(product.expiredDate),
            url: product.url
          });
        }
      })
    });
  }

  onSubmit() {
    if (!this.productEditForm.invalid) {
      this.onUpdateProduct();
      this.router.navigate(['/']);
    }
  }

  onReset() {
    this.router.navigate(['/'])
  }

  private onUpdateProduct(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = Number.parseInt(params.get('id'));
      const product: Product = this.productService.getProductById(id);
      if (product) {
        product.name = this.productEditForm.get('name').value;
        product.startDate = this.productEditForm.get('startDate').value._d.toJSON();
        product.expiredDate = this.productEditForm.get('expiredDate').value._d.toJSON();
        product.url = this.productEditForm.get('url').value;
        product.id = id;
        this.store$.dispatch(editProductRequest({ product }));
      }
    });
  }
}
