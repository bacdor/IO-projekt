class Koszyk {
    constructor(listaProduktow) {
        this.listaProduktow = listaProduktow;

    }
}

class Produkt {
    constructor(nazwa, kolor, rozmiar, cena) {
        this.nazwa = nazwa;
        this.kolor = kolor;
        this.rozmiar = rozmiar;
        this.cena = cena;        
         
    }
}


wyszukaj_produkt = function(){
    produkt = new Produkt();


    if(document.getElementById('koszulka').checked) {
        produkt.nazwa = "koszulka";
        produkt.cena = 50;
    }else if(document.getElementById('spodnie').checked) {
        produkt.nazwa = "spodnie";
        produkt.cena = 100;
    }else{
        produkt.nazwa = "skarpetki";
        produkt.cena = 20;
    }

    if(document.getElementById('czerwony').checked) {
        produkt.kolor = "czerwony";
        produkt.cena += 5;
    }else if(document.getElementById('niebieski').checked) {
        produkt.kolor = "niebieski";
        produkt.cena += 2;
    }else{
        produkt.kolor = "zielony";
        produkt.cena -= 3;
    }

    if(document.getElementById('large').checked) {
        produkt.rozmiar = "L";
        produkt.cena *= 1.02;
    }else if(document.getElementById('medium').checked) {
        produkt.rozmiar = "M";
    }else{
        produkt.rozmiar = "S";
        produkt.cena *= 1.05;
    }

    document.getElementById('wyszukany_produkt').textContent = produkt.nazwa + ", rozmiar: " + produkt.rozmiar + ", kolor: ";
    document.getElementById('wyszukany_produkt').textContent += produkt.kolor + "-- CENA: " + produkt.cena + " zł";

    console.log(produkt.nazwa);
    console.log(produkt.kolor);
    console.log(produkt.rozmiar);
    console.log(produkt.cena);
 }

main = function() {
    koszyk = new Koszyk();
}
