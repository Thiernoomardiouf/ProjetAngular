import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products! : Array<Product>;
  errorMessage! : String;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.hundlegetAllProduits();

  }

  hundlegetAllProduits(){
    this.productService.getAllProducts().subscribe
    ({
     next : (data:any[])=>{
       this.products= data;
     },
     error:(err)=>{
       this.errorMessage= err;
     }
   });
  }

  handleDeleteProduct(p: Product){
    let conf = confirm("Are you sure");
    if(conf==false) return;

    this.productService.deleteProduct(p.id).subscribe({
      next: (data)=>{
        //this.hundlegetAllProduits();
        let index = this.products.indexOf(p);
        this.products.splice(index, 1);
      }
    })
  }

}
