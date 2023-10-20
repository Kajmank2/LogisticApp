   //funkcja licząca
   function oblicz() {
       //deklaracja zmiennych
       var dlugoscpalety = Number(document.getElementById("dlugoscpalety").value);
       var szerokoscpalety = Number(document.getElementById("szerokoscpalety").value);
       var wysokoscpalety=Number(document.getElementById("wysokoscpalety").value);
       var masapalety = Number(document.getElementById("masapalety").value);
       var dlugosckartonu = Number(document.getElementById("dlugosckartonu").value);
       var szerokosckartonu = Number(document.getElementById("szerokosckartonu").value);
       var wysokosckartonu = Number(document.getElementById("wysokosckartonu").value);
       var masakartonu = Number(document.getElementById("masakartonu").value);
       var maxwasrtw = Number(document.getElementById("maxwasrtw").value);
       var maxwysokosc = Number(document.getElementById("maxwysokosc").value);
       var maksobciazenie = Number(document.getElementById("maksobciazenie").value);
       var ladunek = Number(document.getElementById("ladunek").value);

       var opcja = document.querySelector('input[name="opcja"]:checked').value;

       if (opcja == 1) {
           var wartoscdlugosc = dlugoscpalety / dlugosckartonu;
           var wartoscszerokos = szerokoscpalety / szerokosckartonu;
           var wartosc =  Math.floor(wartoscdlugosc) * Math.floor(wartoscszerokos)
           var rezultat = " Na palecie zmieści się " + wartosc.toFixed(2) + " karton/ów"
           document.getElementById("rezultat").innerHTML = rezultat
       } else if (opcja == 2){
           var maxwysokoscladunku = maxwysokosc - wysokoscpalety;
           var wartosc = maxwysokoscladunku / wysokosckartonu
           var rezultat = "Ilość warstw jaką można ułożyć to:  " + Math.floor(wartosc)
       }
         else if (opcja == 3){
          // ilosc kartonow na jednej warstwie
          var wartoscdlugosc = dlugoscpalety / dlugosckartonu;
          var wartoscszerokos = szerokoscpalety / szerokosckartonu;
          var ilosckartonowjednawarstwa =  Math.floor(wartoscdlugosc) * Math.floor(wartoscszerokos)
          // ilosc warstw
          var maxwysokoscladunku = maxwysokosc - wysokoscpalety;
          var liczbwarstw = maxwysokoscladunku / wysokosckartonu
          //
          var wartosc = Math.floor(ilosckartonowjednawarstwa) * Math.floor(liczbwarstw)
          var rezultat = "Na jdenej palecie zmiesci się:  " + wartosc.toFixed(2)

       } else if (opcja == 4){

           var maxwysokoscladunku = maxwysokosc - wysokoscpalety;
           var liczbwarstw = maxwysokoscladunku / wysokosckartonu

           var wartosc = wysokoscpalety + Math.floor(liczbwarstw) * wysokosckartonu;
           var rezultat = "Wysokość palety z ładunkiem wynosi " + wartosc.toFixed(2) + " mm";

       } else if (opcja == 5){
          // ilosc kartonow na jednej warstwie
          var wartoscdlugosc = dlugoscpalety / dlugosckartonu;
          var wartoscszerokos = szerokoscpalety / szerokosckartonu;
          var ilosckartonowjednawarstwa =  Math.floor(wartoscdlugosc) * Math.floor(wartoscszerokos)
          // ilosc warstw
          var maxwysokoscladunku = maxwysokosc - wysokoscpalety;
          var liczbwarstw = maxwysokoscladunku / wysokosckartonu
          //ilosc kartonow
          var ilosckartonow = Math.floor(ilosckartonowjednawarstwa) * Math.floor(liczbwarstw)


          var wartosc = ilosckartonow * masakartonu + masapalety
          var rezultat = "Masa ładunku wraz z paletą wynosi<br> " + wartosc + " kg "

       } else if (opcja == 6){
           //wysokosc palety z ladunkiem
           var maxwysokoscladunku = maxwysokosc - wysokoscpalety;
           var liczbwarstw = maxwysokoscladunku / wysokosckartonu

           var wysokoscpaletyzladunkiem = wysokoscpalety + Math.floor(liczbwarstw) * wysokosckartonu;

           var wartosc= dlugoscpalety * szerokoscpalety * wysokoscpaletyzladunkiem / 1000000000
           var rezultat = "Objętość pełnej palety wynosi " + wartosc.toFixed(3)+ " m3"
       } else if (opcja == 7){
           // ilosc kartonow na jednej warstwie
          var wartoscdlugosc = dlugoscpalety / dlugosckartonu;
          var wartoscszerokos = szerokoscpalety / szerokosckartonu;
          var ilosckartonowjednawarstwa =  Math.floor(wartoscdlugosc) * Math.floor(wartoscszerokos)
          // ilosc warstw
          var maxwysokoscladunku = maxwysokosc - wysokoscpalety;
          var liczbwarstw = maxwysokoscladunku / wysokosckartonu
          //ilosc kartonow
          var ilosckartonow = Math.floor(ilosckartonowjednawarstwa) * Math.floor(liczbwarstw)

           var wartosc = ladunek / ilosckartonow
           var rezultat = "Ładnek stanowi " + wartosc + " palety"
        } else if (opcja == 8){
           //objetosc jednej palety
           var maxwysokoscladunku = maxwysokosc - wysokoscpalety;
           var liczbwarstw = maxwysokoscladunku / wysokosckartonu
           var wysokoscpaletyzladunkiem = wysokoscpalety + Math.floor(liczbwarstw) * wysokosckartonu;
           var objetoscjednejpalety= dlugoscpalety * szerokoscpalety * wysokoscpaletyzladunkiem / 1000000000

           var wartoscdlugosc = dlugoscpalety / dlugosckartonu;
           var wartoscszerokos = szerokoscpalety / szerokosckartonu;
           var ilosckartonowjednawarstwa =  Math.floor(wartoscdlugosc) * Math.floor(wartoscszerokos)

           var maxwysokoscladunku = maxwysokosc - wysokoscpalety;
           var liczbwarstw = maxwysokoscladunku / wysokosckartonu
           var ilosckartonow = Math.floor(ilosckartonowjednawarstwa) * Math.floor(liczbwarstw)

           var liczbapalet = ladunek / ilosckartonow


           var wartosc = objetoscjednejpalety.toFixed(2) * liczbapalet;
           var rezultat = "Objętość całego ładunku wynosi  " + wartosc + "m3";
        }
       document.getElementById("rezultat").innerHTML = rezultat;
   }