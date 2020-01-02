import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: 'product', loadChildren: () => import(`./views/product/product.module`).then(m => m.ProductModule) }
];

// https://itnext.io/how-to-optimize-angular-applications-99bfab0f0b7c
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
