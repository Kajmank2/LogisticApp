//funkcja licząca
function oblicz() {

    var spalonePaliwo = Number(document.getElementById("spalonePaliwo").value);
    var iloscKM = Number(document.getElementById("iloscKM").value);
    var cena = Number(document.getElementById("Cena").value);


    var wynik = spalonePaliwo / iloscKM * 100
    var rezultat = "Spalanie na 100 kilometrów wyniesie: " + wynik.toFixed(2) + "L"
    document.getElementById("rezultat").innerHTML = rezultat

    var kosztjeden= spalonePaliwo / iloscKM * 100;
    var kosztcalkowity = cena * spalonePaliwo
    var rezultatCena = "Cena za przejazd wyniesie " + kosztcalkowity.toFixed(2) + "ZŁ"
        document.getElementById("rezultatCena").innerHTML = rezultatCena
}