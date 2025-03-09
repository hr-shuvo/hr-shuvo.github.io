window.onload = function () {
    bool_about = true;


    bool_myname = false;
    check_view();
}

nav_about = document.getElementById("nav_about");
nav_expertise = document.getElementById("nav_expertise");
nav_experience = document.getElementById("nav_experience");
nav_project = document.getElementById("nav_project");
myname = document.getElementById("myname");


nav_about.onclick = function () {
    try {
        // alert("About Clicked");

        bool_about = !bool_about;
        bool_expertise = false;
        bool_experience= false;
        bool_project   = false;

        check_view();
    }
    catch (error) {
        alert(error)

    }
}





About = document.getElementById("About")
Expertise = document.getElementById("Expertise")
Experience = document.getElementById("Experience")
Project = document.getElementById("Project")


function check_view() {
    if (bool_about) {
        About.style.display = "";
    } else {
        About.style.display = "none";
    }

    // if(bool_expertise){
    //     Expertise.style.display = "";
    // }else{
    //     Expertise.style.display = "none";
    // }

    // if(bool_experience){
    //     Experience.style.display = "";
    // }else{
    //     Experience.style.display = "none";
    // }

    // if(bool_project){
    //     Project.style.display = "";
    // }else{
    //     Project.style.display = "none";
    // }


    if (bool_about == false && bool_experience == false &&
        bool_expertise == false && bool_project == false) {
        bool_myname = true;
    }
    else {
        bool_myname = false;
    }
    if (bool_myname) {
        myname.style.display = "";
    }
    else {
        myname.style.display = "none";
    }

    console.log(bool_myname);




}