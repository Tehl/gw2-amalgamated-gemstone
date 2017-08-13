const display = (
  state = {
    count: 5,
    sort: "buy"
  },
  action
) => {
  switch (action.type) {
    case "DISPLAY_CHANGE_COUNT":
      return {
        ...state,
        count: action.count
      };

    case "DISPLAY_CHANGE_SORT":
      return {
        ...state,
        sort: action.sort
      };

    default:
      return state;
  }
};

export default display;
