import firebaseapp from "../../config/firebase";
import firebase from "firebase";

const login_with_facebook = () => {
  return (dispatch) => {
    // facebook authentication
    var provider = new firebase.auth.FacebookAuthProvider();

    provider.setCustomParameters({
      display: "popup",
    });

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;

        // create user for database
        const create_user = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          uid: user.uid,
        };

        // send to database
        firebase
          .database()
          .ref("/")
          .child(user.uid)
          .set(create_user)
          .then(() => {
            // send data to reducer
            dispatch({
              type: "USER_LOGIN",
              payload: create_user,
            });
            dispatch({
              type: "SET_USER",
              payload: create_user,
            });
          })
          .then(() => {
            // show user panel
            if (localStorage.getItem("uid") === user.uid) {
              document.querySelector(".login").style.display = "none";
              document.querySelector(".user_loged_in").style.display = "flex";
              document.querySelector(".login_in_olx").style.display = "none";
              document.querySelector(".search_input_box").style.width = "500px";
            }
          });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };
};

export { login_with_facebook };
