const addItem = () => {
    const productInputField = document.getElementById( 'product-name' );
    const productName = productInputField.value;

    if ( !productName ) {
        alert( 'No Empty Value!!!' );
        return;
    }

    //display the item in UI
    displayItem( productName );

    //add to local storage
    addProductToCart( productName );

    productInputField.value = '';
}

const displayItem = ( item ) => {
    const ul = document.getElementById( 'products-container' );
    const li = document.createElement( 'li' );
    li.innerText = item;
    ul.appendChild( li );
}

const getCart = () => {
    const cart = window.localStorage.getItem( 'cart' );
    let cartObj;
    if ( cart ) {
        cartObj = JSON.parse( cart );
    }
    else {
        cartObj = {};
    }
    return cartObj;
}

const addProductToCart = item => {
    const cart = getCart();
    if ( cart[ item ] ) {
        cart[ item ] = cart[ item ] + 1;
    }
    else {
        cart[ item ] = 1;
    }
    console.log( cart );
    const cartStringified = JSON.stringify( cart );
    window.localStorage.setItem( 'cart', cartStringified );
}

const displayLocalStorageCart = () => {
    const cart = getCart();
    for ( const product in cart ) {
        displayItem( product );
    }
}

displayLocalStorageCart();

const placeOrder = () => {
    document.getElementById( 'products-container' ).textContent = '';
    window.localStorage.removeItem( 'cart' );
}