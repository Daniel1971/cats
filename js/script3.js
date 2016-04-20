$(document).ready(function() {

    /* Bildausgabe mit Text Seite 2 */

    $("span.genericon.genericon-downarrow").on("click", function () {
        $("div.weiss").remove();
        var beschrieb = "<div class='weiss'>Hier sollte der Text stehen!</div>";
        $(this.parentElement).append(beschrieb);
        switch (this.parentElement) {

            case bild29:
                $("div.weiss").text("Die Maine Coon...");
                break;
            case bild30:
                $("div.weiss").text("Die Norwegische Waldkatze...");
                break;
            case bild31:
                $("div.weiss").text("Die Sibirische Katze...");
                break;
            case bild32:
                $("div.weiss").text("Die Türkische Angora...");
                break;
            case bild33:
                $("div.weiss").text("Die Türkische Van...");
                break;
            case bild34:
                $("div.weiss").text("Die Birma...");
                break;
            case bild35:
                $("div.weiss").text("Die Ragdoll...");
                break;
            case bild36:
                $("div.weiss").text("Die Kurilen Bobtail...");
                break;
            default:
                alert("Dieses Tier gibt es nicht");

        }
    });


});













