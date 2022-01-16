/************************* CART DISPLAY *************************/
var localCart = localStorage.getItem('cart');
var cart;
if(localCart !== null){
    cart = JSON.parse(localCart);
} else {
    cart = [];
}

function newItem(id, image, name, price, quantity){
    // CREATED ELEMENTS NEEDED
    var idEl, imageEl, descriptionEl, nameEl, spanEl, priceEl, inputEl;
    idEl      =     document.createElement('p');
    imageEl   =     document.createElement('img');
    descriptionEl = document.createElement('div');
    /**/nameEl    =     document.createElement('h3');
    /**/priceEl   =     document.createElement('p');
    /**//**/spanEl    =     document.createElement('span');
    inputEl   =     document.createElement('input');

    /* ADD TEXT BASED ON INPUT */
    idEl.textContent = id;
    imageEl.src = "/neon-lights/"+image;
    nameEl.textContent = name;
    descriptionEl.appendChild(nameEl);
    spanEl.textContent = price;
    priceEl.appendChild(spanEl);
    descriptionEl.appendChild(priceEl);
    inputEl.type = "number";
    inputEl.value = quantity;

    /* ADD CSS CLASSES */
    idEl.classList.add('id');
    imageEl.classList.add('image');
    descriptionEl.classList.add('item-description');
    spanEl.classList.add('price');
    inputEl.classList.add('quant-input');

    /* CREATE A NEW DIV */
    var newDiv = document.createElement('div');
    newDiv.appendChild(idEl);
    newDiv.appendChild(imageEl);
    newDiv.appendChild(descriptionEl);
    newDiv.appendChild(inputEl);
    newDiv.classList.add('item');

    /* RETURN THE NEW DIV WITH THE CONTENT CREATED */
    return newDiv;
}


const cart_container = document.querySelector('.cart-container');
window.onload = function(){
    if(cart == ""){
        var cartEmpty = document.createElement('h3');
        cartEmpty.textContent = "Your cart is empty!";
        cartEmpty.classList.add('cartEmpty');
        cart_container.appendChild(cartEmpty);
    } else{
        for (i = 0; i < cart.length; i++) {
            cart_container.appendChild(newItem(cart[i].id, cart[i].image, cart[i].name, cart[i].price, cart[i].quantity))
        }
    }
}