import { Product } from 'src/app/interfaces/Products/product';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { ProductService } from '../servicios/products/product.service';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
 products:Product[];
  constructor(private product: ProductService) {
   this.products =[];
  }

  ngOnInit(): void {


    
      this.product.getAllProducts()
      .subscribe(products =>{
        this.products = products;
        console.log(products);
     
    })

  }

  

}
