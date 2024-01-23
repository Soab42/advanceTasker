import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskForm from "./TaskForm";
import { useTaskProvider } from "../context/Provider";
import ConfirmModal from "../components/ConfirmModal";
export default function HeaderTask() {
  const [formModalShow, setFormModalShow] = useState(false);
  const [confirmModalShow, setConfirmModalShow] = useState(false);
  const { dispatch, tasks } = useTaskProvider();

  const handleShowModal = () => {
    setFormModalShow(false);
  };
  const handleDeleteAll = () => {
    setConfirmModalShow(true);
  };
  const handleConfirmModal = () => {
    setConfirmModalShow(false);
    dispatch({
      type: "DELETE_ALL",
    });
  };
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <SearchTask />
        {formModalShow && <TaskForm onClose={handleShowModal} />}
        <button
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={() => setFormModalShow(true)}
        >
          Add Task
        </button>
        {confirmModalShow && (
          <ConfirmModal
            onConfirm={handleConfirmModal}
            onCancel={() => setConfirmModalShow(false)}
            message={"Are you want to delete all tasks?"}
          />
        )}
        <button
          className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={handleDeleteAll}
          disabled={tasks.length === 0}
        >
          Delete All
        </button>
      </div>
    </div>
  );
}
