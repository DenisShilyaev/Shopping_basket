class ServiceProducts {
    constructor(containerProducts, containerCounter, productsCatalog) {
        this.container = document.querySelector(containerProducts);
        this.containerCounter = document.querySelector(containerCounter);
        this.productsCatalog = productsCatalog; //Загружаем каталог
        this.create();

        /*      Так должны выглядеть итоговые элемент, создаваемый с помощью методов create и getElement:
        <div class="item">
            <div class="name">CANON</div>
            <div class="img" style="background-image: url(https://media.istockphoto.com/photos/cup-of-tea-on-a-delicate-pink-background-with-pink-meringues-picture-id1127396690);"></div>
            <div class="price">1000</div>
            <button class="btn">Добавить в корзину</button>
        </div>*/
    }
    create() { //Создаем необходимые элементы
        var wrapper = document.createElement('slot'); //Обертка. Необходима, что бы каждый раз не производить манипуляции с DOM, а выводить в DOM все элементы из каталога разом

        var products = serviceStore.getProducts();
        this.containerCounter.innerText = products.length;

        for (var i = 0; i < this.productsCatalog.length; i++) {

            var index = products.indexOf(this.productsCatalog[i].id);
            if (index === -1) {
                var activeClass = '';
                var activeText = 'Добавить в корзину';
            } else {
                var activeClass = ' btn-active';
                var activeText = 'Удалить из корзины';
            }
            //Ниже создаем необходимые элементы с помощью метода getElement:
            var item = serviceCreateElement.getElement({ tagName: 'div', className: 'item' });
            var name = serviceCreateElement.getElement({ tagName: 'div', className: 'name', innerText: this.productsCatalog[i].name });
            var img = serviceCreateElement.getElement({ tagName: 'div', className: 'img', backgroundImage: `url(${this.productsCatalog[i].img})` });
            var price = serviceCreateElement.getElement({ tagName: 'div', className: 'price', innerText: this.productsCatalog[i].price.toLocaleString() + ' USD' });
            var btn = serviceCreateElement.getElement({ tagName: 'button', className: 'btn' + activeClass, innerText: activeText, id: this.productsCatalog[i].id });

            btn.addEventListener('click', function() { //Действие при нажатии на кнопку добавления/удаления товара
                var id = this.getAttribute('data-id');
                var result = serviceStore.putProduct(id);

                serviceProducts.containerCounter.innerText = result.products.length;

                if (result.pushProduct) {
                    this.classList.add('btn-active');
                    this.innerText = 'Удалить из корзины';
                } else {
                    this.classList.remove('btn-active');
                    this.innerText = 'Добавить в корзину';
                }
            });

            //Добавляем элементы в обертку:
            item.appendChild(name);
            item.appendChild(img);
            item.appendChild(price);
            item.appendChild(btn);
            wrapper.appendChild(item);
        }
        this.container.appendChild(wrapper); //Добавляем обертку в DOM
    }
}

var serviceProducts = new ServiceProducts('.container-products', '.container-counter', productsCatalog);