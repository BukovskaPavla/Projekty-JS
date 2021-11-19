/*
Tvým úkolem je vytvořit tzv. "soundboard".
Aplikaci, která při stisku kláves 1-6 přehraje zvuk
příslušného zvířátka a zvýrazní dané zvíře na obrazovce.

V CSS je připravená třída "hraje" - když ji při stisku
klávesy (onkeydown) přidáš JavaScriptem na <div>,
který má v HTML ID "zvire-x" (kde x je číslo zvířete 1-6),
zvířátko se hezky zvýrazní.

Zároveň přehraj zvuk z <audio> elementu, který má v HTML
ID "zvuk-x" (kde x je opět číslo zvířete).

Při uvolnění klávesy (onkeyup) třídu ze zvířátka opět odeber,
ať nezůstane zvýrazněné.

Když budeš mít vše hotové a budeš chtít procvičovat dál, buď
kreativní a vymysli si vlastní obrázky nebo zvuky. Zkusíš třeba
udělat piáno?
*/

let zvire1 = document.querySelector("#zvire-1");
let zvire2 = document.querySelector("#zvire-2");
let zvire3 = document.querySelector("#zvire-3");
let zvire4 = document.querySelector("#zvire-4");
let zvire5 = document.querySelector("#zvire-5");
let zvire6 = document.querySelector("#zvire-6");

let audio1 = document.querySelector("#zvuk-1");
let audio2 = document.querySelector("#zvuk-2");
let audio3 = document.querySelector("#zvuk-3");
let audio4 = document.querySelector("#zvuk-4");
let audio5 = document.querySelector("#zvuk-5");
let audio6 = document.querySelector("#zvuk-6");

let body = document.querySelector("body")
body.addEventListener("keydown",priKliknuti)

function priKliknuti(){
    
    (zvire+"cisloZvirete").classList.add("hraje")
    (audio+"cisloZvirete").play()
    setTimeout(() => { (zvire+"cisloZvirete").classList.remove("hraje") ; }, 3000);
}

/*
zvire1.addEventListener("click", priKliknuti1)
zvire2.addEventListener("click", priKliknuti2)
zvire3.addEventListener("click", priKliknuti3)
zvire4.addEventListener("click", priKliknuti4)
zvire5.addEventListener("click", priKliknuti5)
zvire6.addEventListener("click", priKliknuti6)


function priKliknuti1(){
    zvire1.classList.add("hraje")
    audio1.play()
    setTimeout(() => { zvire1.classList.remove("hraje") ; }, 3000);
}
function priKliknuti2(){
    zvire2.classList.toggle("hraje")
    audio2.play()
    setTimeout(() => { zvire2.classList.remove("hraje") ; }, 3000);
}
function priKliknuti3(){
    zvire3.classList.toggle("hraje")
    audio3.play()
    setTimeout(() => { zvire3.classList.remove("hraje") ; }, 3000);
}
function priKliknuti4(){
    zvire4.classList.toggle("hraje")
    audio4.play()
    setTimeout(() => { zvire4.classList.remove("hraje") ; }, 3000);
}
function priKliknuti5(){
    zvire5.classList.toggle("hraje")
    audio5.play()
    setTimeout(() => { zvire5.classList.remove("hraje") ; }, 3000);
}
function priKliknuti6(){
    zvire6.classList.toggle("hraje")
    audio6.play()
    setTimeout(() => { zvire6.classList.remove("hraje") ; }, 3000);
}



window.addEventListener('keydown', function(udalost) {
    if (udalost.key === "1"){
        priKliknuti1()
    } else if (udalost.key === "2"){
        priKliknuti2()
    }
    else if (udalost.key === "3"){
        priKliknuti3()
    }
    else if (udalost.key === "4"){
        priKliknuti4()
    }
    else if (udalost.key === "5"){
        priKliknuti5()
    }
    else if (udalost.key === "6"){
        priKliknuti6()
    }
})

*/