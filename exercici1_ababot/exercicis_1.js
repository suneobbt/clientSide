/**Exercici 1*/
function exercici1() {
    var resposta = prompt("Número?");
    var num = Number(resposta);
    var result = "";

    for (i = 0; i < 11; i++) {
        result = result + num + " x " + i + " = " + num * i + "</br>"
    }
    document.getElementById("e1").innerHTML = (result);
}


/**Exercici 2*/
function exercici2() {
    var nom = "Javascript";
    var result = "";

    for (i = 1; i < 7; i++) {
        result = result + "<h" + i + ">" + nom + "</" + i + "h>";

    }
    document.getElementById("e2").innerHTML = (result);
}


/**Exercici 3*/
function exercici3() {
    var num = prompt("Número?");
    var cadena = "";
    var result = 1;

    for (num; num > 0; num--) {
        result = result * num;
        cadena = cadena + num;
        if (num != 1) {
            cadena = cadena + " x ";
        }
    }
    document.getElementById("e3").innerHTML = (cadena + " = " + result);
}


/**Exercici 4*/
function exercici4() {
    var cadena = prompt("Escriu una frase.");
    var valor = 0;

    cadena = cadena.replace(/ /g, ''); // elimina tots els espais

    for (var i = 0; i < cadena.length; i++) {
        var lletra = cadena.charAt(i);

        if (lletra === lletra.toUpperCase()) {
            valor = valor + 1;
        }
    }

    if (valor === 0) {
        document.getElementById("e4").innerHTML = ("Tot són minúscules");
    } else if (valor === cadena.length) {
        document.getElementById("e4").innerHTML = ("Tot són majúscules");
    } else {
        document.getElementById("e4").innerHTML = ("Hi ha majúscules i minúscules");
    }
}


/**Exercici 5*/
function exercici5() {
    var cadena = prompt("Escriu una frase.").split(' ');
    var result1 = "Hi ha un total de " + cadena.length + " paraules";
    var result2 = "La primera paraula és: " + cadena[0] + " i l'última: " + cadena[cadena.length - 1];
    var result3 = "Les paraules en ordre invers: " + cadena.reverse().join(' ');
    var result4 = "Les paraules en ordre abecedari: " + cadena.sort().join(' ');
    var result5 = "Les paraules en ordre invers a l'abecedari: " + cadena.sort().reverse().join(' ');

    document.getElementById("e5").innerHTML = (result1 + ".</br>" + result2 + ".</br>" + result3 + ".</br>" + result4 + ".</br>" + result5);
}


/**Exercici 6*/
function exercici6() {
    var mesos = ['Gener', ' Febrer', ' Març', ' Abril', ' Maig', ' Juny', ' Juliol', ' Agost', ' Setembre', ' Octubre', ' Novembre', ' Desembre'];
    for (var i = 0; i < 12; i++) {
        alert(mesos[i]);
    }
}


/**Exercici 7*/
function exercici7() {
    var num = Number(prompt("Escriu un nombre i sabràs si és parell o senars"));
    if (num % 2 === 0) {
        document.getElementById("e7").innerHTML = ("És parell!");
    } else {
        document.getElementById("e7").innerHTML = ("És senar!");
    }
}


/**Exercici 8*/
function exercici8() {
    var cadena = (prompt("Escriu una frase i sabràs si és palíndrom.")).toLowerCase();
    cadena = cadena.replace(/ /g, ''); // elimina tots els espais
    var cadenaRev = cadena.split("").reverse().join("");

    if (cadenaRev === cadena) {
        document.getElementById("e8").innerHTML = ("És palíndrom!");
    } else {
        document.getElementById("e8").innerHTML = ("No és palíndrom!");
    }

}

/**Exercici 9*/
function exercici9() {

}


