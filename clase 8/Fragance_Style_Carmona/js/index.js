/**
 * Implementando funciones de array
 * @author Melisa Carmona
 * @date 14 June 2021
 */
class Product {

    /**
     * Se definen las variables 
     */
    constructor() {

        let name;
        let product;
        let amount;
        let array_products;
        let price;
        let total;
    }

    defineVarible() {
        /** Nombre del cliente */
        this.name = prompt('Ingrese su nombre');
        this.name = this.name.toLocaleUpperCase();

        /** Se inicializa el array de los productos */
        this.array_products = [];

        /** Se pide ingresar el producto con la cantidad */
        for (let i = 0; i <= 1; i++) {

            this.product = prompt('Ingrese el producto');
            this.amount = prompt('Ingrese la cantidad');

            /** Conversion de variables */
            this.product = this.product.toLocaleUpperCase();
            this.amount = parseInt(this.amount);

            console.log('Name: ' + this.name + '\nProduct: ' + this.product + '\nAmount:' + this.amount);

            /** La función que convierte todo en array es llamada */
            this.convertArray(i);
        }

        /** Se imprime el array de la información de los productos */
        console.log(this.array_products);
    }

    /**
     * Se anexa toda la información a un array
     * id [int] Posición del array
     */
    convertArray(id) {
        // Sub array o array hijo
        let sub_array = [];
        let discount;

        discount = this.calculateDiscount();
        // debugger;
        sub_array = { 'id': id, 'product': this.product, 'amount': this.amount, 'discount': discount };

        // Se anexa el array hijo al array padre
        this.array_products.push(sub_array);
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

    calculateTotal() {
        this.total = 0;
        this.price = 35000;
        let total_product;
        const products = this.array_products.filter(product => product.amount > 0);
        for (let i = 0; i < products.length; i++) {
            total_product = (this.price * products[i]['amount']) - ((this.price * products[i]["amount"]) * products[i]["discount"] / 100);
            this.total = this.total + total_product;

        }
        return products;
    }

    printInvoice(array) {
        let data = '';

        for (let i = 0; i < array.length; i++) {
            data = ('Producto: ' + array[i]['product'] + ' Cantidad: ' + array[i]['amount'] + ' Descuento: ' + array[i]["discount"] + '\n') + data;
        }
        alert('Nombre cliente: ' + this.name + '\nDetalle factura : \n' + data + '\nTotal: ' + this.total);
        // alert('FRAGANCE STYLE \nCliente: ' + this.name + '\nFragancia: ' + this.product + '\nPrecio Unitario: ' + this.price + '\nDescuento: ' + discount + '% del valor total\nTotal: ' + total);
    }

    printInHTML() {
        let invoice_header = document.createElement("div");
        invoice_header.className = "invoiceHeader";

        invoice_header.innerHTML = `<h1>FRAGANCE STYLE</h1>
                                    <h1>Medellín-Colombia</h1><br><br>
                                    <p>Cliente: ${this.name}</p>`
        document.body.appendChild(invoice_header);
        for (const product of this.array_products) {
            let container = document.createElement("div");
            let precio;
            let id;
            id = product.id + 1;
            precio = (this.price * product.amount) - ((this.price * product.amount) * product.discount / 100)
            container.className = "invoice";
            container.innerHTML = `
                                    <p> nro: ${id}</p>
                                    <p> Producto: ${product.product}</p>
                                    <p> Cantidad: ${product.amount}</p>
                                    <p> Descuento: ${product.discount}%</p>
                                    <p> Valor Neto: ${precio}</p>`;
            document.body.appendChild(container);
        }
        let container_total = document.createElement("div");

        container_total.innerHTML = `
                                    
                                    <h3> Valor Total: ${this.total}</h3>`;
        document.body.appendChild(container_total);

    }
}
const product = new Product();
product.defineVarible();
let array = product.calculateTotal();
product.printInHTML();
// product.printInvoice(array);