import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, mergeMap } from 'rxjs/operators';
import * as productActions from './actions';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ProductStoreEffects {
  constructor(private productService: ProductService, private actions$: Actions, private toastr: ToastrService) { }

  loadProductsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.loadProductsRequest),
      switchMap(() =>
        this.productService.getProductList().pipe(
          map((products: Product[]) =>
            productActions.loadProductsSuccess({ products })
          ),
          catchError(error => {
            this.toastr.error(error.message);
            return of(productActions.loadProductsFailure({ error: error.message }))
          }
          )
        )
      )
    )
  );

  editProductEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.editProductRequest),
      switchMap(({ product }) =>
        this.productService.editProduct(product).pipe(
          map(() => productActions.editProductSuccess({ product })),
          catchError(error => {
            this.toastr.error(error.message);
            return of(productActions.editProductFailure({ error: error.message }));
          })
        )
      )
    )
  );

  addProductEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.addProductRequest),
      switchMap(({ product }) =>
        this.productService.addProduct(product).pipe(
          map((productId: number) => {
            let newProduct : Product = new Product();
            newProduct.id = productId;
            newProduct.name = product.name;
            newProduct.expiredDate = product.expiredDate;
            newProduct.startDate = product.startDate;
            newProduct.url = product.url;

            return productActions.addProductSuccess({ product: newProduct });
          }),
          catchError(error => {
            this.toastr.error(error.message);
            return of(productActions.addProductFailure({ error: error.message }));
          })
        )
      )
    )
  );
}