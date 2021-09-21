main()

function main() {
  fetch('http://localhost:2021/api/teddies')
  .then((response) => response.json())
  .then(function (data) {
    const container = document.getElementById("container")

    for (const produit of data) {
      const domItem = document.createElement('div')
      const domItemName = document.createElement('div')
      const domItemPrice = document.createElement('div')
      const domItemImg = document.createElement('img')

      domItemName.textContent = produit.name
      domItemPrice.textContent = produit.price
      domItemImg.src = produit.imageUrl

      domItemImg.width = 80
      domItemImg.height = 80

      domItem.appendChild(domItemImg)
      domItem.appendChild(domItemName)
      domItem.appendChild(domItemPrice)

      domItem.addEventListener('click', () => {
        window.location = `produit.html?id=${produit._id}`
      })
      
      container.appendChild(domItem)
    }
  })
}
