import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { Product } from 'src/app/models/product.model';

import { productAdapter, State } from './state';

export const getError = (state: State): string => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectProductState: MemoizedSelector<object, State> = createFeatureSelector<State>('product');

export const selectAllProductItems: (state: object) => Product[] = productAdapter.getSelectors(selectProductState).selectAll;

export const selectProductById = (id: number) => createSelector(selectAllProductItems, (products: Product[]) => {
    if (products) {
        return products.find(p => p.id === id);
    }

    return null;
});

export const selectProductError: MemoizedSelector<object, string> = createSelector(selectProductState, getError);

export const selectProductIsLoading: MemoizedSelector<object, boolean> = createSelector(selectProductState, getIsLoading);