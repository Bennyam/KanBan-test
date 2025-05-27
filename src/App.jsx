import { useSelector } from "react-redux";
import Columns from "./features/board/Columns";
import "./index.css";
import AddTask from "./features/card/AddTask";
import Header from "./features/board/Header";

function App() {
  const { tasks, statusses } = useSelector((state) => state.tasks);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-linear-to-br from-stone-500 to-stone-700">
      <div className="border-b-3 border-stone-400">
        <Header />
        <AddTask />
      </div>
      <main className="no-scrollbar overflow-y-scroll">
        <div className="grid h-[100%] grid-cols-4 divide-x-2 divide-stone-400">
          {statusses.map((status) => (
            <Columns status={status} tasks={tasks} key={status} />
          ))}
        </div>
      </main>
      <footer className="border-t-2 border-stone-300 px-3 py-4 text-center text-stone-100">
        Copyright &copy; Ben Ameryckx. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
