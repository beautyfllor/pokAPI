'use strict'

const pesquisarCaracteristica = async (index) => {
    const url = `https://pokeapi.co/api/v2/characteristic/${index}/`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

const criarModal = async (pokemon) => {
    let modalContainer = document.createElement("div")
    let modalContent = document.createElement("div")
    let textModal = document.createElement("div")
    let h1 = document.createElement("h1")
    let desc= document.createElement("p")
    let imgPokemon = document.createElement("div")
    let img = document.createElement("img")

    modalContainer.setAttribute("class", "modalContainer")
    modalContent.setAttribute("class", "modalContent")
    textModal.setAttribute("class", "textModal")
    h1.setAttribute("class", "titulo")
    h1.textContent = `${pokemon.name}`
    desc.setAttribute("class", "desc")
    imgPokemon.setAttribute("class", "imgPokemon")
    img.setAttribute("src", `${pokemon.sprites.front_default}`)


    modalContainer.appendChild(modalContent)
    textModal.appendChild(h1)
    textModal.appendChild(desc)
    imgPokemon.appendChild(img)

    return modalContainer
}



const abrirModal = () => document.getElementById('modalContainer').classList.add('active')
const fecharModal = () => document.getElementById('modalContainer').classList.remove('active')

// document.getElementById('detalhes').addEventListener('click', abrirModal)
// document.getElementById('modalContainer').addEventListener('click', fecharModal)

