document.addEventListener("DOMContentLoaded", function() {
    // const productName = window.location.pathname.split('/').pop().split('.').shift();
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('product');

    fetchProductData(productName) 
        .then(product => {
            document.getElementById('product-name').textContent = product.name;
            document.getElementById('product-image').src = product.image;
            document.getElementById('product-description').textContent = product.description;
            document.getElementById('product-price').textContent = product.price;
        })

        .catch(error => {
            console.error('Error fetching product data:', error);
            document.getElementById('product-error').textContent = 'Product not found';
        });
});

// function to fetch product data based on the product name 

    function fetchProductData(productName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const products = {
                    'product-1': { name: 'Cedru', image: 'public/images/cedru.png', description: 'Description for Product 1', price: '100RON'},
                    'product-2': { name: 'Product 2', image: 'public/images/cedru.png', description: 'Description for Product 2', price: '200RON'},
                    'product-3': { name: 'Product 3', image: 'public/images/cedru.png', description: 'Description for Product 3', price: '300RON'},
                };

                if (products.hasOwnProperty(productName)) {
                    resolve(products[productName]);
                } else {
                    reject('Project not found');
                }
            }, 500);
        })
    }