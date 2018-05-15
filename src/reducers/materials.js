const materials = (state = {}, action) => {
  switch (action.type) {
    case "RECIPES_LOADED":
      return { ...action.materials };

    default:
      return state;
  }
};

export default materials;
