function calculate() {
    const größe = Number(document.getElementById("größe").value);
    const alter = Number(document.getElementById("alter").value);
    const gewicht = Number(document.getElementById("gewicht").value);
    console.log(gewicht);
    const geschlecht = document.getElementById("männlich").checked ? "männlich" : "weiblich";
        
    let aktivität = Number(document.getElementById("aktivität").value);

    let grundumsatz;
    if (geschlecht === "männlich") {
      grundumsatz = 66.47 + (13.7 * gewicht) + (5 * größe) - (6.8 * alter);
    } else {
      grundumsatz = 655.1 + (9.6 * gewicht) + (1.8 * größe) - (4.7 * alter);
    }
  
    const gesamtumsatz = grundumsatz * aktivität;
  
    document.querySelector(".grundKcal").innerHTML = grundumsatz.toFixed();
    document.querySelector(".gesamtKcal").innerHTML = gesamtumsatz.toFixed();
    document.querySelector(".grundKj").innerHTML = (grundumsatz * 4.184).toFixed();
    document.querySelector(".gesamtKj").innerHTML = (gesamtumsatz * 4.184).toFixed();
}
