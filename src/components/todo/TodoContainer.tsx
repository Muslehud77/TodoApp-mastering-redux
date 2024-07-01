
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useState } from "react";

import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const [filter,setFilter] = useState("")
  // const {todos} = useAppSelector(state=>state.todos)
 

  const {data:tasks} = useGetTodosQuery(filter);


  const todos = tasks?.data


 

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter filter={filter} setFilter={setFilter} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-1 ">
        {todos?.length ? (
          <div className="bg-white p-5 rounded-xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {todos.map((todo) => (
              <TodoCard key={todo.id} todo={todo} />
            ))}
          </div>
        ) : (
          <h1 className="text-center text-2xl text-white my-5 font-bold">
            There is no task pending!
          </h1>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
