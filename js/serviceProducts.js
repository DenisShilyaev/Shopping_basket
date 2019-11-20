class ServiceProducts {
    constructor(containerProducts, productsCatalog) {
        this.container = document.querySelector(containerProducts);
        this.productsCatalog = productsCatalog;
        this.create();

        /*        <div class="item">
                    <div class="name">CANON</div>
                    <div class="img" style="background-image: url(https://media.istockphoto.com/photos/cup-of-tea-on-a-delicate-pink-background-with-pink-meringues-picture-id1127396690);"></div>
                    <div class="price">1000</div>
                    <button class="btn">Добавить в корзину</button>
                </div>*/
    }
    create() {
        var wrapper = document.createElement('slot');

        for (var i = 0; i < this.productsCatalog.length; i++) {

            var item = document.createElement('div');
            item.setAttribute('class', 'item');
            wrapper.appendChild(item);
        }
        this.container.appendChild(wrapper);
    }

    getElement(options) {
        //
    }

    actions() {
        //
    }
}

var serviceProducts = new ServiceProducts('.container-products', productsCatalog);