
import { TTodo, deleteTodo, todoCompleted } from '@/redux/features/todoSlice';
import { Button } from '../ui/button';
import { useAppDispatch } from '@/redux/hook';

type TTodoCardProps = {
  todo : TTodo
}


const TodoCard = ({ todo }: TTodoCardProps) => {
const priority = todo.priority
const dispatch = useAppDispatch()

  return (
    <div
      className={`${priority === "High" ? "bg-red-200" : priority === "Medium" ? "bg-yellow-100" : "bg-green-100" } shadow-md rounded-lg p-4 w-full max-h-48 mx-auto border`}
    >
      <div className="flex items-center justify-between mb-4">
        <input
          onChange={() => dispatch(todoCompleted(todo.id as number))}
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <p className="text-lg font-semibold">{todo?.title || "Title"}</p>
      </div>
      {/* <p className="text-sm text-gray-600 mb-2">Time</p> */}
      <p className="text-sm text-gray-600 mb-2">
        {todo.isCompleted ? "Done" : "Pending"}
      </p>
      <p className="text-gray-700 mb-4">{todo?.description || "Description"}</p>
      <div className="flex space-x-2">
        <Button
          onClick={() => dispatch(deleteTodo(todo.id as number))}
          variant="destructive"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </Button>
        <Button variant="ghost">Edit</Button>
      </div>
    </div>
  );
};

export default TodoCard;