const getInputValueById = id =>{
    const inputFiled = document.getElementById(id);
    const inputValue = inputFiled.value;
    inputFiled.value = '';
    return inputValue;
}
const addProduct = () =>{
    const product = getInputValueById('product-name-filed');
    const qunatity = getInputValueById('product-quantity-field')
    //console.log(product, qunatity);
    // Display the items on UI
    addProductToDisplay(product, qunatity);

    // Set to local stotage
    // Simple way
    // localStorage.setItem('product',quantity')

    saveItemToLocalStorage(product, qunatity)
}

const getShoppingCartFromLocalStorage = () => {
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart){
        cart = JSON.parse(savedCart);
    }
    return cart;
}

const saveItemToLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLocalStorage();
    // Add product to the object as property
    cart[product] = quantity;
    const cartStringFied = JSON.stringify(cart);

    // Save to local stotage
    localStorage.setItem('cart', cartStringFied);
}

const addProductToDisplay = (pro, qty) =>{
    const productContainer = document.getElementById('product-container');
    const listItems = document.createElement('li');
    listItems.innerText = `${pro} : ${qty}`;
    productContainer.appendChild(listItems);
}

// Display stored product

const displayStoredproducts = () =>{
    const cart = getShoppingCartFromLocalStorage()
    for(const product in cart){
        const quantity = cart[product];
        addProductToDisplay(product, quantity);
    }
}

displayStoredproducts()