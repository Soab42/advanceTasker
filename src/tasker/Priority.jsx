import { useState } from "react";

const Priority = ({ value }) => {
  // console.log(value);
  const [selected, setSelected] = useState(value);
  const handlePriorityChange = (e) => {
    // Call the onChange prop to update the parent component's state

    console.log(e.target.value);
    setSelected(e.target.value);
  };

  return (
    <select
      className="bg-inherit"
      value={selected}
      onChange={handlePriorityChange}
    >
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select>
  );
};

export default Priority;
