export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { count: state.count + 1 };
    case "UPDATE":
      return { count: state.count - 1 };
    case "DELETE":
      return { count: state.count - 1 };
    case "DELETE_ALL":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
