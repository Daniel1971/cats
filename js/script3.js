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
    document.getElementById("bild37").innerHTML, document.getElementById("bild38").innerHTML,
    document.getElementById("bild39").innerHTML, document.getElementById("bild40").innerHTML,
    document.getElementById("bild41").innerHTML, document.getElementById("bild42").innerHTML,
    document.getElementById("bild43").innerHTML, document.getElementById("bild44").innerHTML,
    document.getElementById("bild45").innerHTML, document.getElementById("bild46").innerHTML,
    document.getElementById("bild47")];

    console.log(list);

    $("#testbutton").on("click", function () {
        $("#bildausgabe").append(list[43]);
    })



});




/* $("button.rasse").on("click", function() {
    $("#bildausgabe").append(json.pictures[0].url);
}); */







  /*  document.getElementById("demo").innerHTML = text; */