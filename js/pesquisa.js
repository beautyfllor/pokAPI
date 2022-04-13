'use strict'

import {pesquisarPokemon} from "./card.js"
import { criarModal } from "./modal.js"

const container = document.querySelector('#modalContainer')
const containerCards = document.querySelector('#container-cards')
const pesquisar = document.querySelector('#btnPesquisar')
const pesquisa = document.querySelector('#pesquisa')

const pesquisarPokemonNome = async (pokemon) => {
        if(pokemon.name == pesquisa.value) {
            containerCards.innerHTML = ''
            container.appendChild(await criarModal(pokemon))
            console.log(container)
    }
}

const filtrarPesquisa = async () => {
    const pokemon = await pesquisarPokemon(pesquisa.value)
    if(pesquisa.value != "") {
        pesquisarPokemonNome(pokemon)
    } else {
        alert("Digite um nome válido!")
    }
}

pesquisar.addEventListener("click", filtrarPesquisa)

