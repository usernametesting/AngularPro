import { Component, inject } from '@angular/core';
import { ProductModel } from 'src/app/admin/contracts/product-model';
import { ProductService } from 'src/app/services/common/models/product.service';
// 

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private productService: ProductService) { }


  createProduct(name: HTMLInputElement) {
    const createProduct: ProductModel = new ProductModel();
    createProduct.Name = name.value;
    this.productService.create(createProduct);
  }
}
