// E-commerce product system using interfaces and type aliases

// Product categories
type ProductCategory = 'Electronics' | 'Clothing' | 'Books' | 'Home' | 'Other';

// Base product interface
interface Product {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  inStock: boolean;
}

// Different product types
interface ElectronicsProduct extends Product {
  category: 'Electronics';
  warrantyYears: number;
  voltage?: number;
}

interface ClothingProduct extends Product {
  category: 'Clothing';
  size: 'XS' | 'S' | 'M' | 'L' | 'XL';
  color: string;
}

// Type for shopping cart item
type CartItem = {
  product: Product;
  quantity: number;
  addedAt: Date;
};

// Shopping cart functionality
class ShoppingCart {
  private items: CartItem[] = [];
  
  addItem(product: Product, quantity: number = 1): void {
    this.items.push({
      product,
      quantity,
      addedAt: new Date()
    });
  }
  
  removeItem(productId: string): void {
    this.items = this.items.filter(item => item.product.id !== productId);
  }
  
  getTotalPrice(): number {
    return this.items.reduce((total, item) => 
      total + (item.product.price * item.quantity), 0);
  }
  
  getItems(): ReadonlyArray<CartItem> {
    return this.items;
  }
}

// Usage
const laptop: ElectronicsProduct = {
  id: 'e-001',
  name: 'MacBook Pro',
  price: 1299.99,
  category: 'Electronics',
  inStock: true,
  warrantyYears: 2
};

const tshirt: ClothingProduct = {
  id: 'c-001',
  name: 'Cotton T-Shirt',
  price: 19.99,
  category: 'Clothing',
  inStock: true,
  size: 'M',
  color: 'Blue'
};

const cart = new ShoppingCart();
cart.addItem(laptop);
cart.addItem(tshirt, 2);
console.log(`Total: $${cart.getTotalPrice().toFixed(2)}`);