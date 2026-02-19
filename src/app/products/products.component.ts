import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  // Data Array with Workout Equipment
  products = [
    { name: 'Power Rack', price: 15000, available: true, category: 'Weights', image: 'images/1.jpg' },
    { name: 'Yoga Mat', price: 800, available: true, category: 'Accessories', image: 'images/2.jpg' },
    { name: 'Spin Bike', price: 12000, available: false, category: 'Cardio', image: 'images/3.webp' },
    { name: 'Dumbbell Set', price: 5000, available: true, category: 'Weights', image: 'images/4.jpg' }
  ];

  cartCount = 0;
  totalPrice = 0;
  selectedCategory = 'All';

  // Filtering Logic
  get filteredProducts() {
    if (this.selectedCategory === 'All') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  // Event Binding
  addToCart(product: any) {
    this.cartCount++;
    this.totalPrice += product.price;
    alert(product.name + ' added to cart!');
  }
}