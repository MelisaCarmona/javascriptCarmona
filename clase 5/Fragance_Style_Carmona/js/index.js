class Product {
    constructor(name, product, amount) {
        this.name = name.toLocaleUpperCase();
        this.product = product.toLocaleUpperCase();
        this.amount = parseInt(amount);
        this.price = 35000;

        console.log('Name: ' + name + '\nProduct: ' + product + '\nAmount:' + amount);
    }

    calculateDiscount() {
        let discount = 0;
        if (this.amount > 5) {
            discount = 70;
        } else if (this.amount > 3) {
            discount = 50;
        } else if (this.amount > 2) {
            discount = 30;
        } else {
            discount = 0;
        }
        return discount;
    }

    calculateTotal(discount) {
        let total;
        total = (this.price * this.amount) - ((this.price * this.amount) * discount / 100);
        return total;
    }

    printInvoice(total, discount) {
        alert('FRAGANCE STYLE \nCliente: ' + this.name + '\nFragancia: ' + this.product + '\nPrecio Unitario: ' + this.price + '\nDescuento: ' + discount + '% del valor total\nTotal: ' + total);
    }
}
const product = new Product('melisa', 'jazmin', 3);
let discount = product.calculateDiscount();
let total = product.calculateTotal(discount);
product.printInvoice(total, discount);