export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "UPDATE":
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    case "DELETE":
      return state.filter((task) => task.id !== action.payload);
    case "DELETE_ALL":
      return [];
    case "UPDATE_PRIORITY":
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, priority: action.payload.priority };
        }
        return task;
      });
    case "UPDATE_FAV":
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, isFavorite: action.payload.isFavorite };
        }
        return task;
      });
    default:
      return state;
  }
};
