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

    if(!wartosc){
        setTimeout(() => {
            require.style.display='none';
            priceElement.style.border = "";
        }, 1500);
        const btngroup = document.querySelector(".btn-toolbar");
        const require = document.createElement("p");
        require.classList.add("alert");
        require.style.color = "red";
        require.innerHTML="nieprawidłowy format";
        btngroup.appendChild(require);
        const priceElement = document.querySelector("#wartosc");
        priceElement.style.border = "4px solid red";

    }

    console.log(stawkavat);
    if (input) {

        stawkavat = Number(input);
        if(stawkavat<0 || stawkavat>100){
            setTimeout(() => {
                require.style.display='none';
            }, 1500);
            const btngroup = document.querySelector(".btn-group");
            const require = document.createElement("p");
            require.classList.add("alert");
            require.style.color = "red";
            require.innerHTML="wpisz wartość od 0 do 100";
            btngroup.appendChild(require);

        }
        stawkavat = Number(input) / 100;
        document.querySelector("#inputValue").value = null;
    }

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