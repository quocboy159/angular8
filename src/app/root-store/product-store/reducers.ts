import { productAdapter, initialProductState, State } from './state';
import { Update } from '@ngrx/entity';
import { Product } from 'src/app/models/product.model';
import { createReducer, on } from '@ngrx/store';
import * as productActions from './actions';

export const productReducer = createReducer(
    initialProductState,

    on(productActions.loadProductsRequest, state => ({
        ...state,
        isLoading: true,
        error: null
    })),

    on(productActions.loadProductsSuccess, (state, { products }) => {
        return productAdapter.addAll(products, {
            ...state,
            isLoading: false,
            error: null
        });
    }),

    on(productActions.loadProductsFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(productActions.editProductRequest, (state, { product }) => ({
        ...state,
        isLoading: true,
        error: null
    })),

    on(productActions.editProductSuccess, (state, { product }) => {
        const updateProduct: Update<Product> = {
            id: product.id,
            changes: product
        };

        return productAdapter.updateOne(updateProduct, {
            ...state,
            isLoading: false,
            error: null
        });
    }),

    on(productActions.editProductFailure, (state, { error }) => {
        return {
            ...state,
            isLoading: false,
            error: error
        }
    }),

    on(productActions.addProductRequest, (state, { product }) => ({
        ...state,
        isLoading: true,
        error: null
    })),

    on(productActions.addProductSuccess, (state, { product }) => {
        return productAdapter.addOne(product, {
            ...state,
            isLoading: false,
            error: null
        });
    }),

    on(productActions.addProductFailure, (state, { error }) => {
        return {
            ...state,
            isLoading: false,
            error: error
        }
    })
);
