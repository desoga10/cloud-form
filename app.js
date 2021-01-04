//Unique Firebase Object
var firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxxxxxxxxxx",
  projectId: "xxxxxxxxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxxxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxxxxxxxx",
  appId: "xxxxxxxxxxxxxxxxxxxxx"
};

//Initialize Firebase 
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("fomData")

//Get Submit Form
let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()

  //Get Form Values
  let firstName = document.getElementById('fname').value
  let lastName = document.getElementById('lname').value
  let country = document.getElementById('country').value

  //Save Form Data To Firebase
  db.doc().set({
    fname: firstName,
    lname: lastName,
    country: country
  }).then( () => {
    console.log("Data saved")
  }).catch((error) => {
    console.log(error)
  })

  //alert
  alert("Your Form Has Been Submitted Successfully")
})