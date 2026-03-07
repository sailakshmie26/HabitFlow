import { useDispatch } from "react-redux";
import { addHabit } from "../features/habits/habitSlice";

const HabitForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2>Add a habit</h2>
      </div>
      <div>
        <form class="w-full max-w-sm">
          <div class="flex items-center border-b border-black-500 py-2">
            <input
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Habit name"
              aria-label="Habit name"
            />
            <button
            onClick={()=>{
              dispatch(addHabit())
            }}
              class="flex-shrink-0 bg-blue-500 hover:bg-black-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Add
            </button>
            <button
            onClick={()=>{
              input.value = ""
            }}
              class="flex-shrink-0 border-transparent border-4 text-black-500 hover:text-black-800 text-sm py-1 px-2 rounded"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default HabitForm;
