'use strict'

import {pesquisarPokemon, criarCard, gerarCards} from "./card"

const container = document.querySelector('#container-cards')

const pokemonsNome = document.querySelector('#pokemonsNome')
const pesquisar = document.querySelector('#btnPesquisar')

const nomearPokemons = async () => {
    for(let index = 1; index <= 250; index++) {
        const pokemon = await pesquisarPokemon(index)

        let option = document.createElement("option")
        option.textContent = `${pokemon.name}`
        pokemonsNome.appendChild(option)
    }
}
nomearPokemons()

const pesquisarPokemonNome = async () => {
    for(let index = 1; index <= 250; index++) {
        const pokemon = await pesquisarPokemon(index)
        if(pokemon.name == pesquisaNome.value) {
            container.innerHTML = ''
            container.setAttribute("class", "cards")
            container.appendChild(await criarCard(pokemon))
            index = 250
        }
    }
}

const pesquisarPor = async () => {
    if(pesquisaNome.value != "") {
        pesquisarPokemonNome()
    } else {
        gerarCards()
    }
}

pesquisar.addEventListener("click", pesquisarPor)

