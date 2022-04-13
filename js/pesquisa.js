'use strict'

import {pesquisarPokemon, criarCard, gerarCards} from "./card"
import { criarModal } from "./modal"

const container = document.querySelector('#container-cards')
const pesquisar = document.querySelector('#btnPesquisar')
const pesquisa = document.querySelector('#pesquisa')

const pesquisarPokemonNome = async (pokemon) => {

    console.log(pokemon)
        if(pokemon.name == pesquisa.value) {
            container.innerHTML = ''
            container.appendChild(await criarCard(pokemon))
            console.log(container)
    }
}

const pesquisarPor = async () => {
    const pokemon = await pesquisarPokemon(index)
    if(pesquisa.value != "") {
        pesquisarPokemonNome(pokemon)
    } else {
        gerarCards()
    }
}

pesquisar.addEventListener("click", pesquisarPor)

