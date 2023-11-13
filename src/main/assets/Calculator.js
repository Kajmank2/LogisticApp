var buttons = document.getElementsByClassName("myButton");
var stawkavat;

// 17,18,23
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var buttonValue = this.value;
        stawkavat = Number(buttonValue);
        console.log(typeof (stawkavat));
    });
}
//funkcja licząca
function oblicz() {

    var input = Number(document.querySelector("#inputValue").value);
    var wartosc = Number(document.getElementById("wartosc").value);

    var opcja = document.querySelector('input[name="opcja"]:checked').value;

    if (opcja == 1) {
        var brutto = wartosc / Number(1 + stawkavat);
        var wartosc_calkowita = wartosc - brutto;
        var rezultat = " Wartość: " + wartosc + " <br>VAT " + wartosc_calkowita.toFixed(2) +
            "<br><hr> Całkowita wartość: " + brutto.toFixed(2) + "zł";
    } else {
        var netto = wartosc * Number(stawkavat);
        var wartosc_calkowita = wartosc + netto;
        var rezultat = "Wartość " + wartosc + " ₺ <br>VAT " + netto
            .toFixed(2) + "<br><hr>Całkowita wartość: " + wartosc_calkowita.toFixed(2)+ "zł";
    }

    document.getElementById("rezultat").innerHTML = rezultat;
}