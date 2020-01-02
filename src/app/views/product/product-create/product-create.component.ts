import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { RootStoreState } from 'src/app/root-store';
import { addProductRequest } from 'src/app/root-store/product-store/actions';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  public productCreateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store$: Store<RootStoreState.RootState>) { }

  ngOnInit() {
    this.productCreateForm = this.formBuilder.group({
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      expiredDate: ['', Validators.required],
      url: ['', Validators.required],
    });
  }

  onSubmit() {
    if (!this.productCreateForm.invalid) {
      this.onCreateProduct();
      this.router.navigate(['/']);
    }
  }

  onReset() {
    this.router.navigate(['/'])
  }

  private onCreateProduct(): void {
    let product: Product = new Product();
    product.name = this.productCreateForm.get('name').value;
    product.startDate = this.productCreateForm.get('startDate').value.toJSON();
    product.expiredDate = this.productCreateForm.get('expiredDate').value.toJSON();
    product.url = this.productCreateForm.get('url').value;
    this.store$.dispatch(addProductRequest({ product }));
  }
}
