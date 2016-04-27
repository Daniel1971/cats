$(document).ready(function() {


    function bildausgabemitText () {

        var jsonURL = "data/text.json";
        $.getJSON(jsonURL, function (json) {
            var textList = [];

            $.each(json.beschreibung, function () {

                textList += this.beschreibung;


            })







            /* Bildausgabe mit Text auf Klick - Seite 4 */

            $(":button").on("click", "span.genericon.genericon-downarrow", function (event) {

                $("div.weiss").remove();
                $(".genericon.genericon-uparrow").attr("class", "genericon genericon-downarrow");
                var beschrieb = "<div class='weiss'>Hier sollte der Text stehen!</div>";
                $(this.parentElement).append(beschrieb);

                switch (this.parentElement) {

                    case bild48:
                        $("div.weiss").text(json.beschreibung[47].text);
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
























