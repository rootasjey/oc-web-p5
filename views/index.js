
//declaration des variables globales
const teddyBox = document.getElementById("teddy")


//declaration de la fonction d'appel de l'api avec la liste des teddies
function getProducts(){
    console.log("function get products");
    fetch('http://localhost:3000/api/teddies')
    .then(resp =>
        resp.json()
    )
    .then(data => {  
        showProducts(data);
    }      
    )
    .catch((e)=> console.log(e));
}


//fonction de recuperation de l'api
function showProducts(products){
    for (const teddy of products){

        const teddyElement = document.createElement('a')
        teddyElement.setAttribute('href', `produit.html?id=${teddy._id}`)
        teddyElement.classList.add('card')


        const cardImg = document.createElement('div')
        cardImg.classList.add('card-img')

        const img = document.createElement('img')
        img.setAttribute('src', teddy.imageUrl)
        img.setAttribute('alt', "teddy's picture")

        const cardInfos = document.createElement('div')
        cardInfos.classList.add('card-infos')

        const infoName = document.createElement('p')
        infoName.classList.add('info-name')
        infoName.textContent = teddy.name

        const infoPrice = document.createElement('p')
        infoPrice.classList.add('info-price')
        infoPrice.textContent = teddy.price/100 +`$`


        teddyElement.appendChild(cardImg)
        teddyElement.appendChild(cardInfos)

        cardImg.appendChild(img)

        cardInfos.appendChild(infoName)
        cardInfos.appendChild(infoPrice)

        teddyBox.appendChild(teddyElement)
    }
}
getProducts();


//declaration de la fonction d'appel à un identifiant de l'api
function getOneProduct(teddy){
    console.log("function get one product");
    fetch (`http://localhost:3000/api/teddies/$teddy`)
    .then(resp =>
        resp.json()
    )
    .then(data => {  
        showOneProduct(data);
    }      
    )
    .catch((e)=> console.log(e));
}

/*
//fonction de recuperation de l'identifiant de l'api
function showOneProduct(data){
    cardTeddy.innerHTML +=
    `<div class ="card">
        <div class ="card-img">
            <img src =${teddy.imageUrl} alt="teddy's picture" />
        </div>
        <div class ="card-infos">
            <p class ="info-name">${teddy.name}</p>
            <p class ="info-price">${teddy.price/100} $</p>
        </div>
    </div>`;
}
*/

/*
document.box.addEventListener("click", e =>{
    e.preventDefault();
    showOneProduct(teddy);
} 
)
*/