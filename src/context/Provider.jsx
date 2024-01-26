import { createContext, useContext, useReducer, useState } from "react";
import { initialData } from "../data/initialData";
import { taskReducer } from "../reducers/taskReducers";

const taskContext = createContext(null);
const searchContext = createContext(null);
const updateContext = createContext(null);

const useTaskProvider = () => {
  return useContext(taskContext);
};

const useUpdateProvider = () => {
  return useContext(updateContext);
};

const useSearchProvider = () => {
  return useContext(searchContext);
};

function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialData);
  const [update, setUpdate] = useState({ isEditing: false, data: null });
  const [search, setSearch] = useState("");

  return (
    <taskContext.Provider value={{ tasks, dispatch }}>
      <searchContext.Provider value={{ search, setSearch }}>
        <updateContext.Provider value={{ update, setUpdate }}>
          {children}
        </updateContext.Provider>
      </searchContext.Provider>
    </taskContext.Provider>
  );
}

export { useTaskProvider, useUpdateProvider, useSearchProvider };

export default TaskProvider;
