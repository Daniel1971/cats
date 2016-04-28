$(document).ready(function() {



    function bildausgabe () {

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



    function galerieAusgabe () {

        var jsonURL = "data/galerie.json";
        $.getJSON(jsonURL, function (json) {
            var imgList = [];

            $.each(json.charaktere, function () {

                imgList += '<img src= "' + this.url + '" class="bildgal">';


                /* console.log(json.charaktere[0].name); */






                var i;

                for (i = 0; i<imgList.length; i++) {

                };



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





});
