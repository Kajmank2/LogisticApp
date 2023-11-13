//funkcja licząca
function oblicz() {

    var srednieSpalanie = Number(document.getElementById("srednieSpalanie").value);
    var iloscKM = Number(document.getElementById("iloscKM").value);
    var cena = Number(document.getElementById("cena").value);
    var dodatkoweKoszty = Number(document.getElementById("dodatkoweKoszty").value);

    var wynik = ((srednieSpalanie * iloscKM)/100) * cena + dodatkoweKoszty;
    var rezultat = "Koszty za przejazd wyniosą: " + wynik.toFixed(2) + "Zł";
    document.getElementById("rezultat").innerHTML = rezultat;

}