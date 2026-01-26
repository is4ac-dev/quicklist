function mainScript() {
  //Acessando formulário
  const form = document.querySelector("form")

  //Detectando evento de submit
  form.addEventListener("submit",(event) =>{
    //Impendindo que a página recarregue
    event.preventDefault()

    //Informando detecção de evento
    console.log("Evento submit detectado!")

    //Capturando valor recebido pelo input
    newProduct = getProductInput()
    console.log(`Capturando produto registrado pelo usuário: ${newProduct}`)
  })
}

function getProductInput() {
  //Capturando valor
  inputValue = document.querySelector("form input").value

  //Retornando valor capturado
  return inputValue
}

mainScript()