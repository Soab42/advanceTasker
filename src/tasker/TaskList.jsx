import { useSearchProvider, useTaskProvider } from "../context/Provider";
import Task from "./Task";

export default function TaskList() {
  const { tasks } = useTaskProvider();
  const { search } = useSearchProvider();
  // console.log(tasks);
  const filteredTasks = tasks?.filter((task) =>
    task?.title?.toLowerCase().includes(search)
  );

  if (filteredTasks.length > 0) {
    return (
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
              Title
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
              Description
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
              Tags
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Priority
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </tbody>
      </table>
    );
  }
  if (filteredTasks.length === 0) {
    return (
      <div className="w-full capitalize text-3xl text-rose-300 px-96 py-10 flex flex-col justify-between items-center">
        <img
          src="https://cdn.dribbble.com/users/1753953/screenshots/3818675/media/b376f45b3edd274a18c6296df22854fb.gif"
          alt="empty"
          className="rounded-tr-[14rem] w-96 rounded-tl-[10rem] rotate-[10deg] rounded-bl-[10rem] -z-0"
        />
        <p className="z-20 font-thin bg-black/90 p-4 ring-1 shadow-lg shadow-pink-400 rounded-md min-w-96 text-center">
          {tasks.length > 0
            ? "No Task Found !"
            : "Tasks List is Empty! Please Add New Task."}
        </p>
      </div>
    );
  }
}
