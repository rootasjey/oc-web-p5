main()

function main() {
  fetch('http://localhost:3000/api/teddies')
  .then((response) => response.json())
  .then(function (data) {
    const container = document.getElementById("container")

    for (const item of data) {
      const domItem = document.createElement('div')
      const domItemName = document.createElement('div')
      const domItemPrice = document.createElement('div')
      const domItemImg = document.createElement('img')

      domItemName.textContent = item.name
      domItemPrice.textContent = item.price
      domItemImg.src = item.imageUrl

      domItemImg.width = 80
      domItemImg.height = 80

      domItem.appendChild(domItemImg)
      domItem.appendChild(domItemName)
      domItem.appendChild(domItemPrice)

      domItem.addEventListener('click', () => {
        window.location = `produit.html?id=${item._id}`
      })

      container.appendChild(domItem)
    }
  })
}
