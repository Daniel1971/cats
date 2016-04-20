$(document).ready(function() {

    /* Bildausgabe mit Text Seite 4 */

    $("span.genericon.genericon-downarrow").on("click", function () {
        $("div.weiss").remove();
        var beschrieb = "<div class='weiss'>Hier sollte der Text stehen!</div>";
        $(this.parentElement).append(beschrieb);
        switch (this.parentElement) {


            case bild48:
                $("div.weiss").text("Die Perserkatze...");
                break;
            default:
                alert("Dieses Tier gibt es nicht");

        }
    });


});












