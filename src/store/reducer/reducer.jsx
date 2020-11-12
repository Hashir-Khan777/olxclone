const INITIAL_STATE = {
  users: [],
  current_user: [],
  current_post: [],
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

    case "SET_POST":
      return {
        ...state,
        current_post: action.payload,
      };

    default:
      return state;
  }
};
