import { NgModule } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ContactComponent} from "./contact/contact.component";
import {ProductComponent} from "./product/product.component";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuardService} from "./auth-guard.service";
import {ProductViewComponent} from "./product-view/product-view.component";
import {ProductAddComponent} from "./product-add/product-add.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component:LoginComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent, canActivate : [AuthGuardService] ,
    canActivateChild : [AuthGuardService],
    children: [
      {  path: 'view/:id', component: ProductViewComponent  },
      {  path: 'edit/:id', component: ProductEditComponent  },
      {  path: 'add', component: ProductAddComponent }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
