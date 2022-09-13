const reducer = (state, action) => {
  if (action.type === "home-update") {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
      smallheading: action.payload.smallheading,
      description: action.payload.description,
    };
  }

  if (action.type === "about-update") {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
      smallheading: action.payload.smallheading,
      description: action.payload.description,
    };
  }

  return state;
};

export default reducer;
