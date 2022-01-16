/************************* ADD TO CART *************************/

/* ARRAY COM OS PRODUTOS DO CARRINHO */
var localCart = localStorage.getItem('cart');
var cart;
if(localCart !== null){
    cart = JSON.parse(localCart);
} else {
    cart = [];
}

/* FUNÇÃO DE ADICIONAR AO ARRAY E AO LOCAL STORAGE */
function saveProduct(product){
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart)); 
}

function checkIfRepeat(id){
    for(var i = 0; i< cart.length; i++){
        if(cart[i].id == id){
            cart[i].quantity ++;
            localStorage.setItem('cart', JSON.stringify(cart)); 
            return true;
        }
    }
    return false;
}

/* CONSTRUTOR DE UM OBJETO 'PRODUCT' */
function createProduct(id, image, name, price, quantity){
    return { id: id,
        image: image,
        name: name,
        price: price,
        quantity: quantity
    };
}

/* MODAL */
const modal = document.getElementById('modal');
const modal_title = document.getElementById('modal-title');
const modal_image = document.getElementById('modal-image');
function toggleModal(title, image){
    modal.classList.toggle('active');
    modal_title.textContent = title;
    modal_image.src = "/"+image;

    setTimeout(function() {
        modal.classList.toggle('active');
    }, 1750);
}

/* FUNÇÃO 'addtoCart(id) */
let nome;
let preco;
let newProduct;
function addtoCart(id){
    image = document.querySelector("#product-"+id+" img").getAttribute('src');
    nome = document.querySelector("#product-"+id+" h3").textContent;
    preco = document.querySelector("#product-"+id+" .price").textContent;
    
    toggleModal(nome, image);

    //checa se o id que ta sendo adicionado já está no carrinho
    if(!checkIfRepeat(id)){ 
        //se for false cria um novo produto e adiciona no carrinho
        saveProduct(createProduct(id, image, nome, preco, 1));
    }
    //se for true aumenta o atributo quantidade
}