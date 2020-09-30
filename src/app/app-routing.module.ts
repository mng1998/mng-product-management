import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { TestComponent } from './test/test.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'test123',
    component: TestComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'products',
    component: ProductComponent,
    children: [
      {
          path: "",
          loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
     
   
  ]
    
  },
  // {
  //   path: 'products',
  //   loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
  //   component: ProductComponent
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, {
    //   preloadingStrategy: PreloadAllModules
    // }),
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }