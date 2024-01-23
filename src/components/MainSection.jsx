import HeaderTask from "../tasker/HeaderTask";
import TaskList from "../tasker/TaskList";
import TaskProvider from "../context/Provider";

export default function MainSection() {
  return (
    <TaskProvider>
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
    </TaskProvider>
  );
}
