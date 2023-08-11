import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{
  
  products: Product[] = []

  isDisplayModal: boolean = false

  isloading: boolean = true

  modalProduct: Product | undefined

  constructor(private productService: ProductService){}
  
  productsSub: Subscription | undefined

  ngOnInit(): void {
    this.productService.getProducts()
 
    .subscribe({
      next: (products: Product[])=>{
        this.products = products
        this.isloading = false
      },
      error: (error: any)=>{
        console.log(error);
        this.isloading = true
        
      },
      complete: ()=>{
        console.log("completed");
        
      }
    })

  }

  handleDeleteProduct(product: Product){
    this.products = this.products.filter(p => p._id !== product._id)
  }

  handleDisplayProductViewModal(product: Product){
    if(product){ 
    this.isDisplayModal = true
     this.modalProduct = product
    }
  }

  handleCloseModal(){
    this.isDisplayModal = false
     this.modalProduct = undefined
  }

  ngOnDestroy(): void {
    this.productsSub?.unsubscribe();
  }

}
