import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductStoreModule } from './product-store/product-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productReducer } from './product-store/reducers';
import { environment } from 'src/environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductStoreModule,
    StoreModule.forRoot(productReducer, {
      // runtimeChecks: {
      //   strictStateImmutability: true,
      //   strictActionImmutability: true,
      //   strictStateSerializability: true,
      //   strictActionSerializability: true,
      // },
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ]
})

export class RootStoreModule { }
