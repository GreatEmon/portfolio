
const config = {
  apiKey: "AIzaSyCTZyoVHCV_WKucE5WcwTLqgp5VxDGrLQQ",
  authDomain: "portfolio-database-49e70.firebaseapp.com",
  databaseURL: "https://portfolio-database-49e70-default-rtdb.firebaseio.com",
  projectId: "portfolio-database-49e70",
  storageBucket: "portfolio-database-49e70.appspot.com",
  messagingSenderId: "493623254935",
  appId: "1:493623254935:web:9dc8ad8a5feb129ff52ed2",
  measurementId: "G-NCRG2K48ZS"
};

firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

  // Initialize Firebase
var messagesRef = firebase.database().ref();

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();
  // Get values
  var email = getInputVal('email');
  var subject = getInputVal('subject');
  var message = getInputVal('message');

  // Save message
  saveMessage(email, subject, message);
  // Clear form
  document.getElementById('contactForm').reset();
};

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
};

// Save message to firebase
function saveMessage(email, subject, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    email:email,
    subject: subject,
    message:message
  }, (error) => {
  if (error) {
    document.getElementById("failAlert").style.display="block";
  } else {
   document.getElementById("successAlert").style.display="block";
  }
});
};