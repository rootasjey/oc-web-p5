main()

function main() {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const bateaux = urlSearchParams.entries()

  const params = Object.fromEntries(bateaux)
  console.log(params);
}
