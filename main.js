


class Produkt {
    constructor(nazwa, kolor, rozmiar, cena) {
        this.nazwa = nazwa;
        this.kolor = kolor;
        this.rozmiar = rozmiar;
        this.cena = cena;
        this.wybierz_rozmiar = function (){

        document.getElementById('rozmiar').innerHTML = "Wybierz rozmiar: ";
        
        
            
         }
         this.wybierz_kolor = function(){

         }
         this.wyszukaj_produkty = function(){

         }
    }
}


test = function(){
   produkt1 = new Produkt('koszulka','czarny');
   produkt1.wybierz_rozmiar();

}


