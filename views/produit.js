const domCardTeddy = window.location.search
const params = 



function get(teddyId) {
  fetch(`http://localhost:2021/api/teddies/${teddyId}`)
  // fetch(`http://localhost:2021/api/teddies/5be9c8541c9d440000665243`)
  .then ( (resp)=>resp.json() )
  .then ( (data) =>{

    for (const teddyId of data) {
      const domItem = document.createElement('div')
      const domItemName = document.createElement('div')
      const domItemPrice = document.createElement('div')
      const domItemImg = document.createElement('img')
    
  })
  
}
get(domCardTeddy)



