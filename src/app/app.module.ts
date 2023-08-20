import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    ProductAddComponent,
    ProductViewComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterLink,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
