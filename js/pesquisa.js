'use strict'

import {pesquisarPokemon, criarCard, gerarCards} from "./card"

const container = document.querySelector('#container-cards')
const pesquisar = document.querySelector('#btnPesquisar')
const pesquisa = document.querySelector('#pesquisa')

const pesquisarPokemonNome = async () => {
    for(let index = 1; index <= 250; index++) {
        const pokemon = await pesquisarPokemon(index)
        if(pokemon.name == pesquisa.value) {
            container.innerHTML = ''
            container.setAttribute("class", "cards")
            container.appendChild(await criarCard(pokemon))
        }
    }
}

const pesquisarPor = async () => {
    if(pesquisa.value != "") {
        pesquisarPokemonNome()
    } else {
        gerarCards()
    }
}

pesquisar.addEventListener("click", pesquisarPor)

