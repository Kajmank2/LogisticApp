//funkcja licząca
function oblicz() {

    var srednieSpalanie = Number(document.getElementById("srednieSpalanie").value);
    var iloscKM = Number(document.getElementById("iloscKM").value);
    var cena = Number(document.getElementById("cena").value);
    var dodatkoweKoszty = Number(document.getElementById("dodatkoweKoszty").value);


    if(!iloscKM){
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

    console.log(iloscKM);


    var wynik = ((srednieSpalanie * iloscKM)/100) * cena + dodatkoweKoszty;
    var rezultat = "koszty za przejazd wyniosą: " + wynik.toFixed(2) + "Zł";
    document.getElementById("rezultat").innerHTML = rezultat;


}