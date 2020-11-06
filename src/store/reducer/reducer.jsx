const INITIAL_STATE = {
  users: [],
  current_user: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "SET_USER":
      return {
        ...state,
        current_user: action.payload,
      };

    default:
      return state;
  }
};
