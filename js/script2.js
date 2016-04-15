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

    /* console.log(auswahl); */
    /*console.log(auswahl1); */

    var list = [
    document.getElementById("bild29").innerHTML, document.getElementById("bild30").innerHTML,
    document.getElementById("bild31").innerHTML, document.getElementById("bild32").innerHTML,
    document.getElementById("bild33").innerHTML, document.getElementById("bild34").innerHTML,
    document.getElementById("bild35").innerHTML, document.getElementById("bild36").innerHTML,
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