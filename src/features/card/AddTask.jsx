import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./taskSlice";

function AddTask() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("1");
  const dispatch = useDispatch();

  function handleAddTask() {
    if (title === "") return;
    dispatch(addTask(title, priority));
    setTitle("");
    setPriority("1");
  }

  return (
    <div className="mb-3 flex items-center justify-center px-5 py-4">
      <p className="mr-5 text-xl font-semibold text-stone-100">
        Start by creating a task &rarr;
      </p>
      <input
        type="text"
        placeholder="Task name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mr-8 rounded-lg border-none bg-slate-100 px-3 py-1 text-base font-semibold text-stone-800 shadow-md shadow-slate-700 focus:ring-4 focus:ring-stone-100/50 focus:outline-none"
      />
      <p className="mr-3 text-xl font-semibold text-stone-100">Priority :</p>
      <select
        name="priority"
        id="prpiority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="mr-8 rounded-lg border-none bg-linear-to-br from-slate-200 to-slate-300 px-4 py-1 text-base font-semibold text-stone-800 shadow-md shadow-slate-700 focus:ring-4 focus:ring-stone-100/50 focus:outline-none"
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <option value={index + 1} key={index} className="bg-slate-200">
            {index + 1}
          </option>
        ))}
      </select>
      <button
        onClick={handleAddTask}
        className="rounded-lg border-none bg-linear-to-br from-slate-200 to-slate-300 px-3 py-1 text-stone-800 shadow-md shadow-slate-700 transition-colors duration-200 hover:bg-linear-to-br hover:from-slate-300 hover:to-slate-400 focus:ring-4 focus:ring-stone-100/50 focus:outline-none"
      >
        Add task
      </button>
    </div>
  );
}

export default AddTask;
