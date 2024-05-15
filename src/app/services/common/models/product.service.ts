import { Injectable } from '@angular/core';
import { HttpclientService } from './../httpclient.service';
import { ProductModel } from 'src/app/admin/contracts/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclientService: HttpclientService) { }


  create(model: ProductModel) {
    this.httpclientService.post({ controller: "products" }, model)
          .subscribe(()=>alert("created"));;
  }

}
