import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

    pid:number;
    product : Product;
  constructor(private route:ActivatedRoute,
    private router:Router,private productService:ProductService) { }

  ngOnInit(): void {
    this.product = new Product();
    this.pid = this.route.snapshot.params['id'];
    this.productService .getProduct(this.pid).
    subscribe(selectedProduct=>{
       console.log(selectedProduct);
       this.product = selectedProduct;
    },error=>console.log(error));
  }
 
  updateProduct(pid:number){
    this.productService .updateProduct(this.pid,this.product).
    subscribe(updatedProduct=>{
       console.log(updatedProduct);
       this.product = new Product();
       this.goToProductList();
    },error=>console.log(error));
  }
  goToProductList() {
    this.router.navigate(['/products']);
  }
  
  onSubmit(){
    this.updateProduct(this.pid);
  }


}
