class ServiceCart {
    constructor(containerCounter, containerCart, productsCatalog) {
        this.containerCounter = document.querySelector(containerCounter);
        this.containerCart = document.querySelector(containerCart);
        this.productsCatalog = productsCatalog;
        this.create();
    }
    create() {
        
        this.containerCounter.addEventListener('click', function () {
            serviceCart.containerCart.style.display = 'flex';
        });
    }
    getProductsCart() {
        var products = serviceStore.getProducts();
        var productsCart = [];
        for (var i = 0; i < this.productsCatalog.length; i++) {
            if (products.indexOf(this.productsCatalog[i].id) !== -1) {
                productsCart.push(this.productsCatalog[i]);
            }
        }
        return productsCart;
    }
}

var serviceCart = new ServiceCart('.container-counter', '.container-cart', productsCatalog);