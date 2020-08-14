var app_firebase = {};

(function(){
    var firebaseConfig = {
    apiKey: "AIzaSyDYmDjYYnjPLjNA2gj_ttjss_vKQd7f798",
    authDomain: "ccapdev-resume-1fed4.firebaseapp.com",
    databaseURL: "https://ccapdev-resume-1fed4.firebaseio.com",
    projectId: "ccapdev-resume-1fed4",
    storageBucket: "ccapdev-resume-1fed4.appspot.com",
    messagingSenderId: "633797268301",
    appId: "1:633797268301:web:51e7b7eedadfea0e32dd04"
    };
    firebase.initializeApp(firebaseConfig);

    app_firebase = firebase;
})()