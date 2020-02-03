<script src="https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/live/3.0/firebase.js"></script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDGHo7zjEWtuUIMSAUGPL0OWKYPZEy200Y",
    authDomain: "eco-friendly-shopping-list.firebaseapp.com",
    databaseURL: "https://eco-friendly-shopping-list.firebaseio.com",
    projectId: "eco-friendly-shopping-list",
    storageBucket: "eco-friendly-shopping-list.appspot.com",
    messagingSenderId: "627921587136",
    appId: "1:627921587136:web:79a48c7a95b1b8e477d625",
    measurementId: "G-NXSSFV5E50"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  console.log(firebase);

  //Opretter tabell inni databasen
  var refMessage =  firebase.database().ref('kunder'); 


  //Starter prosessen hvor data legges inn i tabell
  function sendData(){
  var listenavn = document.getElementById("listenavn").value;
  var produkt = document.getElementById("produkt").value;   


  console.log(listenavn.value); 
  console.log(produkt.value); 

  var data = {
  	Liste_Navn: listenavn,
  	Liste: produkt
  }
  refMessage.push(data);
}
