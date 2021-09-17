const cardTeddy = document.getElementById("card-teddy")
const ajout = document.getElementsByClassName("ajout")


const urlSearchParams = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParams.entries())
console.log(params)


function getOneProduct(teddyId){
    console.log("function get one product");
    fetch (`http://localhost:3000/api/teddies/${teddyId}`)
    //console.log(teddyId)
    .then(resp =>
        resp.json()
    )
    .then(data => {  
        showOneProduct(data);
    }      
    )
    .catch((e)=> console.log(e));
}

function showOneProduct(ted){
    console.log(ted);

    const elementTeddy = document.createElement('div')
    elementTeddy.classList.add('card')

    const  cardImg = document.createElement('div')
    cardImg.classList.add('card-img')

    const img = document.createElement('img')
    img.setAttribute('src',`${ted.imageUrl}` )
    img.setAttribute('alt', "teddy's picture")

    const cardInfos = document.createElement('div')
    cardInfos.classList.add('card-infos')

    const infoName = document.createElement('p')
    infoName.classList.add('info-name')
    infoName.textContent = `${ted.name}`

    const infoPrice = document.createElement('p')
    infoPrice.classList.add('info-price')
    infoPrice.textContent = `${ted.price/100}$`

    
    const dropdown = document.createElement('select')
    dropdown.name = 'colors'
    dropdown.name = 'colors-select'

    for (const color of ted.colors) {
        console.log(color)
        const option = document.createElement('option')
        option.value = color
        option.text = color
        dropdown.appendChild(option)
    }

    const add = document.createElement('a')
    // add.setAttribute('href', 'panier.html')
    add.classList.add('ajout')
    add.textContent = 'ajouter dans mon panier'
    add.addEventListener('click', function () {
        addItemToCart(ted)
    })

    elementTeddy.appendChild(cardImg)
    elementTeddy.appendChild(cardInfos)

    cardImg.appendChild(img)


    cardInfos.appendChild(infoName)
    cardInfos.appendChild(infoPrice)
    cardInfos.appendChild(dropdown)
    cardInfos.appendChild(add)

    cardTeddy.appendChild(elementTeddy)
}

function addItemToCart(item) {
    let cart = {
        count: 0,
        items: [],
        total: 0,
    };

    let cartData = localStorage.getItem('cart');

    if (cartData) {
        cart = JSON.parse(cartData)
    }

    cart.items.push(item)
    cart.count++
    cart.total += item.price

    localStorage.setItem(/*clé*/"cart", /*objet*/ JSON.stringify(cart))
}

getOneProduct(params.id);



