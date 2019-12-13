import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from 'src/app/models/product.model';

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>({
    selectId: (model: Product) => model.id,
    sortComparer: (a: Product, b: Product): number =>
        b.startDate.toString().localeCompare(a.startDate.toString())
});

export interface State extends EntityState<Product> {
    isLoading?: boolean;
    error?: string;
}

export const initialProductState: State = productAdapter.getInitialState(
    {
        isLoading: false,
        error: null
    }
);