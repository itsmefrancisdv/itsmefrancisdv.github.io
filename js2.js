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
const form4 = document.querySelector("#edit_intro");
const form5 = document.querySelector("#edit_twitter_link");
const form6 = document.querySelector("#edit_linkedin_link");
const form7 = document.querySelector("#edit_github_link");
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
        var educDelete = document.createElement("button");

        $(educTitle).text(doc.data().title);
        $(educSchool).text(doc.data().school);
        $(educYearStart).text(doc.data().year_start);
        $(educYearEnd).text(doc.data().year_end);
        // educDelete.textContent = "Delete";
        $(educDelete).text("X");

        $(educMain).addClass("educs")
        $(educTitle).addClass("educs_title")
        $(educSchool).addClass("educs_school")
        $(educYearStart).addClass("educs_yearstart")
        $(educYearEnd).addClass("educs_yearend")
        $(educDelete).addClass("educ_delete")

        $(educMain).append(educDelete);
        $(educMain).append(educTitle);
        $(educMain).append(educSchool);
        $(educMain).append(educYearStart);
        $(educMain).append(" - ");
        $(educMain).append(educYearEnd);

        $("div.education").append(educMain);
    })
});
// $("button.educ_cross").click(function(){
//     db.collection("educations").delete().then(function(){
//         console.log("document deleted");
//     })
// })

db.collection("organizations").orderBy("year_start").get().then(function(snapshot){
    snapshot.forEach(function(doc){
        var orgMain = document.createElement("p");
        
        var orgName = document.createElement("div");
        var orgPosition = document.createElement("div");
        var orgYearStart = document.createElement("div");
        var orgYearEnd = document.createElement("div");
        var orgDelete = document.createElement("button");

        $(orgName).text(doc.data().name);
        $(orgPosition).text(doc.data().position);
        $(orgYearStart).text(doc.data().year_start);
        $(orgYearEnd).text(doc.data().year_end);
        $(orgDelete).text("X");

        $(orgMain).addClass("orgs")
        $(orgName).addClass("orgs_name")
        $(orgPosition).addClass("orgs_position")
        $(orgYearStart).addClass("orgs_yearstart")
        $(orgYearEnd).addClass("orgs_yearend")
        $(orgDelete).addClass("orgs_delete")

        $(orgMain).append(orgDelete);
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
        var workDelete = document.createElement("button");

        $(workName).text(doc.data().name);
        $(workSubject).text(doc.data().subject);
        $(workYearStart).text(doc.data().year_start);
        $(workYearEnd).text(doc.data().year_end);
        $(workDelete).text("X");

        $(workMain).addClass("works")
        $(workName).addClass("works_name")
        $(workSubject).addClass("works_subject")
        $(workYearStart).addClass("works_yearstart")
        $(workYearEnd).addClass("works_yearend")
        $(workDelete).addClass("works_delete")

        $(workMain).append(workDelete);
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
        var otherTwitter = document.createElement("a");
        var otherLinked = document.createElement("a");
        var otherGit = document.createElement("a");
        var linkTwitter = document.createTextNode(otherTwitter);

        $(otherValue).text(doc.data().introd);
        $(otherTwitter).text(doc.data().twitter);
        $(otherLinked).text(doc.data().linkedin);
        $(otherGit).text(doc.data().github);

        $(otherMain).addClass("others")
        $(otherMain2).addClass("others2")
        $(otherValue).addClass("others_value")
        $(otherTwitter).addClass("others2_twitter")
        $(otherLinked).addClass("others2_linkedin")
        $(otherGit).addClass("others2_github")

        $(otherMain).append(otherValue);
        $(otherMain2).append(otherTwitter);
        $(otherMain2).append(otherLinked);
        $(otherMain2).append(otherGit);
        otherTwitter.appendChild(linkTwitter);
        otherTwitter.href = otherTwitter;

        $("div.other").append(otherMain);
        $("div.other2").append(otherMain2);
    })
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    db.collection("educations").add({
        title: form.title.value,
        school: form.school.value,
        year_start: form.year_start.value,
        year_end: form.year_end.value
    })
    form.title.value = "";
    form.school.value = "";
    form.year_start.value = "";
    form.year_end.value = "";
})
$("#education_btn").click(function(){
    $("#add_educations").toggle();
})

form2.addEventListener("submit", (e) => {
    e.preventDefault();
    db.collection("organizations").add({
        name: form2.name.value,
        position: form2.position.value,
        year_start: form2.year_start.value,
        year_end: form2.year_end.value
    })
    form2.name.value = "";
    form2.position.value = "";
    form2.year_start.value = "";
    form2.year_end.value = "";
})
$("#organization_btn").click(function(){
    $("#add_organizations").toggle();
})

form3.addEventListener("submit", (e) => {
    e.preventDefault();
    db.collection("works").add({
        name: form3.name.value,
        subject: form3.subject.value,
        year_start: form3.year_start.value,
        year_end: form3.year_end.value
    })
    form3.name.value = "";
    form3.subject.value = "";
    form3.year_start.value = "";
    form3.year_end.value = "";
})
$("#work_btn").click(function(){
    $("#add_works").toggle();
})

form4.addEventListener("submit", (e) => {
    e.preventDefault();
    db.collection("others").doc("intro").update({
        introd: form4.introd.value
    })
    form4.introd.value = "";
})
$("#other_btn").click(function(){
    $("#edit_intro").toggle();
})

form5.addEventListener("submit", (e) => {
    e.preventDefault();
    db.collection("others").doc("link").update({
        twitter: form5.twitter.value,
    })
    form5.twitter.value = "";
})

$("#twitter_btn").click(function(){
    $("#edit_twitter_link").toggle();
})
form6.addEventListener("submit", (e) => {
    e.preventDefault();
    db.collection("others").doc("link").update({
        linkedin: form6.linkedin.value,
    })
    form6.linkedin.value = "";
})
$("#linkedin_btn").click(function(){
    $("#edit_linkedin_link").toggle();
})

form7.addEventListener("submit", (e) => {
    e.preventDefault();
    db.collection("others").doc("link").update({
        github: form7.github.value,
    })
    form7.github.value = "";
})
$("#github_btn").click(function(){
    $("#edit_github_link").toggle();
})