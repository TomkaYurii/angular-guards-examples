import { Component } from '@angular/core';
import {Product} from "../poroduct";
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {

  product!: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }


  ngOnInit() {


    let id = this.route.snapshot.params['id'];

    this.productService.getProduct(id)
        .subscribe(data => {
          this.product = data;
        })
  }
}
