import { useState } from "react";
import { checkFormField } from "../utils/checkFormField";
import closeIcon from "../assets/svg/close.svg";
import { useTaskProvider, useUpdateProvider } from "../context/Provider";
import { toast } from "react-toastify";

export default function TaskForm({ onClose }) {
  const { update } = useUpdateProvider();
  const { dispatch } = useTaskProvider();
  const [formData, setFormData] = useState(
    update.data ?? {
      id: crypto.randomUUID().toString(),
      isFavorite: false,
      title: "",
      tags: [],
      description: "",
      priority: "",
    }
  );
  const [error, setError] = useState(null);
  console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setError(null);
    setFormData((prev) => ({
      ...prev,
      [name]: name === "tags" ? value.split(",") : value,
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValid = checkFormField(formData); //check form data validity
    if (isValid === true) {
      dispatch({
        type: update.isEditing ? "UPDATE" : "ADD",
        payload: update.isEditing
          ? formData
          : { ...formData, isFavorite: false },
      });
      toast(
        `${formData.title} task is ${
          update.isEditing ? "Updated" : "Added"
        } Successfully!`
      );
      onClose();
    }
    setError(isValid);
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content modalAnimation">
        <form
          className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 relative"
          onClick={(e) => {
            e.stopPropagation();
          }}
          onSubmit={handleFormSubmit}
        >
          <button onClick={onClose} className="absolute right-3 top-3">
            <img width="30rem" src={closeIcon} alt="close" />
          </button>
          <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
            {update.isEditing ? "Update Task" : "Add New Task"}
          </h2>

          {/* <!-- inputs --> */}
          <div className="space-y-9 text-white lg:space-y-10">
            {/* <!-- title --> */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="title">Title</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
                value={formData.title}
              />
            </div>
            {/* <!-- description --> */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="description">Description</label>
              <textarea
                className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                type="text"
                name="description"
                id="description"
                onChange={handleChange}
                value={formData.description}
              ></textarea>
            </div>
            {/* <!-- input group --> */}
            <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
              {/* <!-- tags --> */}
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="tags">Tags</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  type="text"
                  name="tags"
                  id="tags"
                  placeholder="React,Js,Python"
                  onChange={handleChange}
                  value={formData.tags}
                />
              </div>
              {/* <!-- priority --> */}
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="priority">Priority</label>
                <select
                  className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                  name="priority"
                  id="priority"
                  value={formData.priority?.toLowerCase()}
                  onChange={handleChange}
                >
                  <option value="">Select Priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
          </div>
          {
            <div
              className={`mt-4 text-center bg-rose-400/20 p-2 rounded-md ${
                !error ? "opacity-0" : "opacity-100"
              }`}
            >
              Please fill
              <span className="mx-1">
                {error?.map((e) => (
                  <span
                    key={e}
                    style={{ textTransform: "capitalize" }}
                    className="pr-1 bg-red-400 text-black/80 px-1 ml-1"
                  >
                    {e}
                  </span>
                ))}
              </span>
              field .
            </div>
          }
          {/* <!-- inputs ends --> */}
          <div className="mt-12 flex justify-center lg:mt-20">
            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            >
              {update.isEditing ? "Update Task" : "Create new Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
