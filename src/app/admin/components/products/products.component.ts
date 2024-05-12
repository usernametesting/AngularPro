import { Component, OnInit } from '@angular/core';
import { HttpclientService } from './../../../services/common/httpclient.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private service: HttpclientService) { }


  ngOnInit(): void {
   
    //post
    //   this.service.post(
    //     { controller: "Products" },
    //     { name: "test" }
    //   ).subscribe();

    //put
    // for (var i = 6; i <= 35; i++) {
    //   this.service.put(
    //     { controller: "Products" },
    //     { id: i, name: "testUpdated" }
    //   ).subscribe();
    // }

    // delete
    // for (var i = 6; i <= 35; i++) {
    //   this.service.delete(
    //     { controller: "Products" },
    //     i.toString()
    //   ).subscribe();
    // }


    //get
    this.service.get({
      controller: "Products"
    }).subscribe(data => console.log(data));

  }
}
