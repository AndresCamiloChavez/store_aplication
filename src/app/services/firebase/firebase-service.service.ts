import { computed, Injectable, signal, inject } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Product } from '../../models/product-model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseServiceService {
  public products = computed(() => this.#state().products);
  public loading = computed(() => this.#state().loading);

  #state = signal<State>({
    products: [],
    loading: true,
  });

  private firestore = inject(Firestore);

  constructor(){
    this.getItems();
  }

  getItems() {
    const itemCollection = collection(this.firestore, 'items');

    collectionData<Product>(itemCollection).subscribe({
      next: (products: Product[]) => {
        console.log('Valor de productos -> ', products);
        this.#state.set({
          products,
          loading: false,
        });
      },
    });
  }
}

interface State {
  products: Product[];
  loading: boolean;
}
