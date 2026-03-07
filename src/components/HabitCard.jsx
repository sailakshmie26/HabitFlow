import habitFlowIcon from "../assets/habitFlowIcon.png";

const HabitCard = () => {
  return (
    <>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">       
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Drink Water</div>
          <p class="text-gray-700 text-base">Category: Health</p>
          <p>Streak:🔥3</p>
        </div><br />
        <div class="px-6 pt-4 pb-2">
          <button class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Completed
          </button>
          <button class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default HabitCard;
