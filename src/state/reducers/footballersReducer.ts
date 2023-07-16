import { useSelector } from "react-redux"

const initialState = {
    data: [],
    loading: true
}

const pokemonReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "getPokemonData":
            return {
                ... state,
                pokemonData: action.payload,
                loading: false
            }
        default: 
            return state    
    }
}

export default pokemonReducer;