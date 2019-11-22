class ServiceStore {
    constructor() {}
    getProducts() {
        var products = [];
        var productsLocalStorage = localStorage.getItem('products');
        if (productsLocalStorage !== null) {
            products = JSON.parse(productsLocalStorage);
        }
        return products;
    }
    putProduct(id) {
        var products = this.getProducts();

        products.push(id);

        localStorage.setItem('products', JSON.stringify(products));
    }
}
var serviceStore = new ServiceStore();