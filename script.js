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
    const newProduct = getProductInput()
    console.log(`Capturando produto registrado pelo usuário: ${newProduct}`)

    //Adicionando novo item na lista
    addNewListItem(newProduct)

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
  const checkbox = document.createElement("input")
  const span = document.createElement("span")
  const button = document.createElement("button")
  const img = document.createElement("img")

  //Definindo tipo do <input>
  checkbox.type = "checkbox"

  //Definindo tipo do <button>
  button.type = "button"

  //Adicionando o produto registrado em <span>
  span.textContent = itemValue

  //Definindo caminho da imagem de lixeira
  img.src = "assets/trash.svg"
  img.alt = "ícone de lixeira"

  //Adicionando <img> no <button>
  button.append(img)

  //Por fim, adicionando os elementos em <li>
  listItem.append(checkbox, span, button)

  //Retornando <li> criado
  return listItem
}

mainScript()