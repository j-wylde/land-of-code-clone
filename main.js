
let navClass = document.getElementById("nav");
let mTog = document.getElementById("menu-toggle");

mTog.addEventListener('click', function(){
    if(navClass.style.display === "none"){
            navClass.style.display = "block";
    } else {
        navClass.style.display = "none";
    }
});
