import firebaseapp from "../../config/firebase";
import firebase from "firebase";

const login_with_google = () => {
  return (dispatch) => {
    dispatch({ type: "USER_LOGIN", payload: { user_login: true } });
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      login_hint: "user@example.com",
    });

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
        document.querySelector(".user_log_in").style.display = "block";
        document.querySelector(".login").style.display = "none";
        document.querySelector(".search_input_box").style.width = "500px";
        document.querySelector(".login_in_olx").style.display = "none";

        var key = firebase.database().ref("/").push().key;

        let user_login = {
          name: user.displayName,
          photo: user.photoURL,
          FirebaseKey: key,
          uid: user.uid,
        };

        firebase.database().ref("/").child(key).set(user_login);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };
};

export { login_with_google };
