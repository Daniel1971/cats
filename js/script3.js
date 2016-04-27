$(document).ready(function() {


    function bildausgabemitText () {

        var jsonURL = "data/text.json";
        $.getJSON(jsonURL, function (json) {
            var textList = [];

            $.each(json.beschreibung, function () {

                textList += this.beschreibung;


            })







            /* Bildausgabe mit Text auf Klick - Seite 2 */

            $(":button").on("click", "span.genericon.genericon-downarrow", function (event) {

                $("div.weiss").remove();
                $(".genericon.genericon-uparrow").attr("class", "genericon genericon-downarrow");
                var beschrieb = "<div class='weiss'>Hier sollte der Text stehen!</div>";
                $(this.parentElement).append(beschrieb);

                switch (this.parentElement) {


                    case bild29:
                        $("div.weiss").text(json.beschreibung[28].text);
                        break;
                    case bild30:
                        $("div.weiss").text(json.beschreibung[29].text);
                        break;
                    case bild31:
                        $("div.weiss").text(json.beschreibung[30].text);
                        break;
                    case bild32:
                        $("div.weiss").text(json.beschreibung[31].text);
                        break;
                    case bild33:
                        $("div.weiss").text(json.beschreibung[32].text);
                        break;
                    case bild34:
                        $("div.weiss").text(json.beschreibung[33].text);
                        break;
                    case bild35:
                        $("div.weiss").text(json.beschreibung[34].text);
                        break;
                    case bild36:
                        $("div.weiss").text(json.beschreibung[35].text);
                        break;
                    default:
                        alert("Dieses Tier gibt es nicht");

                }


                /* Pfeilsymbol ersetzen */

                $(this).removeClass("genericon genericon-downarrow");
                $(this).addClass("genericon genericon-uparrow");



                /* Textbereich bei Klick auf Pfeilsymbol nach oben wieder schliessen */

                $(":button").on("click", "span.genericon.genericon-uparrow", function (event) {
                    $(this).removeClass("genericon genericon-uparrow");
                    $(this).addClass("genericon genericon-downarrow");
                    $("div.weiss").remove();




                });




            });





        });



    }


    bildausgabemitText();









});













