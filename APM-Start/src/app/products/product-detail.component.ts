import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product details';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id'); // + parses string to number
    this.pageTitle += `: ${id}`;
    this.product = {
      productId: id,
      productName: 'Leaf rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2019',
      price: 19.99,
      description: 'Nice rake',
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
