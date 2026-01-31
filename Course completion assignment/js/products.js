const products = [
    {
        id: 1,
        name: "Stainless Steel Bottle",
        size: "750ml",
        price:1200,
        image:"https://images.pexels.com/photos/17662565/pexels-photo-17662565.jpeg"
    },
    {
        id: 2,
        name: "Insulated Bottle",
        size: "500ml",
        price:1500,
        image:"https://images.pexels.com/photos/11463454/pexels-photo-11463454.png"
    },
    {
        id: 3,
        name: "Eco-friendly Plastic Bottle",
        size: "500ml",
        price:400,
        image:"https://images.pexels.com/photos/8217434/pexels-photo-8217434.jpeg"
    },
    {
        id: 4,
        name: "Glass Bottle",
        size: "600ml",
        price:1000,
        image:"https://images.pexels.com/photos/21008956/pexels-photo-21008956.jpeg"
    },
    {
        id: 5,
        name: "Collapsible Bottle",
        size: "750ml",
        price:900,
        image:"https://images.pexels.com/photos/3738063/pexels-photo-3738063.jpeg"
    },
    {
        id: 6,
        name: "Tumbler",
        size: "1L",
        price:1100,
        image:"https://images.pexels.com/photos/31442418/pexels-photo-31442418.jpeg"
    },
    {
        id: 7,
        name: "Hydration Tracker Bottle",
        size: "500ml",
        price:1300,
        image:"https://images.pexels.com/photos/17752147/pexels-photo-17752147.jpeg"
    },
    {
        id: 8,
        name: "Kids' Bottle",
        size: "750ml",
        price:700,
        image:"https://images.pexels.com/photos/11463477/pexels-photo-11463477.png"
    },
    {
        id: 9,
        name: "Sports Bottle",
        size: "1L",
        price:950,
        image:"https://images.pexels.com/photos/8021582/pexels-photo-8021582.jpeg"
    },
    {
        id: 10,
        name: "Travel Bottle",
        size: "600ml",
        price:850,
        image:"https://images.pexels.com/photos/3195774/pexels-photo-3195774.jpeg"
    }
];
const productList = document.getElementById('productList');
const searchInput = document.getElementById('searchInput');
function displayProducts(products) {
    productList.innerHTML = '';
if (products.length === 0) {
        productList.innerHTML = '<p>No products found.</p>';
        return;
    }
    products.forEach(product => {
        const card = document.createElement('div');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>Size: ${product.size}</p>
            <p>Price: Ksh ${product.price}</p>
        `;
        productList.appendChild(card);
    });
}
searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue) ||
        product.size.toLowerCase().includes(searchValue) ||
        product.price.toString().includes(searchValue)
    );
    displayProducts(filteredProducts);
});
displayProducts(products);