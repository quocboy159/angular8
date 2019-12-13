
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { ProductStoreSelectors } from './product-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
    ProductStoreSelectors.selectProductError, (productError: string) => { return productError;}
);

export const selectIsLoading: MemoizedSelector<object, boolean> = createSelector(
    ProductStoreSelectors.selectProductIsLoading,
  (productIsLoading: boolean) => {
    return productIsLoading;
  }
);