class ServiceProducts {
    constructor(containerProducts, productsCatalog) {
        this.container = document.querySelector(containerProducts);
        this.productsCatalog = productsCatalog;
        this.create();

        /*		Так должны выглядеть итоговые элемент, создаваемый с помощью методов create и getElement:
        		<div class="item">
                    <div class="name">CANON</div>
                    <div class="img" style="background-image: url(https://media.istockphoto.com/photos/cup-of-tea-on-a-delicate-pink-background-with-pink-meringues-picture-id1127396690);"></div>
                    <div class="price">1000</div>
                    <button class="btn">Добавить в корзину</button>
                </div>*/
    }
    create() {//Создаем необходимые элементы
        var wrapper = document.createElement('slot');//Обертка. Необходима, что бы каждый раз не производить манипуляции с DOM, а выводить в DOM все элементы из каталога разом

        for (var i = 0; i < this.productsCatalog.length; i++) {
        	//Создаем необходимые элементы с помощью метода getElement:
            var item = this.getElement({ tagName: 'div', className: 'item' });
            var name = this.getElement({ tagName: 'div', className: 'name', innerText: this.productsCatalog[i].name });
            var img = this.getElement({ tagName: 'div', className: 'img', backgroundImage: `url(${this.productsCatalog[i].img})` });
            var price = this.getElement({ tagName: 'div', className: 'price', innerText: this.productsCatalog[i].price.toLocaleString() + ' USD' });
            var btn = this.getElement({ tagName: 'button', className: 'btn', innerText: 'Добавить в корзину' });

            //Добавляем элементы в обертку:
            item.appendChild(name);
            item.appendChild(img);
            item.appendChild(price);
            item.appendChild(btn);
            wrapper.appendChild(item);
        }
        this.container.appendChild(wrapper);//Добавляем оертку в DOM
    }

    getElement(options) {
        var element = document.createElement(options.tagName);
        if ('className' in options) {
            element.setAttribute('class', options.className);
        }
        if ('innerText' in options) {
            element.innerText = options.innerText;
        }
        if ('backgroundImage' in options) {
            element.style.backgroundImage = options.backgroundImage;
        }
        return element;
    }

    actions() {
        //
    }
}

var serviceProducts = new ServiceProducts('.container-products', productsCatalog);//Создаем экземпляр класса