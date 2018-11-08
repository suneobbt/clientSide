/*Exercici 1*/
function exercici1() {

    var valor_enter = 50;
    var valor_decimal = 50.0;
    var valor_cientific = 5e1;
    var valor_octal = 0o62;
    var valor_hexadecimal = 0x32;
    document.getElementById("e1").innerHTML = ("Enter = " + valor_enter +
        "<br/>Decimal = " + valor_decimal +
        "<br/>Cientific = " + valor_cientific +
        "<br/>Octal = " + valor_octal +
        "<br/>Hexadecimal = " + valor_hexadecimal);
}

/*Exercici 2*/
function exercici2() {
    var cadena1 = "Hola";
    var cadena2 = "7";
    var cadena3 = "13";
    var cadena4 = "Adeu";

    alert("Hola \'humano\'!");
    alert(cadena1 + "\n" + cadena4);
    alert(parseInt(cadena2) + parseInt(cadena3));
    alert(cadena1 + cadena2 + cadena3 + cadena4);
}

/*Exercici 3*/
function exercici3() {
    var operacio1 = 10 == 10;
    var operacio4 = 10 === 10.0;
    var operacio7 = 10 === 10;

    var operacio2 = "Laura" == "laura";
    var operacio5 = "Laura" > "laura";
    var operacio8 = "Laura" < "laura";

    var operacio3 = "123" == 123;
    var operacio6 = "123" === 123;
    var operacio9 = parseInt("123") === 123;

    alert("L\'operació 10 == 10 és " + operacio1);
    alert("L\'operació 10 === 10.0 és " + operacio4);
    alert("L\'operació 10 === 10; és " + operacio7);

    alert("L\'operació \"Laura\" == \"laura\" és " + operacio2);
    alert("L\'operació \"Laura\" > \"laura\" és " + operacio5);
    alert("L\'operació \"Laura\" < \"laura\"; és " + operacio8);

    alert("L\'operació \"123\"==123 és " + operacio3);
    alert("L\'operació \"123\"===123; és " + operacio6);
    alert("L\'operació parseInt(\"123\") === 123 és " + operacio9);
}

/**Exercici 4*/

function exercici4() {
    var resposta = prompt("Quina edat tens?");
    if (resposta < 0) {
        alert("No pots tenir anys negatius, ho sento.");
    } else if (resposta > -1 && resposta < 13) {
        alert("Ets un nene-nena");
    } else if (resposta > 12 && resposta < 27) {
        alert("Ets un jovensuelo-jovensuela");
    } else if (resposta > 25 && resposta < 61) {
        alert("Et fas vell-vella");
    } else if (resposta > 59) {
        alert("Ets un vell, una vella");
    } else {
        alert("Torna a provar");
    }
}

/**Exercici 5*/

function exercici5() {
    var increment = 0;
    var hores, minuts;
    var cadena = "";

    for (i = 0; i < 26; i++) {
        date = new Date('October 30, 2018 09:00:00');
        date.setMinutes(increment);

        hores = date.getHours();
        minuts = date.getMinutes();

        if (minuts < 10) {
            minuts = '0' + minuts
        }

        cadena = cadena + (hores + ":" + minuts + ", ");

        increment = increment + 30;
    }
    document.getElementById("e5").innerHTML = (cadena);
}

/**Exercici 6*/
function exercici6() {
    var increment = 0;
    var hores, minuts;
    var cadena = "";

    for (i = 0; i < 145; i++) {
        date = new Date('October 30, 2018 09:00:00');
        date.setMinutes(increment);

        hores = date.getHours();
        minuts = date.getMinutes();

        if (minuts < 10) {
            minuts = '0' + minuts
        }

        cadena = cadena + (hores + ":" + minuts + ", ");

        increment = increment + 5;
    }
    document.getElementById("e6").innerHTML = (cadena);
}

/**Exercici 7*/
function exercici7() {
    var resposta;
    while (resposta != "Musk") {
        resposta = prompt("Cognom fundador de SpaceX?");
    }
    alert("Iuhu!");
}

/**Exercici 8*/
function exercici8() {
    var resposta;
    var resultat = ["Elon", "Musk"];
    var centinel = false;

    while (centinel != true) {
        resposta = prompt("Fundador de SpaceX?");
        paraules = resposta.split(' ');

        if (paraules[0] == resultat[0] && paraules[1] == resultat[1]) {
            alert("Iuhu");
            centinel = true;
        } else if (paraules[0] == resultat[0]) {
            alert("Falta el cognom");
        } else {
            if (paraules[1] == resultat[1]) {
                alert("Falta el nom");
            } else {
                alert("ERROR, intenta un altre cop, manco!");
            }
        }
    }
}

/**Exercici 9*/

function exercici9() {
    var resposta = prompt("Quina edat tens?");
    resposta = Number(resposta);

    switch (true) {
        case (resposta > -1 && resposta < 13):
            alert("Ets un nene-nena");
            break;
        case (resposta > 12 && resposta < 27):
            alert("Ets un jovensuelo-jovensuela");
            break;
        case (resposta > 25 && resposta < 61):
            alert("Et fas vell-vella");
            break;
        case (resposta > 60):
            alert("Ets un vell, una vella");
            break;
        default:
            alert("Torna a provar");
    }

}


/**Exercici final*/
function exercicif() {
    var abecedari = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var resposta = prompt("Número dni?");
    num = Number(resposta) % 23;

    if (resposta.length != 8 || isNaN(num)) {
        alert("Número incorrecte");
    } else {
        alert("La lletra és: " + abecedari[num]);
    }
}

/**Exercici final 2*/
var resposta = "";

function exercicif2(valor) {
    resposta = resposta + valor;
    document.getElementById("ef2").innerHTML = (resposta);
}

function exercicif222(valor) {
    resposta = "";
    document.getElementById("ef2").innerHTML = (".");
}

function exercicif22() {
    var abecedari = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    num = Number(resposta) % 23;

    if (resposta.length != 8) {
        alert("Número incorrecte");
    } else {
        resposta = resposta + abecedari[num];
        document.getElementById("ef2").innerHTML = (resposta);
        alert("La lletra és: " + abecedari[num]);

    }
}


