import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[];
  //pid : number;
  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.reloadProductData();
    //this.pid = this.route.snapshot.params['id'];
  }

reloadProductData() {
  this.productService.getProductsList().subscribe(
    products=>{
      this.products=products
    }
  );
}//reload close

removeProduct(id:number){
  this.productService.deleteProduct1(id).subscribe(
    result =>{
      console.log(result);
      alert(id + "deleted successfully");
      this.reloadProductData();
    },
    error => console.log(error));
}

productDetails(id:number){
  this.router.navigate(['details',id])
}

updateProduct(id:number){
  this.router.navigate(['update',id])
}

}

