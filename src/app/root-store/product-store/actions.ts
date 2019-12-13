import { props, createAction } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

export const loadProductsRequest = createAction(
    '[Product] Load Products Request',
    props<{}>()
);

export const loadProductsFailure = createAction(
    '[Product] Load Products Failure',
    props<{ error: string }>()
);

export const loadProductsSuccess = createAction(
    '[Product] Load Products Success',
    props<{ products: Product[] }>()
);

export const editProductRequest = createAction(
    '[Product] Edit Product Request',
    props<{ product: Product }>()
);

export const editProductFailure = createAction(
    '[Product] Edit Product Failure',
    props<{ error: string }>()
);

export const editProductSuccess = createAction(
    '[Product] Edit Product Success',
    props<{ product: Product }>()
);

export const addProductRequest = createAction(
    '[Product] Add Product Request',
    props<{ product: Product }>()
);

export const addProductFailure = createAction(
    '[Product] Add Product Failure',
    props<{ error: string }>()
);

export const addProductSuccess = createAction(
    '[Product] Add Product Success',
    props<{ product: Product }>()
);
