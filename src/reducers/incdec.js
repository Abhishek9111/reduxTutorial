const initialState = 0;
const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "Increase":
      return state + 1;

    case "Decrease":
      return state - 1;

    default:
      return state;
  }
};

export default changeTheNumber;
