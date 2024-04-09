import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Product } from '../_models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  constructor(private service: ProductService) {
    
  }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad() {
    this.service.getProduct().subscribe({
      next: (response) => {
        console.log(response);
        this.products = response;
      }, error: (error) => {
        alert(error);
        console.log(error);
      },
    });
  }
}

