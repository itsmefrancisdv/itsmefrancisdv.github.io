var firebaseConfig = {
    apiKey: "AIzaSyDYmDjYYnjPLjNA2gj_ttjss_vKQd7f798",
    authDomain: "ccapdev-resume-1fed4.firebaseapp.com",
    databaseURL: "https://ccapdev-resume-1fed4.firebaseio.com",
    projectId: "ccapdev-resume-1fed4",
    storageBucket: "ccapdev-resume-1fed4.appspot.com",
    messagingSenderId: "633797268301",
    appId: "1:633797268301:web:51e7b7eedadfea0e32dd04"
};

const form = document.querySelector("#add_educations");
const form2 = document.querySelector("#add_organizations");
const form3 = document.querySelector("#add_works");
var defaultProject = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore()

db.collection("educations").orderBy("year_start").get().then(function(snapshot){
    snapshot.forEach(function(doc){
        console.log(doc.data());
        var educMain = document.createElement("p");
        
        var educTitle = document.createElement("div");
        var educSchool = document.createElement("div");
        var educYearStart = document.createElement("div");
        var educYearEnd = document.createElement("div");

        $(educTitle).text(doc.data().title);
        $(educSchool).text(doc.data().school);
        $(educYearStart).text(doc.data().year_start);
        $(educYearEnd).text(doc.data().year_end);

        $(educMain).addClass("educs")
        $(educTitle).addClass("educs_title")
        $(educSchool).addClass("educs_school")
        $(educYearStart).addClass("educs_yearstart")
        $(educYearEnd).addClass("educs_yearend")

        $(educMain).append(educTitle);
        $(educMain).append(educSchool);
        $(educMain).append(educYearStart);
        $(educMain).append(" - ");
        $(educMain).append(educYearEnd);

        $("div.education").append(educMain);
    })
});

db.collection("organizations").orderBy("year_start").get().then(function(snapshot){
    snapshot.forEach(function(doc){
        var orgMain = document.createElement("p");
        
        var orgName = document.createElement("div");
        var orgPosition = document.createElement("div");
        var orgYearStart = document.createElement("div");
        var orgYearEnd = document.createElement("div");

        $(orgName).text(doc.data().name);
        $(orgPosition).text(doc.data().position);
        $(orgYearStart).text(doc.data().year_start);
        $(orgYearEnd).text(doc.data().year_end);

        $(orgMain).addClass("orgs")
        $(orgName).addClass("orgs_name")
        $(orgPosition).addClass("orgs_position")
        $(orgYearStart).addClass("orgs_yearstart")
        $(orgYearEnd).addClass("orgs_yearend")

        $(orgMain).append(orgName);
        $(orgMain).append(orgPosition);
        $(orgMain).append(orgYearStart);
        $(orgMain).append(" - ");
        $(orgMain).append(orgYearEnd);

        $("div.organization").append(orgMain);
    })
});

db.collection("works").orderBy("year_start").get().then(function(snapshot){
    snapshot.forEach(function(doc){
        var workMain = document.createElement("p");
        
        var workName = document.createElement("div");
        var workSubject = document.createElement("div");
        var workYearStart = document.createElement("div");
        var workYearEnd = document.createElement("div");

        $(workName).text(doc.data().name);
        $(workSubject).text(doc.data().subject);
        $(workYearStart).text(doc.data().year_start);
        $(workYearEnd).text(doc.data().year_end);

        $(workMain).addClass("works")
        $(workName).addClass("works_name")
        $(workSubject).addClass("works_subject")
        $(workYearStart).addClass("works_yearstart")
        $(workYearEnd).addClass("works_yearend")

        $(workMain).append(workName);
        $(workMain).append(workSubject);
        $(workMain).append(workYearStart);
        $(workMain).append(" - ");
        $(workMain).append(workYearEnd);

        $("div.work").append(workMain);
    })
});

db.collection("others").get().then(function(snapshot){
    snapshot.forEach(function(doc){
        var otherMain = document.createElement("p");
        var otherMain2 = document.createElement("div");
        
        var otherValue = document.createElement("div");
        var otherTwitter = document.createElement("div");
        var otherLinked = document.createElement("div");
        var otherGit = document.createElement("div");

        $(otherValue).text(doc.data().introd);
        $(otherTwitter).text(doc.data().twitter);
        $(otherLinked).text(doc.data().linkedin);
        $(otherGit).text(doc.data().github);

        $(otherMain).addClass("others")
        $(otherMain2).addClass("others2")
        $(otherValue).addClass("others_value")
        $(otherTwitter).addClass("others2_twitter")
        $(otherLinked).addClass("others2_linked")
        $(otherGit).addClass("others2_git")

        $(otherMain).append(otherValue);
        $(otherMain2).append(otherTwitter);
        $(otherMain2).append(otherLinked);
        $(otherMain2).append(otherGit);

        $("div.other").append(otherMain);
        $("div.other2").append(otherMain2);
    })
});
