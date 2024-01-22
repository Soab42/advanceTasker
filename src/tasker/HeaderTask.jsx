import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskForm from "./TaskForm";
export default function HeaderTask() {
  const [formModalShow, setFormModalShow] = useState(false);
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <SearchTask />
        {formModalShow && <TaskForm onClose={() => setFormModalShow(false)} />}
        <button
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={() => setFormModalShow(true)}
        >
          Add Task
        </button>
        <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">
          Delete All
        </button>
      </div>
    </div>
  );
}
