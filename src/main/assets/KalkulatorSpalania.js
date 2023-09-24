//funkcja licząca
function oblicz() {

    var spalonePaliwo = Number(document.getElementById("spalonePaliwo").value);
    var iloscKM = Number(document.getElementById("iloscKM").value);
    var cena = Number(document.getElementById("Cena").value);

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

    if(!spalonePaliwo){
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

    var wynik = spalonePaliwo / iloscKM * 100
    var rezultat = "Spalanie wyniesie: " + wynik.toFixed(2) + "L"
    document.getElementById("rezultat").innerHTML = rezultat

    var kosztjeden= spalonePaliwo / iloscKM * 100;
    var kosztcalkowity = cena * S
    var rezultatCena = "Cena za przejazd wyniesie " + kosztcalkowity.toFixed(2) + "ZŁ"
        document.getElementById("rezultatCena").innerHTML = rezultatCena
}