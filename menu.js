var menu1 = document.querySelector(".menu-item1");
var menu2 = document.querySelector(".menu-item2");
var menu3 = document.querySelector(".menu-item3");
var menu4 = document.querySelector(".menu-item4");

function menufunction1(){
    menu1.style.display = "block"
    menu2.style.display = "none"
    menu3.style.display="none"
    menu4.style.display="none"
    document.querySelector("#menuoption2").style.color="white";
    document.querySelector("#menuoption3").style.color="white";
    document.querySelector("#menuoption1").style.color="#E0AB81";
    document.querySelector("#menuoption4").style.color="white";
    
}
    
function menufunction2(){
    menu1.style.display = "none"
    menu3.style.display = "none"
    menu2.style.display="block"
    menu4.style.display = "none"
    document.querySelector("#menuoption2").style.color="#E0AB81";
    document.querySelector("#menuoption1").style.color="white";
    document.querySelector("#menuoption3").style.color="white";
    document.querySelector("#menuoption4").style.color="white";
    
}
    
function menufunction3(){
    menu1.style.display = "none"
    menu3.style.display = "block"
    menu2.style.display="none"
    menu4.style.display="none"
    document.querySelector("#menuoption1").style.color="white";
    document.querySelector("#menuoption3").style.color="#E0AB81";
    document.querySelector("#menuoption2").style.color="white";
    document.querySelector("#menuoption4").style.color="white";
    
}

function menufunction4(){
    menu1.style.display = "none"
    menu4.style.display = "block"
    menu2.style.display="none"
    menu3.style.display="none"
    document.querySelector("#menuoption1").style.color="white";
    document.querySelector("#menuoption4").style.color="#E0AB81";
    document.querySelector("#menuoption2").style.color="white";
    document.querySelector("#menuoption3").style.color="white";
    
}
