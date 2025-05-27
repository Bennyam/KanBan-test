import TaskCard from "../card/TaskCard";

function Columns({ status, tasks }) {
  return (
    <div className="p-3">
      <h2 className="border-t-1 border-b-1 border-stone-400 bg-stone-600 py-3 text-center font-semibold text-stone-200 uppercase">
        {status}
      </h2>
      {tasks
        .filter((tasks) => tasks.status === status)
        .map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
    </div>
  );
}

export default Columns;
