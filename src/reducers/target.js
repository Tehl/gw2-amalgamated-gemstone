const target = (state = null, action) => {
  switch (action.type) {
    case "RECIPES_LOADED":
      return {...action.target};

    default:
      return state;
  }
};

export default target;
