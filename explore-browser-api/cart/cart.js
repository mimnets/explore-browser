const getInputValueById = id =>{
    const inputFiled = document.getElementById(id);
    const inputValue = inputFiled.value;
    inputFiled.value = '';
    return inputValue;
}
const addProduct = () =>{
    const product = getInputValueById('product-name-filed');
    const qunatity = getInputValueById('product-quantity-field')
    console.log(product, qunatity);
    // Display the items on UI
    productDisplay(product, qunatity);
}

const productDisplay = (pro, qty) =>{
    const productContainer = document.getElementById('product-container');
    const listItems = document.createElement('li');
    listItems.innerText = `${pro} : ${qty}`;
    productContainer.appendChild(listItems);
}