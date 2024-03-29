import { Component, OnInit, OnDestroy, ViewChild, Injectable, OnChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material';
import { Router } from "@angular/router"
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { RootStoreState, ProductStoreSelectors } from 'src/app/root-store';
import { loadProductsRequest } from 'src/app/root-store/product-store/actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: []
})

@Injectable()
export class ProductListComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['id', 'name', 'startDate', 'expiredDate', 'url'];
  public pageSizeOptions: number[] = [10, 50, 100];
  public dataSource = new MatTableDataSource<Product>();
  private products$: Observable<Product[]>;
  private error$: Observable<string>;
  private isLoading$: Observable<boolean>;

  constructor(private router: Router, private store$: Store<RootStoreState.RootState>) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.products$ = this.store$.select(
      ProductStoreSelectors.selectAllProductItems
    );

    this.error$ = this.store$.select(
      ProductStoreSelectors.selectProductError
    );

    this.isLoading$ = this.store$.select(
      ProductStoreSelectors.selectProductIsLoading
    );

    this.store$.dispatch(loadProductsRequest({}));

    this.products$.subscribe((data: Product[]) => {
      this.dataSource = new MatTableDataSource<Product>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnDestroy() {
  }

  onAddNewProduct() : void{
    this.router.navigate(['create-product'])
  }

  onEdit(id: Number): void {
    this.router.navigate(['/products', id])
  }
}
