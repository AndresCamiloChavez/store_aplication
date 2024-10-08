import { Component } from '@angular/core';
import { AppBarComponent } from '../../shared/app-bar/app-bar.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [AppBarComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export default class ProductDetailComponent {}
