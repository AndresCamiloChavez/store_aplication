import { Component, computed, inject, signal } from '@angular/core';
import {
  collectionData,
  FirestoreModule,
  provideFirestore,
} from '@angular/fire/firestore';
import { Firestore, collection, getFirestore } from 'firebase/firestore';
import { Product } from '../../models/product-model';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../../../primeng/primeng.module';
import { PricePipe } from '../../pipes/price.pipe';
import { FirebaseAppModule } from '@angular/fire/app';
import { FirebaseServiceService } from '../../services/firebase/firebase-service.service';
import { AppBarComponent } from '../../shared/app-bar/app-bar.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [PrimengModule, CommonModule, PricePipe, AppBarComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  constructor(public data: FirebaseServiceService) {}
}
