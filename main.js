const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")

const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);



function toggleDesktopMenu() {


    if (aside.classList.contains('inactive')) {
        desktopMenu.classList.toggle('inactive')

    } else {
        aside.classList.toggle('inactive')
        desktopMenu.classList.toggle('inactive')
    }

}

function toggleMobileMenu() {

    if (aside.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive')
    }
    else {
        aside.classList.toggle('inactive')
        mobileMenu.classList.toggle('inactive')
    }
}

function toggleCarritoAside() {
    if (mobileMenu.classList.contains('inactive') && desktopMenu.classList.contains('inactive')) {
        aside.classList.toggle('inactive')
    }
    else {
        mobileMenu.classList.toggle('inactive')
        aside.classList.toggle('inactive')
        desktopMenu.classList.toggle('inactive')
    }
}


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: "Sprouts - Corn",
    price: 318,
    img: "http://dummyimage.com/250x244.png/dddddd/000000"
}); 
productList.push({
    name: "Pike - Frozen Fillet",
    price: 315,
    img: "http://dummyimage.com/150x116.png/cc0000/ffffff"
}); 
productList.push({
    name: "Jolt Cola - Electric Blue",
    price: 247,
    img: "http://dummyimage.com/250x186.png/5fa2dd/ffffff"
}); 
productList.push({
    name: "Apple - Custard",
    price: 490,
    img: "http://dummyimage.com/224x113.png/5fa2dd/ffffff"
}); 
productList.push({
    name: "Beans - Turtle, Black, Dry",
    price: 221,
    img: "http://dummyimage.com/175x188.png/5fa2dd/ffffff"
}); 
productList.push({
    name: "Leeks - Large",
    price: 269,
    img: "http://dummyimage.com/118x216.png/5fa2dd/ffffff"
}); 
productList.push({
    name: "Beef - Sushi Flat Iron Steak",
    price: 414,
    img: "http://dummyimage.com/124x208.png/ff4444/ffffff"
}); 
productList.push({
    name: "Wine - Rosso Del Veronese Igt",
    price: 475,
    img: "http://dummyimage.com/158x138.png/dddddd/000000"
}); 
productList.push({
    name: "Green Scrubbie Pad H.duty",
    price: 297,
    img: "http://dummyimage.com/130x174.png/5fa2dd/ffffff"
}); 
productList.push({
    name: "Extract - Lemon",
    price: 271,
    img: "http://dummyimage.com/129x203.png/5fa2dd/ffffff"
}); 
productList.push({
    name: "Lettuce - Lambs Mash",
    price: 499,
    img: "http://dummyimage.com/127x248.png/ff4444/ffffff"
}); 
productList.push({
    name: "Lettuce - Frisee",
    price: 347,
    img: "http://dummyimage.com/198x157.png/5fa2dd/ffffff"
}); 
productList.push({
    name: "Cheese Cloth",
    price: 212,
    img: "http://dummyimage.com/180x230.png/cc0000/ffffff"
}); 
productList.push({
    name: "Sour Cream",
    price: 228,
    img: "http://dummyimage.com/140x250.png/5fa2dd/ffffff"
}); 
productList.push({
    name: "Doilies - 8, Paper",
    price: 483,
    img: "http://dummyimage.com/172x144.png/ff4444/ffffff"
}); 
productList.push({
    name: "Mix - Cocktail Strawberry Daiquiri",
    price: 325,
    img: "http://dummyimage.com/222x228.png/5fa2dd/ffffff"
}); 
productList.push({
    name: "Vermouth - Sweet, Cinzano",
    price: 321,
    img: "http://dummyimage.com/244x233.png/ff4444/ffffff"
}); 
productList.push({
    name: "Lobster - Tail 6 Oz",
    price: 402,
    img: "http://dummyimage.com/153x203.png/5fa2dd/ffffff"
}); 
productList.push({
    name: "Remy Red Berry Infusion",
    price: 393,
    img: "http://dummyimage.com/184x213.png/5fa2dd/ffffff"
}); 
productList.push({
    name: "Peas Snow",
    price: 243,
    img: "http://dummyimage.com/178x201.png/cc0000/ffffff"
}); 
productList.push({
    name: "Island Oasis - Sweet And Sour Mix",
    price: 317,
    img: "http://dummyimage.com/122x185.png/dddddd/000000"
}); 
productList.push({
    name: "Black Currants",
    price: 478,
    img: "http://dummyimage.com/166x104.png/cc0000/ffffff"
}); 
productList.push({
    name: "Mushroom - Crimini",
    price: 272,
    img: "http://dummyimage.com/249x198.png/ff4444/ffffff"
}); 
productList.push({
    name: "The Pop Shoppe - Grape",
    price: 472,
    img: "http://dummyimage.com/170x211.png/5fa2dd/ffffff"
}); 
productList.push({
    name: "Soup - Campbellschix Stew",
    price: 325,
    img: "http://dummyimage.com/182x139.png/cc0000/ffffff"
})

// <div class="product-card">
//             <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//             <div class="product-info">
//               <div>
//                 <p>$120,00</p>
//                 <p>Bike</p>
//               </div>
//               <figure>
//                 <img src="./icons/bt_add_to_cart.svg" alt="">
//               </figure>
//             </div>
//           </div>

for( product of productList){

    const producCard= document.createElement('div')
    producCard.classList.add('product-card')
    
    const img = document.createElement('img')
    img.setAttribute('src',product.img)
    
    const producInfo= document.createElement('div')
    producInfo.classList.add('product-info')

    const producInfoDiv = document.createAttribute('div')
    
    const productPrice = document.createElement('p')
    productPrice.innerText='$'+product.price
    const productName = document.createElement('p')
    productName.innerText=product.name

    const producInfoFigure = document.createAttribute('figure')
    const productimgCard = document.createAttribute('img')

    productimgCard.setAttribute('src','./icons/bt_add_to_cart.svg')

    producInfoFigure.appendChild(productimgCard)
}