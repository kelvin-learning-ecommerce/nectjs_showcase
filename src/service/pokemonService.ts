/* eslint-disable import/no-anonymous-default-export */
import Api from './Api';

export default{
    async getPokemonList(){
        var response=await Api().get('api/v2/pokemon?limit=10&offset=0');
        return response.data;
    },
    // async getParticularTodo(todo_id:number){
    //     var response=await Api().get('todos');
    //     return response.data.filter((todo:TodoModel)=>todo.id===todo_id)[0];
    // }
}
