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
        var index = products.indexOf(id);
        if (index === -1) {
            products.push(id);
            var pushProduct = true; //Если true, то кнопка добавления товара нажата
        } else {
            products.splice(index, 1); //Если данный элемент уже присутствует в localStorage, то удаляем его
            var pushProduct = false; //Если false, то кнопка добавления товара НЕ нажата
        }
        localStorage.setItem('products', JSON.stringify(products)); //Записываем массив вlocalStorage    
        return {
            pushProduct: pushProduct,
            products: products
        };
    }
}
var serviceStore = new ServiceStore();