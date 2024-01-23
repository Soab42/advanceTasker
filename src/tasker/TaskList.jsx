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
      <div className="w-full min-w-[100rem]  capitalize text-3xl text-rose-300">
        Task is Empty! Please Add New Task.
      </div>
    );
  }
}
