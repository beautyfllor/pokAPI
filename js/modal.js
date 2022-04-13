'use strict'

// const pesquisarPokemon = async (index) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${index}`
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data.front_default)
//     // return data
// }

const pesquisarPokemon = async (index) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${index}/`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

const criarModal = async (pokemon) => {
    let modalContainer = document.createElement("div")
    let modalContent = document.createElement("div")
    let textModal = document.createElement("div")
    let titulo = document.createElement("p")
    let desc= document.createElement("p")
    let imgPokemon = document.createElement("div")
    let img = document.createElement("img")

    modalContainer.setAttribute("class", "modalContainer")
    modalContent.setAttribute("class", "modalContent")
    textModal.setAttribute("class", "textModal")
    titulo.setAttribute("class", "titulo")
    titulo.textContent = `${pokemon.name}`
    desc.setAttribute("class", "desc")
    desc.textContent = `${pokemon.characteristic}`
    imgPokemon.setAttribute("class", "imgPokemon")
    img.setAttribute("src", `${pokemon.sprites.front_default}`)

    textModal.appendChild(titulo)
    textModal.appendChild(desc)
    imgPokemon.appendChild(img)
    modalContent.appendChild(textModal)
    modalContent.appendChild(imgPokemon)
    modalContainer.appendChild(modalContent)

    return modalContainer
}

const gerarModal = async () => {
    const pokemon = await pesquisarPokemon(5)
    console.log(pokemon)
    console.log( await criarModal(pokemon))
}

gerarModal()

export {criarModal, gerarModal}

// const abrirModal = () => document.getElementById('modalContainer').classList.add('active')
// const fecharModal = () => document.getElementById('modalContainer').classList.remove('active')

// document.getElementById('card').addEventListener('click', criarModal)
// document.getElementById('modalContainer').addEventListener('click', fecharModal)

