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
        if (index === -1) {//Проверяем наличие в localStorage данного данного товара и добаляем его, если его нет
            products.push(id);
            var pushProduct = true;
        } else {
            products.splice(index, 1);//Если данный элемент уже присутствует в localStorage, то удаляем его
            var pushProduct = false;
        }

        localStorage.setItem('products', JSON.stringify(products));//Записываем массив вlocalStorage    
    }
}
var serviceStore = new ServiceStore();