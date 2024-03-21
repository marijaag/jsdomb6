let destinacija=document.getElementById("lista-destinacija");
console.log(destinacija);

let naslov=document.getElementsByClassName("title");
console.log(naslov);

let element = document.getElementsByTagName("li");
console.log(element);

let wrap = document.querySelector("#wrapper");
console.log(wrap);

let nekeDestinacije = document.querySelectorAll(".naziv");
console.log(nekeDestinacije);

let listaDestinacija = document.querySelector("#lista-destinacija");
console.log("roditelj ovog cvora je ", listaDestinacija.parentNode);

let listaDestinacija2 = document.querySelector("#lista-destinacija");
console.log("dete ovog cvora je: ", listaDestinacija2.children);

let listaDestinacija3 = document.querySelector("#lista-destinacija");
console.log("next isbling is ", listaDestinacija3.nextElementSibling);

let banner = document.querySelector("#page-banner");
console.log("banner node name is: ", banner.nodeName);

let destinacijaFrancuska = document.querySelector(".naziv");
destinacijaFrancuska.textContent="BEOGRAD";

var dugmici = document.querySelectorAll(".obrisi");

Array.from(dugmici).forEach(function(dugme){
    dugme.addEventListener("click", function(e){
        const li=e.target.parentNode;
        ul=li.parentNode;
        ul.removeChild(li);
    });
})

let forme = document.forms;
let forma1=document.forms["dodaj-destinaciju"];
console.log(forma1);