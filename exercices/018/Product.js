// OOP fundamentals exercice
class Product {
  constructor(name, description, price) {
    this.name = name,
    this.description = description,
    this.price = price,
    this.inStock = 0
  }
  addToStock(quantity){
    this.inStock += quantity
  }
  calculateDiscount(percentage) {
    const discountValue = this.price * (percentage / 100);
    const finalPrice = this.price - discountValue;
    return finalPrice
  }
}

const xbox = new Product("Xbox Series S", "Gaming Console", 250);

xbox.addToStock(5);

console.log(xbox.calculateDiscount(50));