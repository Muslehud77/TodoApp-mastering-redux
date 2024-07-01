
import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useEffect, useState } from "react";
import { TTodo } from "@/redux/features/todoSlice";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const [filter,setFilter] = useState("All")
  // const {todos} = useAppSelector(state=>state.todos)
  const [filteredTodos,setFilteredTodos] = useState<TTodo[]>([])

  const {data:tasks} = useGetTodosQuery(undefined);
  const todos = tasks?.data
  useEffect(() => {
    if (filter !== "All") {
      setFilteredTodos(todos?.filter((todo:TTodo) => todo.priority === filter));
    } else {
    
      setFilteredTodos(todos);
    }

   
    
  }, [filter,todos]);

 

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter filter={filter} setFilter={setFilter} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-1 ">
        {filteredTodos?.length ? (
          <div className="bg-white p-5 rounded-xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredTodos.map((todo) => (
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
