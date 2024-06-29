import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
       <AddTodoModal/>
       <TodoFilter/>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-1 ">
        {/* <h1 className='text-center text-2xl text-white mb-5 font-bold'>There is no task pending!</h1> */}
        <div className="bg-white p-5 rounded-xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
