import {Component, computed, effect, linkedSignal, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

interface Product {
  name: string;
  price: number;
  lang: string[];
}

@Component({
  selector: 'app-linked-product',
  imports: [
    FormsModule
  ],
  template: `
    <select
      [ngModel]="selectedProduct()"
      (ngModelChange)="selectedProduct.set($event)">
      <option selected disabled> Choose a product</option>
      @for (product of products(); track product.name) {
        <option [ngValue]="product">{{ product.name }}</option>
      }
    </select>
    <hr/>
    <input type='number' [ngModel]="qty()" (ngModelChange)="qty.set($event)">
    <h1>{{ price() }}</h1>
    <h2>Notice</h2>
    @if (selectedProduct()) {
      <select
        [ngModel]="selectedLang()"
        (ngModelChange)="selectedLang.set($event)">
        <option selected disabled> Choose a notice</option>
        @for (lang of selectedProduct()?.lang; track $index) {
          <option [ngValue]="lang">{{ lang }}</option>
        }
      </select>
    }
  `,
  styles: ``
})
export class LinkedProductComponent {
  products = signal<Product[]>([
    {
      'name': 'raisin',
      'price': 5,
      'lang': ['fr', 'en'],
    },
    {
      'name': 'ananas',
      'price': 10,
      'lang': ['es', 'en'],

    },
  ])
  selectedProduct = signal<Product | null>(null);
  // qty = signal(1);
  qty = linkedSignal({
    source: this.selectedProduct,
    computation: (newProduct) => {
      console.log(newProduct);
      return 1;
    }
  })
  selectedLang = linkedSignal(() => this.selectedProduct()?.lang[0]);
  price = computed(() => {
    return (this.selectedProduct()?.price || 0) * this.qty();
  });

  constructor() {
    effect(() => {
      console.log('Number', this.qty());
      console.log('notice', this.selectedLang())
    })
  }
}
