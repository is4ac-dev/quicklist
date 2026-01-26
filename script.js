function getProductInput() {
  //Acessando formulário
  const form = document.querySelector("form")
  console.log("Acessando formulário")

  //Detectando evento de submit
  form.addEventListener("submit",(event) =>{
    
    //Impendindo que a página recarregue
    event.preventDefault()

    //Capturando valor
    inputValue = document.querySelector("form input").value
    console.log("Capturando valor enviado pelo user")

    //Retornando valor capturado
    return inputValue
  })
}
