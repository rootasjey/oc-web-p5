main()

function main() {
  fetch('http://localhost:2021/api/teddies')
  .then((response) => response.json())
  .then(function (data) {
    const container = document.getElementById("container")
    const domItemBox = document.createElement('div')
    

    domItemBox.classList.add('box')

    for (const produit of data) {
      const domItem = document.createElement('div')
      domItem.classList.add('card')

      const domItemImg = document.createElement('img')

      const domItemInfos = document.createElement('div')
      domItemInfos.classList.add('infos-card')

      const domItemName = document.createElement('div')
      domItemName.classList.add('info-name')
      const domItemPrice = document.createElement('div')
      domItemPrice.classList.add('info-price')

      domItemImg.src = produit.imageUrl
      domItemImg.width = 80
      domItemImg.height = 80
      domItemName.textContent = produit.name
      domItemPrice.textContent = produit.price/100 +"$"

      domItemInfos.appendChild(domItemName)
      domItemInfos.appendChild(domItemPrice)

      domItem.appendChild(domItemImg)
      domItem.appendChild(domItemInfos)

      domItemBox.appendChild(domItem)

      domItem.addEventListener('click', () => {
        window.location = `produit.html?id=${produit._id}`
      })
      
      container.classList.add('container')
      container.appendChild(domItemBox)
    }
  })
}
