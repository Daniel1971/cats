$(document).ready(function() {


    function bildausgabemitText () {

        var jsonURL = "data/text.json";
        $.getJSON(jsonURL, function (json) {
            var textList = [];

            $.each(json.beschreibung, function () {

                textList += this.beschreibung;


            })







            /* Bildausgabe mit Text auf Klick - Seite 4 */

            $("span.genericon.genericon-downarrow").on("click", function () {

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

                $("span.genericon.genericon-uparrow").on("click", function () {
                    $("div.weiss").remove();
                    $(this).removeClass("genericon genericon-uparrow");
                    $(this).addClass("genericon genericon-downarrow");
                });

            });





        });



    }


    bildausgabemitText();









});
























