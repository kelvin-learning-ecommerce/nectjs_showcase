import { PokemonList, PokemonListData } from "@/models/pokemonListModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialTodoState: PokemonList = {
  results:[],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {
    setPokemonList(state, action: PayloadAction<PokemonListData[]>) {
      state.results = action.payload;
    },
    // setParticularTodo(state, action: PayloadAction<TodoModel>) {
    //   state.particular_todo = action.payload;
    // },
  },
});
export default todoSlice;
