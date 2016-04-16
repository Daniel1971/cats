$(document).ready(function() {

    var jsonURL = "data/data.json";
    $.getJSON(jsonURL, function (json) {
        var imgList = [];

        $.each(json.pictures, function () {

            imgList += '<img src= "' + this.url + '" style="width: 244px; height: 211px;">';
        });


        $(":button").on("click", function () {
            switch (this.id) {

                case "bild1":
                    $("#sprungziel").empty();
                    var auswahl = '<img src= "' + json.pictures[0].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild2":
                    $("#sprungziel").empty();
                    var auswahl = '<img src= "' + json.pictures[1].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild3":
                    $("#sprungziel").empty();
                    var auswahl = '<img src= "' + json.pictures[2].url + '">';
                    $("#sprungziel").replaceWith(auswahl);
                    break;
                case "bild4":
                    $("#sprungziel").empty();
                    var auswahl = '<img src= "' + json.pictures[3].url + '">';
                    $("#sprungziel").replaceWith(auswahl);
                    break;
                case "bild5":
                    $("#sprungziel").empty();
                    var auswahl = '<img src= "' + json.pictures[4].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild6":
                    $("#sprungziel").empty();
                    var auswahl = '<img src= "' + json.pictures[5].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild7":
                    $("#sprungziel").empty();
                    var auswahl = '<img src= "' + json.pictures[6].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild8":
                    $("#sprungziel").empty();
                    var auswahl = '<img src= "' + json.pictures[7].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild9":
                    $("#sprungziel").empty();
                    var auswahl = '<img src= "' + json.pictures[8].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild10":
                    $("#sprungziel").empty();
                    var auswahl = '<img src= "' + json.pictures[9].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild11":
                    $("#sprungziel").empty();
                    var auswahl = '<img src= "' + json.pictures[10].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild12":
                    $("#sprungziel").empty();
                    var auswahl = '<img src= "' + json.pictures[11].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild13":
                    $("#sprungziel").empty();
                    var auswahl = '<img src= "' + json.pictures[12].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild14":
                    $("#sprungziel").empty();
                    var auswahl = '<img src= "' + json.pictures[13].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild15":
                    $("#sprungziel").empty();
                    var auswahl = '<img src= "' + json.pictures[14].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild16":
                    $("#sprungziel").empty();
                    var auswahl = '<img src= "' + json.pictures[15].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild17":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[16].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild18":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[17].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild19":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[18].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild20":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[19].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild21":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[20].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild22":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[21].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild23":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[22].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild24":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[23].url + '">';
                    /* $("#sprungziel").append(auswahl); */
                    break;
                case "bild25":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[23].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild26":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[24].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild27":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[25].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild28":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[26].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild29":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[27].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild30":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[28].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild31":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[29].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild32":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[30].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild33":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[31].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild34":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[32].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild35":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[33].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild36":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[34].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild37":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[35].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild38":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[36].url + '">';
                    /* $("#sprungziel").append(auswahl); */
                    break;
                case "bild39":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[37].url + '">';
                    /* $("#sprungziel").append(auswahl); */
                    break;
                case "bild40":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[37].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild41":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[38].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild42":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[39].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild43":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[40].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild44":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[42].url + '">';
                    /* $("#sprungziel").append(auswahl); */
                    break;
                case "bild45":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[41].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild46":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[42].url + '">';
                    /* $("#sprungziel").append(auswahl); */
                    break;
                case "bild47":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[43].url + '">';
                    /* $("#sprungziel").append(auswahl); */
                    break;
                case "bild48":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[42].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild49":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[43].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild50":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[44].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild51":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[45].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild52":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[46].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild53":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[47].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild54":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[48].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                case "bild55":
                    $("#sprungziel").empty();
                    var auswahl = '<img src = "' + json.pictures[49].url + '">';
                    $("#sprungziel").append(auswahl);
                    break;
                default:
                    alert("Zu dem Button existiert kein Bild!");
            }
        });
    });
});