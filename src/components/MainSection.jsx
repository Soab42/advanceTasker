import { useReducer } from "react";
import HeaderTask from "../tasker/HeaderTask";
import TaskList from "../tasker/TaskList";
import { taskContext } from "../context";
import { taskReducer } from "../reducers/taskReducers";
const initialData = [
  {
    id: crypto.randomUUID().toString(),
    title: "Integration API",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["Tag1", "Tag2", "Tag3"],
    priority: "High",
    isFavorite: true,
  },
  {
    id: crypto.randomUUID().toString(),
    title: "User Authentication",
    description:
      "Implement user authentication and authorization functionality for a web application.",
    tags: ["Authentication", "Security", "Web Development"],
    priority: "Medium",
    isFavorite: false,
  },
];

export default function MainSection() {
  const [tasks, dispatch] = useReducer(taskReducer, initialData);
  return (
    <taskContext.Provider value={{ tasks, dispatch }}>
      <section className="mb-20" id="tasks">
        <div className="container">
          {/* <!-- Search Box Ends --> */}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <HeaderTask />

            <div className="overflow-auto">
              <TaskList />
            </div>
          </div>
        </div>
      </section>
    </taskContext.Provider>
  );
}
