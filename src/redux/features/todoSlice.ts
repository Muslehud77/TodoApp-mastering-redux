import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export type TTodo = {
  id?:number,
  title:string,
  description:string,
  isCompleted?:boolean,
  priority?: string
}

type TInitialState = {
  todos: TTodo[];

};

const initialState: TInitialState = {
  todos: [],
 
};




const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      const todos = state.todos
      let id = 0
      
      if(todos.length>0){
        id = (todos[todos.length - 1].id as number) + 1;
      }

      todos.push({id,...action.payload,isCompleted:false});
    },
    deleteTodo : (state,action:PayloadAction<number>)=>{
      state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
     
    },
    todoCompleted: (state,action:PayloadAction<number>)=>{
      state.todos = state.todos.map(todo=> {
          if(todo.id === action.payload){
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    },
     
  },
});

export const { addTodo, deleteTodo, todoCompleted } = todoSlice.actions;

export default todoSlice.reducer;
