const INITIAL_STATE = {
  users: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};
