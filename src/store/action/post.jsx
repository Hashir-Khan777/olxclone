const Post = (post) => {
  return (dispatch) => {
    window.location = "/open/item";
    dispatch({ type: "SET_POST", payload: post });
  };
};

export { Post };
