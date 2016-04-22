$(document).ready(function() {


    function bildausgabemitText () {

        var jsonURL = "data/text.json";
        $.getJSON(jsonURL, function (json) {
            var textList = [];

            $.each(json.beschreibung, function () {

                textList += this.beschreibung;


            })







            /* Bildausgabe mit Text auf Klick -  Seite 3 */

            $("span.genericon.genericon-downarrow").on("click", function () {

                $("div.weiss").remove();
                $(".genericon.genericon-uparrow").attr("class", "genericon genericon-downarrow");
                var beschrieb = "<div class='weiss'>Hier sollte der Text stehen!</div>";
                $(this.parentElement).append(beschrieb);
                switch (this.parentElement) {

                    case bild37:
                        $("div.weiss").text(json.beschreibung[36].text);
                        break;
                    case bild38:
                        $("div.weiss").text(json.beschreibung[37].text);
                        break;
                    case bild39:
                        $("div.weiss").text(json.beschreibung[38].text);
                        break;
                    case bild40:
                        $("div.weiss").text(json.beschreibung[39].text);
                        break;
                    case bild41:
                        $("div.weiss").text(json.beschreibung[40].text);
                        break;
                    case bild42:
                        $("div.weiss").text(json.beschreibung[41].text);
                        break;
                    case bild43:
                        $("div.weiss").text(json.beschreibung[42].text);
                        break;
                    case bild44:
                        $("div.weiss").text(json.beschreibung[43].text);
                        break;
                    case bild45:
                        $("div.weiss").text(json.beschreibung[44].text);
                        break;
                    case bild46:
                        $("div.weiss").text(json.beschreibung[45].text);
                        break;
                    case bild47:
                        $("div.weiss").text(json.beschreibung[46].text);
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













