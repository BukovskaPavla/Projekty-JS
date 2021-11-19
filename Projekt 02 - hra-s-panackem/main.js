// toto budeš potřebovat později - prekryvani panacka s minci!
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


//odchytávání prvků z html
let panacek = document.querySelector("#panacek")
let mince = document.querySelector("#mince")
let obrazekPanacek = document.querySelector("#panacek")
let hudba = document.querySelector("#hudba")
let zvukMince = document.querySelector("#zvukmince")
let zvukFanfara = document.querySelector("#zvukfanfara")
let zvukAuvajs = document.querySelector("#zvukAuvajs")
let zvukKlic = document.querySelector("#zvukKlic")
let zloduch = document.querySelector("#zloduch")
let drahokam = document.querySelector("#drahokam")

//velikost panacka
let panacekSirka =  64
let panacekVyska =  70
let panacekX = ((window.innerWidth / 2) - panacekSirka)
let panacekY = ((window.innerHeight / 2) - panacekVyska)

//velikost mince
let minceX = 0
let minceY = 0
let minceSirka = 36
let minceVyska = 36

//nastaveni pocitadla na mince
let score = document.querySelector("#score")
let body = 0
score.innerHTML = body

// velikost zloducha
let zloduchX = 0
let zloduchY = 0
let zloduchSirka = 51
let zloduchVyska = 51

//nastaveni pocitadla na odebirani zivotu po stretu se zloduchem
let zivoty = document.querySelector("#zivoty")
let srdicka = 5

//velikost drahokamu
let drahokamX = 0
let drahokamY = 0
let drahokamSirka = 34
let drahokamVyska = 24

//nastaveni pocitalda na drahokami
let scoreDrahokamu = document.querySelector("#scoreDrahokamu")
let bohatstvi = 0
scoreDrahokamu.innerHTML = bohatstvi

//start hry - nejprve umisti panacka, minci, zloducka a drahokam a pak cekej az hrac stiskne klavesu.
//podle toho jakou klavesu stiskne tak se pohybuje panacek. Funkce hra() pak vyhodnoti jestli doslo ke 
//stretu panacka a nejakeho herniho prvku.
umistiPanacka()
umistiMinci()
umistiZloducha()
nahodneUmistiDrahokam()
addEventListener("keydown", priStiskuKlavesy)
hra()

function hra(){
	
	// panacek a mince se prekryvaji
	//vola funkci na zvyseni skore minci a nove vygenerovani mince
	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
		zvukMince.play()
		zvysScore()
		umistiMinci ()
		}

	// panacek a zloduch se prekryvaji
	//vola funkci na snizeni srdicek=zivotu a nove vygenerovani padoucha
	if (!( panacekX + panacekSirka < zloduchX || zloduchX + zloduchSirka < panacekX || panacekY + panacekVyska < zloduchY || zloduchY + zloduchVyska < panacekY)) {
		zvukAuvajs.play()
		snizZivoty()
		umistiZloducha()
	}

	// panacek a drahokam se prekryvaji
	//vola funkci na zvyseni skore drahokamu a nove vygenerovani drahokamu
	if (!( panacekX + panacekSirka < drahokamX || drahokamX + drahokamSirka < panacekX || panacekY + panacekVyska < drahokamY || drahokamY + drahokamVyska < panacekY)) {
		zvukKlic.play()
		zvysPocetDrahokamu()
		nahodneUmistiDrahokam()
	}
}

//zvysovani poctu minci - kdyz hrac ziska dany pocet minci, vyskoci okno s vyhrou, zahraje fanfara a vynuluje se hra
function zvysScore(){
	body = body + 1
	score.innerHTML = body
	if (body == 2) {
		zvukFanfara.play()
		score.innerHTML = body
		
		alert("Jabadabadůůůů máš "+ body +" mincí! Pojď hrát znova!")
		vynulovani()
	}
}


//snizovani mnozstvi zivotu - kdyz hrac ztrati dany pocet zivotu, vyskoci okno s prohrou a vynuluje se hra
function snizZivoty(){
	srdicka = srdicka - 1
	zivoty.src="obrazky/srdce-"+srdicka+".png"
	if (srdicka == 0) {
		zivoty.src="obrazky/srdce-"+srdicka+".png"
		zvukAuvajs.play()
		alert("Jejda! Umřel jsi. Máš přesně "+ srdicka +" životů! Zkus to znova")
		vynulovani()
	}
}

//zvysovani poctu drahokamu - kdyz hrac ziska dany pocet drahokamu, vyskoci okno s vyhrou, zahraje fanfara a vynuluje se hra
function zvysPocetDrahokamu(){
	bohatstvi = bohatstvi + 1
	scoreDrahokamu.innerHTML = bohatstvi
	if (bohatstvi == 5) {
		zvukFanfara.play()
		alert("Jabadabadůůůů máš "+ bohatstvi +" drahokamů! Pojď hrát znova!")
		vynulovani()
	}
}

//umisteni panacka na stred obrazovky
function umistiPanacka(){
	panacek.style.left =  panacekX + "px"
	panacek.style.top =  panacekY + "px"	
}

//nahodne umisteni mince
function umistiMinci(){
	minceX = Math.floor(Math.random()*(window.innerWidth - minceSirka))
	minceY = Math.floor(Math.random()*(window.innerHeight - minceVyska))
	mince.style.left = minceX + "px"
	mince.style.top = minceY + "px"
}

//nahodne umisteni zloducha
function umistiZloducha(){
	zloduchX = Math.floor(Math.random()*(window.innerWidth - zloduchSirka))
	zloduchY = Math.floor(Math.random()*(window.innerHeight - zloduchVyska))
	zloduch.style.left = zloduchX + "px"
	zloduch.style.top = zloduchY + "px"
}

//nahodne umisteni drahokamu 
function umistiDrahokam(){
	drahokamX = Math.floor(Math.random()*(window.innerWidth - drahokamSirka))
	drahokamY = Math.floor(Math.random()*(window.innerHeight - drahokamVyska))
	drahokam.style.left = drahokamX + "px"
	drahokam.style.top = drahokamY + "px"
}

//funkce, ktera odchytava stisk klaves se sipakama a podle toho pohybuje panackem
function priStiskuKlavesy(udalost) {
	hudba.play()
	hra()
	if (udalost.key === 'ArrowRight') {
		panacekX = panacekX + 20;
		if (panacekX > window.innerWidth - panacekVyska){
			panacekX = window.innerWidth - panacekVyska
		}
		obrazekPanacek.src = "obrazky/panacek-vpravo.png" 
		
	}

	if (udalost.key === 'ArrowLeft') {
		panacekX = panacekX - 20;
		if (panacekX <0) {
			panacekX = 0
		}
		obrazekPanacek.src = "obrazky/panacek-vlevo.png"
	}

	if (udalost.key === 'ArrowDown') {
		panacekY = panacekY + 20;
		if (panacekY > window.innerHeight - panacekVyska){
			panacekY = window.innerHeight - panacekVyska
		}
		obrazekPanacek.src = "obrazky/panacek.png"
	}

	if (udalost.key === 'ArrowUp') {
		panacekY = panacekY - 20;
		if (panacekY < 0 ){
			panacekY = 0
		}
		obrazekPanacek.src = "obrazky/panacek-nahoru.png"

	}
	umistiPanacka();
}

//vynulovani pocitadel pro minci, diamant a doplneni zivotu
function vynulovani(){
	body = 0
	score.innerHTML = body
	srdicka = 5
	zivoty.src="obrazky/srdce-"+srdicka+".png"
	bohatstvi = 0
	scoreDrahokamu.innerHTML = bohatstvi
	
}

//nahodne zjevovani diamantu v case
function nahodneUmistiDrahokam() {
	umistiDrahokam();
	setTimeout(nahodneUmistiDrahokam, Math.random() * 12000)
  }
