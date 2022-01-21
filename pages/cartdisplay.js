/************************* CART DISPLAY *************************/
/**** GETS CART ****/
var localCart = localStorage.getItem('cart');
var cart;
if(localCart !== null){
    cart = JSON.parse(localCart);
} else {
    cart = [];
}


/******** WRITE ITENS IN HTML*******/
const minus_svg = document.getElementById('minus');
const plus_svg = document.getElementById('plus');

function newItem(id, image, name, price, quantity){

    // CREATED ELEMENTS NEEDED
    var idEl, imageEl, descriptionEl, nameEl, spanEl, priceEl, inputEl, minusEl, plusEl, quantityEl;
    
    //CREATE ID
    idEl      =     document.createElement('p');
    imageEl   =     document.createElement('img');
    descriptionEl = document.createElement('div');
    /**/nameEl    =     document.createElement('h3');
    /**/priceEl   =     document.createElement('p');
    /**//**/spanEl    =     document.createElement('span');
    inputEl   =     document.createElement('div');
    /**/quantityEl  =   document.createElement('span');
    
    /* ADD TEXT BASED ON INPUT */
    idEl.textContent = id;
    //imageEl.src = "/"+image;
    imageEl.src = "/neon-lights/"+image;
    nameEl.textContent = name;
    descriptionEl.appendChild(nameEl);
    spanEl.textContent = price;
    priceEl.appendChild(spanEl);
    quantityEl.textContent = quantity;
    
    /* ADD CSS CLASSES */
    idEl.classList.add('id');
    imageEl.classList.add('image');
    descriptionEl.classList.add('item-description');
    spanEl.classList.add('price');
    inputEl.classList.add('quant-input');
    minusEl     =   minus_svg.cloneNode(true);
    plusEl      =   plus_svg.cloneNode(true);
    
    /* CREATE A NEW DIV */
    var newDiv = document.createElement('div');
    newDiv.appendChild(idEl);
    newDiv.appendChild(imageEl);
    descriptionEl.appendChild(priceEl);
    newDiv.appendChild(descriptionEl);
    inputEl.appendChild(minusEl);
    inputEl.appendChild(quantityEl);
    inputEl.appendChild(plusEl);
    newDiv.appendChild(inputEl);
    newDiv.classList.add('item');
    
    /* RETURN THE NEW DIV WITH THE CONTENT CREATED */
    return newDiv;
}



/* prints on screen */
const cart_container = document.querySelector('.cart-container');
function loadItens(){
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

/**** CALCULATES FINAL PRICE ****/
var total = 0;
const final_priceEl = document.getElementById('total-price');

var price, quantity;

function loadPrice(){
    for (i = 0; i < cart.length; i++) {
        price = parseInt(cart[i].price);
        quantity = parseInt(cart[i].quantity);
        total += price * quantity;
    }
    final_priceEl.innerHTML = total + ' USD';
}

loadItens();
loadPrice();