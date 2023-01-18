import { Product } from 'src/app/interfaces/Products/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../servicios/products/product.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
   Product:Product[];
  constructor( private producService: ProductService) {
    this.Product=[];

   }



ngOnInit(): void {

    this.producService.getAllProducts()
      .subscribe(Product =>{
        this.Product = Product;
        console.log(Product);

    })
  }



}
