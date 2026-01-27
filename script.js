let alertTimeOut

function mainScript() {

  //Acessando formulário
  const form = document.querySelector("form")

  //Detectando evento de submit
  form.addEventListener("submit",(event) =>{

    //Impendindo que a página recarregue
    event.preventDefault()

    //Capturando valor recebido pelo input
    const newProduct = getProductInput()

    //Verificando se algo foi digitado
    if (newProduct != "") {

      //Adicionando novo item na lista
      addNewListItem(newProduct)
    }
  })

  //Acessando lista
  const list = document.querySelector("ul")

  //Detectando evento de click na lista
  list.addEventListener("click", (event) => {
    
    //Verificando se o evento click foi feito em uma img dentro do button ou no próprio button
    const removeButton = event.target.closest(".remove-button")

    //Se for feito no botão
    if (removeButton) {

      //Remove o pai do elemento clicado
      removeButton.parentElement.remove()

      //Exibindo mensagem de alerta
      showAlertMessage()
    }

    //Verificando se o evento click foi feito no checkbox
    const checkbox = event.target.closest(".checkbox-div")

    //Se for feito no checkbox
    if (checkbox) {

      //Alterar o estado do checkbox
      checkbox.classList.toggle("checked")
    }
  })

  //Acessando mensagem de alerta
  const alertMessage = document.querySelector("#alert-message")

  alertMessage.addEventListener("click", (event) => {
    console.log("Clicado")

    const removeButton = event.target.closest(".remove-button")

    if (removeButton) {

      removeButton.parentElement.classList.add("hidden-message")
    }
  })

}

function getProductInput() {

  //Acessando o <input>
  const inputBox = document.querySelector("form input")

  //Recebendo o valor registrado
  const inputValue = inputBox.value

  //Limpando campo do input
  inputBox.value = ""

  //Retornando valor capturado
  return inputValue
}

function addNewListItem(itemValue) {

  //Acessando informações da tag <ul>
  const list = document.querySelector("ul")

  //Criando novo elemento para lista
  const newElement = createNewElement(itemValue)

  //Adicionando newElement na lista
  list.append(newElement)
  
}

function createNewElement(itemValue) {

  //Criando tags
  const listItem = document.createElement("li")
  const checkbox = document.createElement("div")
  const span = document.createElement("span")
  const img = document.createElement("img")

  //Definindo classe do <li>
  listItem.classList.add("list-item")

  //Definindo classe da <div>
  checkbox.classList.add("checkbox-div")

  //Definindo classe do <img>
  img.classList.add("remove-button")

  //Adicionando o produto registrado em <span>
  span.textContent = itemValue

  //Definindo caminho da imagem de lixeira
  img.src = "assets/trash.svg"
  img.alt = "ícone de lixeira"

  //Por fim, adicionando os elementos em <li>
  listItem.append(checkbox, span, img)

  //Retornando <li> criado
  return listItem
}

function showAlertMessage() {
  
  //Acessando informações da mensagem de alerta
  const alertMessage = document.querySelector("#alert-message")

  alertMessage.classList.remove("hidden-message")

  clearTimeout(alertTimeOut)

  alertTimeOut = setTimeout(() => {
    alertMessage.classList.add("hidden-message")
  }, 5000)
}

mainScript()