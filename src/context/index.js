import { createContext, useContext } from "react";

export const taskContext = createContext(null);
export const searchContext = createContext(null);

export const useTaskProvider = () => {
  return useContext(taskContext);
};
export const useSearchProvider = () => {
  return useContext(searchContext);
};
