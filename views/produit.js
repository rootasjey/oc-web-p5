
//definition des query params pour manipuler les données de l'element au click
const urlSearchParam = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParam.entries() )
console.log(params)

//appelle à la fonction principale qui définie les query strings et recupere un teddy par son id avec le .id qui fait reference au parametre dans l'url
get(params.id)



//Déclaration de la fonction permettant l'appel a l'api pour l'afichage de ses données
function get(teddy) {
  //appelle a l'api
  fetch(`http://localhost:2021/api/teddies/${teddy}`)
  //Gestion de la promesse envoyé par l'api
  .then ( (resp)=>resp.json() )
  .then ( (data) =>{
    console.log(teddy)
    const Container = document.getElementById('container')

    const domItem = document.createElement('div')
    const domItemTitle = document.createElement('h1')
    const domItemName = document.createElement('div')
    const domItemPrice = document.createElement('div')
    const domItemImg = document.createElement('img')

    domItemTitle.textContent = "Produit"
    domItemName.textContent = teddy.name
    domItemPrice.textContent = teddy.price
    domItemImg.src = teddy.imageUrl

    domItemImg.width = 300
    domItemImg.height = 300

    domItem.appendChild(domItemTitle)
    domItem.appendChild(domItemImg)
    domItem.appendChild(domItemName)
    domItem.appendChild(domItemPrice)

    Container.appendChild(domItem)
   
  })
  
}



