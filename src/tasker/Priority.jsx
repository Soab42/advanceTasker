import { useTaskProvider } from "../context/Provider";

const Priority = ({ value, id }) => {
  // console.log(value);
  const { dispatch } = useTaskProvider();

  const handlePriorityChange = (e) => {
    dispatch({
      type: "UPDATE_PRIORITY",
      payload: { id, priority: e.target.value },
    });
  };

  return (
    <select
      className="bg-inherit"
      value={value}
      onChange={handlePriorityChange}
    >
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select>
  );
};

export default Priority;
