$(document).ready(function () {


    function bildausgabe() {

        var jsonURL = "data/data.json";
        $.getJSON(jsonURL, function (json) {
            var imgList = [];

            $.each(json.pictures, function () {

                imgList += '<img src= "' + this.url + '" style="width: 244px; height: 211px;">';


            });


            /* Bildausgabe auf Klick*/

            $("button").on("click", function () {
                switch (this.id) {

                    case "bild1":
                        $("#sprungziel").empty();
                        var auswahl = '<img src= "' + json.pictures[0].url + '" alt="' + json.pictures[0].alt + '" title="' + json.pictures[0].title + '">';
                        $("#sprungziel").append(auswahl).text("Drehen Sie mich!");
                        break;
                    case "bild2":
                        $("#sprungziel").empty();
                        var auswahl = '<img src= "' + json.pictures[1].url + '" alt="' + json.pictures[1].alt + '" title="' + json.pictures[1].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild3":
                        $("#sprungziel").empty();
                        var auswahl = '<img src= "' + json.pictures[2].url + '" alt="' + json.pictures[2].alt + '" title="' + json.pictures[2].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild4":
                        $("#sprungziel").empty();
                        var auswahl = '<img src= "' + json.pictures[3].url + '" alt="' + json.pictures[3].alt + '" title="' + json.pictures[3].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild5":
                        $("#sprungziel").empty();
                        var auswahl = '<img src= "' + json.pictures[4].url + '" alt="' + json.pictures[4].alt + '" title="' + json.pictures[4].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild6":
                        $("#sprungziel").empty();
                        var auswahl = '<img src= "' + json.pictures[5].url + '" alt="' + json.pictures[5].alt + '" title="' + json.pictures[5].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild7":
                        $("#sprungziel").empty();
                        var auswahl = '<img src= "' + json.pictures[6].url + '" alt="' + json.pictures[6].alt + '" title="' + json.pictures[6].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild8":
                        $("#sprungziel").empty();
                        var auswahl = '<img src= "' + json.pictures[7].url + '" alt="' + json.pictures[7].alt + '" title="' + json.pictures[7].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild9":
                        $("#sprungziel").empty();
                        var auswahl = '<img src= "' + json.pictures[8].url + '" alt="' + json.pictures[8].alt + '" title="' + json.pictures[8].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild10":
                        $("#sprungziel").empty();
                        var auswahl = '<img src= "' + json.pictures[9].url + '" alt="' + json.pictures[9].alt + '" title="' + json.pictures[9].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild11":
                        $("#sprungziel").empty();
                        var auswahl = '<img src= "' + json.pictures[10].url + '" alt="' + json.pictures[10].alt + '" title="' + json.pictures[10].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild12":
                        $("#sprungziel").empty();
                        var auswahl = '<img src= "' + json.pictures[11].url + '" alt="' + json.pictures[11].alt + '" title="' + json.pictures[11].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild13":
                        $("#sprungziel").empty();
                        var auswahl = '<img src= "' + json.pictures[12].url + '" alt="' + json.pictures[12].alt + '" title="' + json.pictures[12].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild14":
                        $("#sprungziel").empty();
                        var auswahl = '<img src= "' + json.pictures[13].url + '" alt="' + json.pictures[13].alt + '" title="' + json.pictures[13].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild15":
                        $("#sprungziel").empty();
                        var auswahl = '<img src= "' + json.pictures[14].url + '" alt="' + json.pictures[14].alt + '" title="' + json.pictures[14].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild16":
                        $("#sprungziel").empty();
                        var auswahl = '<img src= "' + json.pictures[15].url + '" alt="' + json.pictures[15].alt + '" title="' + json.pictures[15].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild17":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[16].url + '" alt="' + json.pictures[16].alt + '" title="' + json.pictures[16].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild18":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[17].url + '" alt="' + json.pictures[17].alt + '" title="' + json.pictures[17].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild19":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[18].url + '" alt="' + json.pictures[18].alt + '" title="' + json.pictures[18].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild20":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[19].url + '" alt="' + json.pictures[19].alt + '" title="' + json.pictures[19].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild21":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[20].url + '" alt="' + json.pictures[20].alt + '" title="' + json.pictures[20].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild22":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[21].url + '" alt="' + json.pictures[21].alt + '" title="' + json.pictures[21].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild23":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[22].url + '" alt="' + json.pictures[22].alt + '" title="' + json.pictures[22].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild24":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[23].url + '" alt="' + json.pictures[23].alt + '" title="' + json.pictures[23].title + '">';
                        break;
                    case "bild25":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[23].url + '" alt="' + json.pictures[23].alt + '" title="' + json.pictures[23].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild26":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[24].url + '" alt="' + json.pictures[24].alt + '" title="' + json.pictures[24].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild27":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[25].url + '" alt="' + json.pictures[25].alt + '" title="' + json.pictures[25].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild28":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[26].url + '" alt="' + json.pictures[26].alt + '" title="' + json.pictures[26].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild29":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[27].url + '" alt="' + json.pictures[27].alt + '" title="' + json.pictures[27].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild30":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[28].url + '" alt="' + json.pictures[28].alt + '" title="' + json.pictures[28].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild31":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[29].url + '" alt="' + json.pictures[29].alt + '" title="' + json.pictures[29].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild32":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[30].url + '" alt="' + json.pictures[30].alt + '" title="' + json.pictures[30].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild33":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[31].url + '" alt="' + json.pictures[31].alt + '" title="' + json.pictures[31].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild34":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[32].url + '" alt="' + json.pictures[32].alt + '" title="' + json.pictures[32].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild35":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[33].url + '" alt="' + json.pictures[33].alt + '" title="' + json.pictures[33].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild36":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[34].url + '" alt="' + json.pictures[34].alt + '" title="' + json.pictures[34].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild37":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[35].url + '" alt="' + json.pictures[35].alt + '" title="' + json.pictures[35].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild38":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[36].url + '" alt="' + json.pictures[36].alt + '" title="' + json.pictures[36].title + '">';
                        break;
                    case "bild39":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[37].url + '" alt="' + json.pictures[37].alt + '" title="' + json.pictures[37].title + '">';
                        break;
                    case "bild40":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[37].url + '" alt="' + json.pictures[37].alt + '" title="' + json.pictures[37].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild41":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[38].url + '" alt="' + json.pictures[38].alt + '" title="' + json.pictures[38].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild42":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[39].url + '" alt="' + json.pictures[39].alt + '" title="' + json.pictures[39].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild43":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[40].url + '" alt="' + json.pictures[40].alt + '" title="' + json.pictures[40].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild44":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[42].url + '" alt="' + json.pictures[42].alt + '" title="' + json.pictures[42].title + '">';
                        break;
                    case "bild45":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[41].url + '" alt="' + json.pictures[41].alt + '" title="' + json.pictures[41].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild46":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[42].url + '" alt="' + json.pictures[42].alt + '" title="' + json.pictures[42].title + '">';
                        break;
                    case "bild47":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[43].url + '" alt="' + json.pictures[43].alt + '" title="' + json.pictures[43].title + '">';
                        break;
                    case "bild48":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[42].url + '" alt="' + json.pictures[42].alt + '" title="' + json.pictures[42].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild49":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[43].url + '" alt="' + json.pictures[43].alt + '" title="' + json.pictures[43].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild50":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[44].url + '" alt="' + json.pictures[44].alt + '" title="' + json.pictures[44].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild51":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[45].url + '" alt="' + json.pictures[45].alt + '" title="' + json.pictures[45].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild52":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[46].url + '" alt="' + json.pictures[46].alt + '" title="' + json.pictures[46].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild53":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[47].url + '" alt="' + json.pictures[47].alt + '" title="' + json.pictures[47].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild54":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[48].url + '" alt="' + json.pictures[48].alt + '" title="' + json.pictures[48].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    case "bild55":
                        $("#sprungziel").empty();
                        var auswahl = '<img src = "' + json.pictures[49].url + '" alt="' + json.pictures[49].alt + '" title="' + json.pictures[49].title + '">';
                        $("#sprungziel").append(auswahl);
                        break;
                    default:
                        alert("Zu dem Button existiert kein Bild!");
                }


            });




        });

    };


    $("button").prepend("<span class='genericon genericon-downarrow'></span>");


    bildausgabe();


    function galerieAusgabe() {

        var jsonURL = "data/galerie.json";
        $.getJSON(jsonURL, function (json) {
            var imgList = [];

            $.each(json.charaktere, function () {

                imgList += '<img src= "' + this.url + '" class="bildgal">';


                /* console.log(json.charaktere[0].name); */


                var i;

                for (i = 0; i < imgList.length; i++) {

                }
                ;


            });


            /* var auswahl = '<img src= "' + json.charaktere[0].url + '">'; */


            /* $("#sprungziel1").append(auswahl); */

            $("#catsprungziel1").append('<img src= "' + json.charaktere[0].url + '" class="card frontSide">');
            $("#titelausgabe1").append(json.charaktere[0].name);
            $("#textziel1").append(json.charaktere[0].text);
            $("#catsprungziel2").append('<img src= "' + json.charaktere[1].url + '">');
            $("#titelausgabe2").append(json.charaktere[1].name);
            $("#textziel2").append(json.charaktere[1].text);
            $("#catsprungziel3").append('<img src= "' + json.charaktere[2].url + '">');
            $("#titelausgabe3").append(json.charaktere[2].name);
            $("#textziel3").append(json.charaktere[2].text);
            $("#catsprungziel4").append('<img src= "' + json.charaktere[3].url + '">');
            $("#titelausgabe4").append(json.charaktere[3].name);
            $("#textziel4").append(json.charaktere[3].text);
            $("#catsprungziel5").append('<img src= "' + json.charaktere[4].url + '">');
            $("#titelausgabe5").append(json.charaktere[4].name);
            $("#textziel5").append(json.charaktere[4].text);
            $("#catsprungziel6").append('<img src= "' + json.charaktere[5].url + '">');
            $("#titelausgabe6").append(json.charaktere[5].name);
            $("#textziel6").append(json.charaktere[5].text);
            $("#catsprungziel7").append('<img src= "' + json.charaktere[6].url + '">');
            $("#titelausgabe7").append(json.charaktere[6].name);
            $("#textziel7").append(json.charaktere[6].text);
            $("#catsprungziel8").append('<img src="' + json.charaktere[7].url + '">');
            $("#titelausgabe8").append(json.charaktere[7].name);
            $("#textziel8").append(json.charaktere[7].text);
            $("#catsprungziel9").append('<img src="' + json.charaktere[8].url + '">');
            $("#titelausgabe9").append(json.charaktere[8].name);
            $("#textziel9").append(json.charaktere[8].text);
            $("#catsprungziel10").append('<img src="' + json.charaktere[9].url + '">');
            $("#titelausgabe10").append(json.charaktere[9].name);
            $("#textziel10").append(json.charaktere[9].text);
            $("#catsprungziel11").append('<img src="' + json.charaktere[10].url + '">');
            $("#titelausgabe11").append(json.charaktere[10].name);
            $("#textziel11").append(json.charaktere[10].text);
            $("#catsprungziel12").append('<img src="' + json.charaktere[11].url + '">');
            $("#titelausgabe12").append(json.charaktere[11].name);
            $("#textziel12").append(json.charaktere[11].text);


        });


        $(":button").on("click", "span.genericon.genericon-uparrow", function (event) {
            $(this).removeClass("genericon genericon-uparrow");
            $(this).addClass("genericon genericon-downarrow");
            $("div.weiss").remove();


        });


    };


    galerieAusgabe();


    /* Quiz-Ausgabe */


    function frageAusgabe () {


        var jsonURL = "data/quiz.json";
        $.getJSON(jsonURL, function (json) {
            var imgList = [];

            $.each(json.fragen, function () {

                imgList += this.frage;


            });



            var counter = 0;





            $("#quizfrnr").append("Frage " + json.fragen[0].id + ":");
            $("#quizfr").append(json.fragen[0].frage);
            $("#quizausgabe").prepend("<input type='radio' id='rb1' name='rbgroup1' checked>" + json.fragen[0].auswahl1 + "<br>");
            $("input#rb1").attr('value', json.fragen[0].auswahl1);
            $("#quizausgabe").prepend("<input type='radio' id='rb2' name='rbgroup1'>" + json.fragen[0].auswahl2 + "<br>");
            $("input#rb2").attr('value', json.fragen[0].auswahl2);
            $("#quizausgabe").prepend("<input type='radio' id='rb3' name='rbgroup1'>" + json.fragen[0].auswahl3 + "<br>");
            $("input#rb3").attr('value', json.fragen[0].auswahl3);


            $("#weiterz").on("click", function () {

                if ($(":input").is(":checked")) {

                    var auswahl1 = $(":input:checked");

                    function blaettern1 () {

                        $("#result").text("Points: " + counter);
                        $("#quizfrnr").empty();
                        $("#quizfr").empty();
                        $("#quizausgabe").empty();
                        $("#quizfrnr").append("Frage " + json.fragen[1].id + ":");
                        $("#quizfr").append(json.fragen[1].frage);
                        $("#quizausgabe").prepend("<input type='radio' id='rb4' name='rbgroup2' checked>" + json.fragen[1].auswahl1 + "<br>");
                        $("input#rb4").attr('value', json.fragen[1].auswahl1);
                        $("#quizausgabe").prepend("<input type='radio' id='rb5' name='rbgroup2'>" + json.fragen[1].auswahl2 + "<br>");
                        $("input#rb5").attr('value', json.fragen[1].auswahl2);
                        $("#quizausgabe").prepend("<input type='radio' id='rb6' name='rbgroup2'>" + json.fragen[1].auswahl3 + "<br>");
                        $("input#rb6").attr('value', json.fragen[1].auswahl3);
                        $("li a").removeClass("active");
                        $("li#quizbt2 a").addClass("active");
                    }

                    function blaettern2 () {

                        $("#result").text("Points: " + counter);
                        $("#quizfrnr").empty();
                        $("#quizfr").empty();
                        $("#quizausgabe").empty();
                        $("#quizfrnr").append("Frage " + json.fragen[2].id + ":");
                        $("#quizfr").append(json.fragen[2].frage);
                        $("#quizausgabe").prepend("<input type='radio' id='rb7' name='rbgroup2' checked>" + json.fragen[2].auswahl1 + "<br>");
                        $("input#rb7").attr('value', json.fragen[2].auswahl1);
                        $("#quizausgabe").prepend("<input type='radio' id='rb8' name='rbgroup2'>" + json.fragen[2].auswahl2 + "<br>");
                        $("input#rb8").attr('value', json.fragen[2].auswahl2);
                        $("#quizausgabe").prepend("<input type='radio' id='rb9' name='rbgroup2'>" + json.fragen[2].auswahl3 + "<br>");
                        $("input#rb9").attr('value', json.fragen[2].auswahl3);
                        $("li a").removeClass("active");
                        $("li#quizbt3 a").addClass("active");
                    }

                    function blaettern3 () {

                        $("#result").text("Points: " + counter);
                        $("#quizfrnr").empty();
                        $("#quizfr").empty();
                        $("#quizausgabe").empty();
                        $("#quizfrnr").append("Frage " + json.fragen[3].id + ":");
                        $("#quizfr").append(json.fragen[3].frage);
                        $("#quizausgabe").prepend("<input type='radio' id='rb10' name='rbgroup2' checked>" + json.fragen[3].auswahl1 + "<br>");
                        $("input#rb10").attr('value', json.fragen[3].auswahl1);
                        $("#quizausgabe").prepend("<input type='radio' id='rb11' name='rbgroup2'>" + json.fragen[3].auswahl2 + "<br>");
                        $("input#rb11").attr('value', json.fragen[3].auswahl2);
                        $("#quizausgabe").prepend("<input type='radio' id='rb12' name='rbgroup2'>" + json.fragen[3].auswahl3 + "<br>");
                        $("input#rb12").attr('value', json.fragen[3].auswahl3);
                        $("li a").removeClass("active");
                        $("li#quizbt4 a").addClass("active");
                    }

                    function blaettern4 () {

                        $("#result").text("Points: " + counter);
                        $("#quizfrnr").empty();
                        $("#quizfr").empty();
                        $("#quizausgabe").empty();
                        $("#quizfrnr").append("Frage " + json.fragen[4].id + ":");
                        $("#quizfr").append(json.fragen[4].frage);
                        $("#quizausgabe").prepend("<input type='radio' id='rb13' name='rbgroup2' checked>" + json.fragen[4].auswahl1 + "<br>");
                        $("input#rb13").attr('value', json.fragen[4].auswahl1);
                        $("#quizausgabe").prepend("<input type='radio' id='rb14' name='rbgroup2'>" + json.fragen[4].auswahl2 + "<br>");
                        $("input#rb14").attr('value', json.fragen[4].auswahl2);
                        $("#quizausgabe").prepend("<input type='radio' id='rb15' name='rbgroup2'>" + json.fragen[4].auswahl3 + "<br>");
                        $("input#rb15").attr('value', json.fragen[4].auswahl3);
                        $("li a").removeClass("active");
                        $("li#quizbt5 a").addClass("active");
                    }

                    function blaettern5 () {

                        $("#result").text("Points: " + counter);
                        $("#quizfrnr").empty();
                        $("#quizfr").empty();
                        $("#quizausgabe").empty();
                        $("#quizfrnr").append("Frage " + json.fragen[5].id + ":");
                        $("#quizfr").append(json.fragen[5].frage);
                        $("#quizausgabe").prepend("<input type='radio' id='rb16' name='rbgroup2' checked>" + json.fragen[5].auswahl1 + "<br>");
                        $("input#rb16").attr('value', json.fragen[5].auswahl1);
                        $("#quizausgabe").prepend("<input type='radio' id='rb17' name='rbgroup2'>" + json.fragen[5].auswahl2 + "<br>");
                        $("input#rb17").attr('value', json.fragen[5].auswahl2);
                        $("#quizausgabe").prepend("<input type='radio' id='rb18' name='rbgroup2'>" + json.fragen[5].auswahl3 + "<br>");
                        $("input#rb18").attr('value', json.fragen[5].auswahl3);
                        $("li a").removeClass("active");
                        $("li#quizbt6 a").addClass("active");
                    }

                    function blaettern6 () {

                        $("#result").text("Points: " + counter);
                        $("#quizfrnr").empty();
                        $("#quizfr").empty();
                        $("#quizausgabe").empty();
                        $("#quizfrnr").append("Frage " + json.fragen[6].id + ":");
                        $("#quizfr").append(json.fragen[6].frage);
                        $("#quizausgabe").prepend("<input type='radio' id='rb19' name='rbgroup2' checked>" + json.fragen[6].auswahl1 + "<br>");
                        $("input#rb19").attr('value', json.fragen[6].auswahl1);
                        $("#quizausgabe").prepend("<input type='radio' id='rb20' name='rbgroup2'>" + json.fragen[6].auswahl2 + "<br>");
                        $("input#rb20").attr('value', json.fragen[6].auswahl2);
                        $("#quizausgabe").prepend("<input type='radio' id='rb21' name='rbgroup2'>" + json.fragen[6].auswahl3 + "<br>");
                        $("input#rb21").attr('value', json.fragen[6].auswahl3);
                        $("li a").removeClass("active");
                        $("li#quizbt7 a").addClass("active");
                    }

                    function blaettern7 () {

                        $("#result").text("Points: " + counter);
                        $("#quizfrnr").empty();
                        $("#quizfr").empty();
                        $("#quizausgabe").empty();
                        $("#quizfrnr").append("Frage " + json.fragen[7].id + ":");
                        $("#quizfr").append(json.fragen[7].frage);
                        $("#quizausgabe").prepend("<input type='radio' id='rb22' name='rbgroup2' checked>" + json.fragen[7].auswahl1 + "<br>");
                        $("input#rb22").attr('value', json.fragen[7].auswahl1);
                        $("#quizausgabe").prepend("<input type='radio' id='rb23' name='rbgroup2'>" + json.fragen[7].auswahl2 + "<br>");
                        $("input#rb23").attr('value', json.fragen[7].auswahl2);
                        $("#quizausgabe").prepend("<input type='radio' id='rb24' name='rbgroup2'>" + json.fragen[7].auswahl3 + "<br>");
                        $("input#rb24").attr('value', json.fragen[7].auswahl3);
                        $("li a").removeClass("active");
                        $("li#quizbt8 a").addClass("active");
                    }

                    function blaettern8 () {

                        $("#result").text("Points: " + counter);
                        $("#quizfrnr").empty();
                        $("#quizfr").empty();
                        $("#quizausgabe").empty();
                        $("#quizfrnr").append("Frage " + json.fragen[8].id + ":");
                        $("#quizfr").append(json.fragen[8].frage);
                        $("#quizausgabe").prepend("<input type='radio' id='rb25' name='rbgroup2' checked>" + json.fragen[8].auswahl1 + "<br>");
                        $("input#rb25").attr('value', json.fragen[8].auswahl1);
                        $("#quizausgabe").prepend("<input type='radio' id='rb26' name='rbgroup2'>" + json.fragen[8].auswahl2 + "<br>");
                        $("input#rb26").attr('value', json.fragen[8].auswahl2);
                        $("#quizausgabe").prepend("<input type='radio' id='rb27' name='rbgroup2'>" + json.fragen[8].auswahl3 + "<br>");
                        $("input#rb27").attr('value', json.fragen[8].auswahl3);
                        $("li a").removeClass("active");
                        $("li#quizbt9 a").addClass("active");
                    }

                    function blaettern9 () {

                        $("#result").text("Points: " + counter);
                        $("#quizfrnr").empty();
                        $("#quizfr").empty();
                        $("#quizausgabe").empty();
                        $("#quizfrnr").append("Frage " + json.fragen[9].id + ":");
                        $("#quizfr").append(json.fragen[9].frage);
                        $("#quizausgabe").prepend("<input type='radio' id='rb28' name='rbgroup2' checked>" + json.fragen[9].auswahl1 + "<br>");
                        $("input#rb28").attr('value', json.fragen[9].auswahl1);
                        $("#quizausgabe").prepend("<input type='radio' id='rb29' name='rbgroup2'>" + json.fragen[9].auswahl2 + "<br>");
                        $("input#rb29").attr('value', json.fragen[9].auswahl2);
                        $("#quizausgabe").prepend("<input type='radio' id='rb30' name='rbgroup2'>" + json.fragen[9].auswahl3 + "<br>");
                        $("input#rb30").attr('value', json.fragen[9].auswahl3);
                        $("li a").removeClass("active");
                        $("li#quizbt10 a").addClass("active");
                    }

                    function blaettern10 () {

                        $("#result").text("Points: " + counter);
                        $("#quizfrnr").empty();
                        $("#quizfr").empty();
                        $("#quizausgabe").empty();
                        $("#quizfrnr").append("Frage " + json.fragen[10].id + ":");
                        $("#quizfr").append(json.fragen[10].frage);
                        $("#quizausgabe").prepend("<input type='radio' id='rb31' name='rbgroup2' checked>" + json.fragen[10].auswahl1 + "<br>");
                        $("input#rb31").attr('value', json.fragen[10].auswahl1);
                        $("#quizausgabe").prepend("<input type='radio' id='rb32' name='rbgroup2'>" + json.fragen[10].auswahl2 + "<br>");
                        $("input#rb32").attr('value', json.fragen[10].auswahl2);
                        $("#quizausgabe").prepend("<input type='radio' id='rb33' name='rbgroup2'>" + json.fragen[10].auswahl3 + "<br>");
                        $("input#rb33").attr('value', json.fragen[10].auswahl3);
                        $("li a").removeClass("active");
                        $("li#quizbt11 a").addClass("active");
                    }

                    function blaettern11 () {

                        $("#result").text("Points: " + counter);
                        $("#quizfrnr").empty();
                        $("#quizfr").empty();
                        $("#quizausgabe").empty();
                        $("#quizfrnr").append("Frage " + json.fragen[11].id + ":");
                        $("#quizfr").append(json.fragen[11].frage);
                        $("#quizausgabe").prepend("<input type='radio' id='rb34' name='rbgroup2' checked>" + json.fragen[11].auswahl1 + "<br>");
                        $("input#rb34").attr('value', json.fragen[11].auswahl1);
                        $("#quizausgabe").prepend("<input type='radio' id='rb35' name='rbgroup2'>" + json.fragen[11].auswahl2 + "<br>");
                        $("input#rb35").attr('value', json.fragen[11].auswahl2);
                        $("#quizausgabe").prepend("<input type='radio' id='rb36' name='rbgroup2'>" + json.fragen[11].auswahl3 + "<br>");
                        $("input#rb36").attr('value', json.fragen[11].auswahl3);
                        $("li a").removeClass("active");
                        $("li#quizbt12 a").addClass("active");
                    }

                    function blaettern12 () {

                        $("#result").text("Points: " + counter);
                        $("#quizfrnr").empty();
                        $("#quizfr").empty();
                        $("#quizausgabe").empty();
                        $("#quizfrnr").append("Frage " + json.fragen[12].id + ":");
                        $("#quizfr").append(json.fragen[12].frage);
                        $("#quizausgabe").prepend("<input type='radio' id='rb37' name='rbgroup2' checked>" + json.fragen[12].auswahl1 + "<br>");
                        $("input#rb37").attr('value', json.fragen[12].auswahl1);
                        $("#quizausgabe").prepend("<input type='radio' id='rb38' name='rbgroup2'>" + json.fragen[12].auswahl2 + "<br>");
                        $("input#rb38").attr('value', json.fragen[12].auswahl2);
                        $("#quizausgabe").prepend("<input type='radio' id='rb39' name='rbgroup2'>" + json.fragen[12].auswahl3 + "<br>");
                        $("input#rb39").attr('value', json.fragen[12].auswahl3);
                        $("li a").removeClass("active");
                        $("li#quizbt13 a").addClass("active");
                    }

                    function blaettern13 () {

                        $("#result").text("Points: " + counter);
                        $("#quizfrnr").empty();
                        $("#quizfr").empty();
                        $("#quizausgabe").empty();
                        $("#quizfrnr").append("Frage " + json.fragen[13].id + ":");
                        $("#quizfr").append(json.fragen[13].frage);
                        $("#quizausgabe").prepend("<input type='radio' id='rb40' name='rbgroup2' checked>" + json.fragen[13].auswahl1 + "<br>");
                        $("input#rb40").attr('value', json.fragen[13].auswahl1);
                        $("#quizausgabe").prepend("<input type='radio' id='rb41' name='rbgroup2'>" + json.fragen[13].auswahl2 + "<br>");
                        $("input#rb41").attr('value', json.fragen[13].auswahl2);
                        $("#quizausgabe").prepend("<input type='radio' id='rb42' name='rbgroup2'>" + json.fragen[13].auswahl3 + "<br>");
                        $("input#rb42").attr('value', json.fragen[13].auswahl3);
                        $("li a").removeClass("active");
                        $("li#quizbt14 a").addClass("active");
                    }


                    function blaettern14 () {

                        $("#result").text("Points: " + counter);
                        $("#quizfrnr").empty();
                        $("#quizfr").empty();
                        $("#quizausgabe").empty();
                        $("#quizfrnr").append("Frage " + json.fragen[14].id + ":");
                        $("#quizfr").append(json.fragen[14].frage);
                        $("#quizausgabe").prepend("<input type='radio' id='rb43' name='rbgroup2' checked>" + json.fragen[14].auswahl1 + "<br>");
                        $("input#rb43").attr('value', json.fragen[14].auswahl1);
                        $("#quizausgabe").prepend("<input type='radio' id='rb44' name='rbgroup2'>" + json.fragen[14].auswahl2 + "<br>");
                        $("input#rb44").attr('value', json.fragen[14].auswahl2);
                        $("#quizausgabe").prepend("<input type='radio' id='rb45' name='rbgroup2'>" + json.fragen[14].auswahl3 + "<br>");
                        $("input#rb45").attr('value', json.fragen[14].auswahl3);
                        $("li a").removeClass("active");
                        $("li#quizbt15 a").addClass("active");
                    }

                    function blaettern15 () {

                        $("#result").text("Points: " + counter);
                        $("#weiterz").attr("value", "Bewertung");
                        $("input#rb43").prop("checked", false );
                        $("input#rb44").prop("checked", false );
                        $("input#rb45").prop("checked", false );
                        var punkte = counter;



                        $("#weiterz").on("click", function () {

                            switch (true) {
                                case (counter === 15):
                                    $("#quizausgabe").empty();
                                    $("#quizausgabe").css("text-align", "center");
                                    $("#quizausgabe").text("Maximum of Points: Sie sind ein absoluter Katzenkenner!");
                                    $("#weiterz").remove();
                                    break;
                                case (counter > 15):
                                    $("#quizausgabe").empty();
                                    $("#quizausgabe").css("text-align", "center");
                                    $("#quizausgabe").text("Das ist gar nicht möglich!");
                                    $("#weiterz").remove();
                                    break;
                                case (counter === 0):
                                    $("#quizausgabe").empty();
                                    $("#quizausgabe").css("text-align", "center");
                                    $("#quizausgabe").text("Schämen Sie sich! Sie verstehen gar nichts von diesen niedlichen Tierchen!");
                                    $("#weiterz").remove();
                                    break;
                                case (counter < 15 && !0):
                                    $("#quizausgabe").empty();
                                    $("#quizausgabe").css("text-align", "center");
                                    $("#quizausgabe").text("Irgendwo dazwischen!");
                                    $("#weiterz").remove();

                            }

                        });



                    }







                    switch (auswahl1[0].id) {
                        case "rb1":
                            counter += 1;
                            blaettern1();
                            break;
                        case "rb2":
                        case "rb3":
                            blaettern1();
                            break;
                        case "rb4":
                            counter += 1;
                            blaettern2();
                            break;
                        case "rb5":
                        case "rb6":
                            blaettern2();
                            break;
                        case "rb7":
                            blaettern3();
                            break;
                        case "rb8":
                            counter += 1;
                            blaettern3();
                            break;
                        case "rb9":
                            blaettern3();
                            break;

                        case "rb10":
                        case "rb11":
                            blaettern4();
                            break;
                        case "rb12":
                            counter +=1;
                            blaettern4();
                            break;
                        case "rb13":
                            counter += 1;
                            blaettern5();
                            break;
                        case "rb14":
                        case "rb15":
                            blaettern5();
                            break;
                        case "rb16":
                        case "rb17":
                            blaettern6();
                            break;
                        case "rb18":
                            counter += 1;
                            blaettern6();
                            break;
                        case "rb19":
                            counter += 1;
                            blaettern7();
                            break;
                        case "rb20":
                        case "rb21":
                            blaettern7();
                            break;
                        case "rb22":
                            blaettern8();
                            break;
                        case "rb23":
                            counter += 1;
                            blaettern8();
                            break;
                        case "rb24":
                            blaettern8();
                            break;
                        case "rb25":
                        case "rb26":
                            blaettern9();
                            break;
                        case "rb27":
                            counter += 1;
                            blaettern9();
                            break;
                        case "rb28":
                            blaettern10();
                            break;
                        case "rb29":
                            counter += 1;
                            blaettern10();
                            break;
                        case "rb30":
                            blaettern10();
                            break;
                        case "rb31":
                            blaettern11();
                            break;
                        case "rb32":
                            counter += 1;
                            blaettern11();
                            break;
                        case "rb33":
                            blaettern11();
                            break;
                        case "rb34":
                            blaettern12();
                            break;
                        case "rb35":
                            counter += 1;
                            blaettern12();
                            break;
                        case "rb36":
                            blaettern12();
                            break;
                        case "rb37":
                            blaettern13();
                            break;
                        case "rb38":
                            counter += 1;
                            blaettern13();
                            break;
                        case "rb39":
                            blaettern13();
                            break;
                        case "rb40":
                            blaettern14();
                            break;
                        case "rb41":
                            counter += 1;
                            blaettern14();
                            break;
                        case "rb42":
                            blaettern14();
                            break;
                        case "rb43":
                            counter += 1;
                            blaettern15();
                            break;
                        case "rb44":
                            blaettern15();
                            break;
                        case "rb45":
                            blaettern15();
                            break;




                    }









                }





            });









































        });




    }


    frageAusgabe();





});