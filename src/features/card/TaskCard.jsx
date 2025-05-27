import { useDispatch } from "react-redux";
import { addTeamMembers, changeStatus, deleteTask } from "./taskSlice";
import { useRef } from "react";

function TaskCard({ task }) {
  const dispatch = useDispatch();
  const teamInput = useRef();

  const blue = "bg-linear-to-br from-blue-500 to-blue-700 text-blue-50";
  const yellow = "bg-linear-to-br from-yellow-500 to-yellow-700 text-yellow-50";
  const green = "bg-linear-to-br from-green-500 to-green-700 text-green-50";
  const red = "bg-linear-to-br from-red-500 to-red-700 text-red-50";

  function handleStatus(e) {
    dispatch(changeStatus(task.id, e.target.value));
    e.target.value = task.status;
  }

  function handleAddMembers(e) {
    if (e.key === "Enter") {
      dispatch(addTeamMembers(task.id, e.target.value));
      teamInput.current.blur();
    }
  }

  return (
    <div
      className={`relative m-3 rounded-lg p-3 ${task.status === "Todo" && blue} ${task.status === "Ongoing" && yellow} ${task.status === "Blocked" && red} ${task.status === "Done" && green} shadow-lg shadow-slate-700`}
    >
      <h1 className="mb-3 text-2xl font-bold">{task.title}</h1>
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-semibold">ID: {task.id.slice(0, 8)}</p>
        <p className="text-md font-bold">Priority {task.points}</p>
      </div>
      <div className="flex items-center justify-between">
        <select
          name="status"
          id="status"
          defaultValue={task.status}
          onChange={handleStatus}
          className="text-stone-5000 rounded-md border-none bg-linear-to-br from-slate-400 to-slate-600 p-1 text-sm shadow-sm shadow-slate-700 focus:ring-2 focus:ring-gray-400 focus:outline-none"
        >
          <option value="Todo" className="bg-slate-600">
            Todo
          </option>
          <option value="Ongoing" className="bg-slate-600">
            Ongoing
          </option>
          <option value="Blocked" className="bg-slate-600">
            Blocked
          </option>
          <option value="Done" className="bg-slate-600">
            Done
          </option>
        </select>
        <input
          type="text"
          placeholder="Team members"
          className="focus:ring-opacity-20 w-[60%] cursor-pointer rounded-lg border-none px-2 py-2 text-right text-xl font-semibold focus:ring-2 focus:ring-slate-300 focus:outline-none"
          defaultValue={task.teamMembers}
          onKeyDown={handleAddMembers}
          ref={teamInput}
        />
      </div>
      <button
        onClick={() => dispatch(deleteTask(task.id))}
        className="absolute top-1 right-3 text-2xl transition-colors duration-200 hover:text-stone-300"
      >
        &times;
      </button>
    </div>
  );
}

export default TaskCard;
