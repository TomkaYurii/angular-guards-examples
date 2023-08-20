import { Component } from '@angular/core';
import {Product} from "../poroduct";
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  product!: Product;


  constructor(private productService: ProductService,
      private route: ActivatedRoute) {
  }
    /*Додавши ! після продукту ви повідомляєте TypeScript, що переконаєтеся, що цій властивості
    присвоєно значення перед її використанням. Це може бути корисним у ситуаціях, коли ви не можете
    надати ініціалізатор у конструкторі, але впевнені, що властивості буде присвоєно значення пізніше
    у вашому коді. Однак будьте обережні, використовуючи цей підхід, щоб уникнути помилок під
    час виконання, викликаних доступом до неініціалізованої властивості.*/

    ngOnInit() {

    let id=this.route.snapshot.params['id'];

    this.productService.getProduct(id)
        .subscribe(data => {
          this.product=data;
        })
  }
}
