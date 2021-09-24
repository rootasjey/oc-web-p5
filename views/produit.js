
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
    //console.log(teddy)
    console.log(data)
    const Container = document.getElementById('container')

    const domItem = document.createElement('div')
    const domItemTitle = document.createElement('h1')
    const domItemImgBox = document.createElement('div')
    const domItemInfos = document.createElement('div')
    const domItemAdd = document.createElement('button')

    
    const domItemImg = document.createElement('img')
    const domItemName = document.createElement('div')
    const domItemPrice = document.createElement('div')


    domItem.classList.add('card')
    domItemTitle.textContent = "Produit"
    domItemTitle.classList.add('title')
    domItemImgBox.classList.add('img-card')
    domItemImg.src = data.imageUrl
    domItemImg.classList.add('img')
    domItemImg.width = 300
    domItemImg.height = 300
    domItemImg.setAttribute('alt', 'Teddy\'s picture')
    domItemInfos.classList.add('infos-card')
    domItemAdd.classList.add('ajout')
    domItemAdd.textContent = "Ajouter au panier"

    domItemName.textContent = data.name
    domItemName.classList.add('name')
    domItemPrice.textContent = data.price /100+ '$'
    domItemPrice.classList.add('price')


    const domItemDropdown = document.createElement('select')
    domItemDropdown.name = 'colors'
    domItemDropdown.name = 'colors-select'
    domItemDropdown.classList.add('color-select')
 
    for (const color of data.colors) {
        //console.log(color)
       const option = document.createElement('option')
        option.classList.add('color-option')
        option.value = color
        option.text = color
        domItemDropdown.appendChild(option)
    }


    domItemImgBox.appendChild(domItemImg)
    domItemInfos.appendChild(domItemName)
    domItemInfos.appendChild(domItemPrice)
    domItemInfos.appendChild(domItemDropdown)
  


    domItem.appendChild(domItemTitle)
    domItem.appendChild(domItemImgBox)
    domItem.appendChild(domItemInfos)
    domItem.appendChild(domItemAdd)

    Container.appendChild(domItem)

    
//Récuperer les données complètes de l'objet de l'api dans une constante
const donnéesApi = {
  "photo":data.imageUrl,
  "nom": data.name,
  "prix": data.price/100 +"$",
  //"option":data.colors
  "option":data.color
}
  console.log(donnéesApi)


    domItemAdd.addEventListener( 'click', ()=>{
      window.location.href = "panier.html"

        const donnéesRécup = JSON.parse(localStorage.getItem("produit"))
        console.log(donnéesRécup)
        if (donnéesRécup){
          console.log(okkk)
        }
        else{
          const a = JSON.stringify(localStorage.setItem("produit",donnéesApi) )
        }
  
  
      })
    })


  
}






