$(document).ready(function() {

/*
            console.dir(json.pictures[0].url);
            console.dir(json.pictures[0].id);
            console.dir(json.pictures[11].label);
            console.dir(json.pictures[0].alt);
            console.dir(json.pictures[0].title);

            */



    /*
            function bildausgabe () {
                var links = document.getElementById("#bild1").innerHTML;
                switch (links) {
                    case "Europäische Kurzhaar":
                        alert ("Es hat geklappt!");
                        break;
                    case "Arsch":
                        alert ( "Hallo Idiot!");
                        break;
                    default:
                        alert ("Sie haben nichts ausgewählt!");

                }

            };

    bildausgabe();

    */

    var auswahl = document.getElementById("bild1").innerHTML;
    var auswahl1 = document.getElementById("bild2").innerHTML;
    /* console.log(auswahl); */
    /*console.log(auswahl1); */

    var list = [document.getElementById("bild1").innerHTML, document.getElementById("bild2").innerHTML,
    document.getElementById("bild3").innerHTML, document.getElementById("bild4").innerHTML,
    document.getElementById("bild5").innerHTML, document.getElementById("bild6").innerHTML,
    document.getElementById("bild7").innerHTML, document.getElementById("bild8").innerHTML,
    document.getElementById("bild9").innerHTML, document.getElementById("bild10").innerHTML,
    document.getElementById("bild11").innerHTML, document.getElementById("bild12").innerHTML,
    document.getElementById("bild13").innerHTML, document.getElementById("bild14").innerHTML,
    document.getElementById("bild15").innerHTML, document.getElementById("bild16").innerHTML,
    document.getElementById("bild17").innerHTML, document.getElementById("bild18").innerHTML,
    document.getElementById("bild19").innerHTML, document.getElementById("bild20").innerHTML,
    document.getElementById("bild21").innerHTML, document.getElementById("bild22").innerHTML,
    document.getElementById("bild23").innerHTML, document.getElementById("bild24").innerHTML,
    document.getElementById("bild25").innerHTML, document.getElementById("bild26").innerHTML,
    document.getElementById("bild27").innerHTML, document.getElementById("bild28").innerHTML,
    ];

    console.log(list);

    $("#testbutton").on("click", function () {
        $("#bildausgabe").append(list[43]);
    })



});




/* $("button.rasse").on("click", function() {
    $("#bildausgabe").append(json.pictures[0].url);
}); */







  /*  document.getElementById("demo").innerHTML = text; */