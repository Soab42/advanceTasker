import Favorite from "./Favorite";
import Tag from "./Tag";
import Priority from "./Priority";
import { useTaskProvider, useUpdateProvider } from "../context/Provider";
import TaskForm from "./TaskForm";
import { useState } from "react";
import ConfirmModal from "../components/ConfirmModal";

export default function Task({ task = {} }) {
  const [confirmModalShow, setConfirmModalShow] = useState(false);

  const { dispatch } = useTaskProvider();
  const {
    update: { isEditing },
    setUpdate,
  } = useUpdateProvider();

  const handleEdit = () => {
    setUpdate({ isEditing: true, data: task });
  };
  const handleUpdateModal = () => {
    setUpdate({ isEditing: false, data: null });
  };
  const handleDelete = () => {
    setConfirmModalShow(true);
  };
  const handleConfirmModal = () => {
    setConfirmModalShow(false);
    dispatch({ type: "DELETE", payload: task.id });
  };

  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>
        <Favorite isFavorite={task.isFavorite} id={task.id} />
      </td>
      <td className="capitalize">{task.title}</td>
      <td>
        <div>{task.description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {task?.tags?.map((tag, i) => (
            <Tag key={tag} name={tag} color={i} />
          ))}
        </ul>
      </td>
      <td className="text-center">
        <Priority value={task.priority.toLowerCase()} id={task.id} />
      </td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          {confirmModalShow && (
            <ConfirmModal
              onConfirm={handleConfirmModal}
              onCancel={() => setConfirmModalShow(false)}
              message={`Are you want to delete ${task.title} task?`}
            />
          )}
          <button className="text-red-500" onClick={handleDelete}>
            Delete
          </button>
          {isEditing && <TaskForm onClose={handleUpdateModal} />}
          <button className="text-blue-500" onClick={handleEdit}>
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
}
