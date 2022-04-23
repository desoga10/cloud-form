//Unique Firebase Object
var firebaseConfig = {
  apiKey: "AIzaSyALvpmQDavsI059rE-v6mSGUT_vyezWABk",
  authDomain: "fire-form-a5ba0.firebaseapp.com",
  projectId: "fire-form-a5ba0",
  storageBucket: "fire-form-a5ba0.appspot.com",
  messagingSenderId: "532614745297",
  appId: "1:532614745297:web:6dbbba281be619cb8d09f0",
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Variable to access database collection
const db = firestore.collection("fomData");

//Get Submit Form
let submitButton = document.getElementById("submit");

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();

  //Get Form Values
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let country = document.getElementById("country").value;

  firestore
    .collection("fomData")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const fn = doc.data().fname;
        if (firstName === fn) {
          console.log("Already Exists");
        }

        // console.log("data", doc.data().fname);
      });
    });
  //Save Form Data To Firebase
  db.doc()
    .set({
      fname: firstName,
      lname: lastName,
      country: country,
    })
    .then(() => { })
    .catch((error) => {
      console.log(error);
    });

  //alert
  alert("Your Form Has Been Submitted Successfully");

  //clear form after submission
  function clearForm() {
    document.getElementById("clearFrom").reset();
  }
  clearForm()
});
