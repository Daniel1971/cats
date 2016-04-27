$(document).ready(function() {



    function bildausgabemitText () {

        var jsonURL = "data/text.json";
        $.getJSON(jsonURL, function (json) {
            var textList = [];

            $.each(json.texte, function () {

                textList += this.texte;


            })





            /* Bildausgabe mit Text auf Klick - Seite 1 */


            $(":button").on("click", "span.genericon.genericon-downarrow", function (event) {

                $("div.weiss").remove();
                $(".genericon.genericon-uparrow").attr("class", "genericon genericon-downarrow");
                var beschrieb = "<div class='weiss'>Hier sollte der Text stehen!</div>";
                $(this.parentElement).append(beschrieb);
                console.log(this);


                switch (this.parentElement) {

                    case bild1:
                        $("div.weiss").text(json.beschreibung[0].text);
                        break;
                    case bild2:
                        $("div.weiss").text(json.beschreibung[1].text);
                        break;
                    case bild3:
                        $("div.weiss").text(json.beschreibung[2].text);
                        break;
                    case bild4:
                        $("div.weiss").text(json.beschreibung[3].text);
                        break;
                    case bild5:
                        $("div.weiss").text(json.beschreibung[4].text);
                        break;
                    case bild6:
                        $("div.weiss").text(json.beschreibung[5].text);
                        break;
                    case bild7:
                        $("div.weiss").text(json.beschreibung[6].text);
                        break;
                    case bild8:
                        $("div.weiss").text(json.beschreibung[7].text);
                        break;
                    case bild9:
                        $("div.weiss").text(json.beschreibung[8].text);
                        break;
                    case bild10:
                        $("div.weiss").text(json.beschreibung[9].text);
                        break;
                    case bild11:
                        $("div.weiss").text(json.beschreibung[10].text);
                        break;
                    case bild12:
                        $("div.weiss").text(json.beschreibung[11].text);
                        break;
                    case bild13:
                        $("div.weiss").text(json.beschreibung[12].text);
                        break;
                    case bild14:
                        $("div.weiss").text(json.beschreibung[13].text);
                        break;
                    case bild15:
                        $("div.weiss").text(json.beschreibung[14].text);
                        break;
                    case bild16:
                        $("div.weiss").text(json.beschreibung[15].text);
                        break;
                    case bild17:
                        $("div.weiss").text(json.beschreibung[16].text);
                        break;
                    case bild18:
                        $("div.weiss").text(json.beschreibung[17].text);
                        break;
                    case bild19:
                        $("div.weiss").text(json.beschreibung[18].text);
                        break;
                    case bild20:
                        $("div.weiss").text(json.beschreibung[19].text);
                        break;
                    case bild21:
                        $("div.weiss").text(json.beschreibung[20].text);
                        break;
                    case bild22:
                        $("div.weiss").text(json.beschreibung[21].text);
                        break;
                    case bild23:
                        $("div.weiss").text(json.beschreibung[22].text);
                        break;
                    case bild24:
                        $("div.weiss").text(json.beschreibung[23].text);
                        break;
                    case bild25:
                        $("div.weiss").text(json.beschreibung[24].text);
                        break;
                    case bild26:
                        $("div.weiss").text(json.beschreibung[25].text);
                        break;
                    case bild27:
                        $("div.weiss").text(json.beschreibung[26].text);
                        break;
                    case bild28:
                        $("div.weiss").text(json.beschreibung[27].text);
                        break;
                    default:
                        alert("Dieses Tier gibt es nicht!");



                }

                /* Pfeilsymbol ersetzen */

                $(this).removeClass("genericon genericon-downarrow");
                $(this).addClass("genericon genericon-uparrow");




                $(":button").on("click", "span.genericon.genericon-uparrow", function (event) {
                    $(this).removeClass("genericon genericon-uparrow");
                    $(this).addClass("genericon genericon-downarrow");
                    $("div.weiss").remove();

                });



            });

            /* Textbereich bei Klick auf Pfeilsymbol nach oben wieder schliessen */

            $(":button").on("click", "span.genericon.genericon-uparrow", function (event) {
                $(this).removeClass("genericon genericon-uparrow");
                $(this).addClass("genericon genericon-downarrow");
                $("div.weiss").remove();

            });






        });







    }


    bildausgabemitText();




















});
