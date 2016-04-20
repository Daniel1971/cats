$(document).ready(function() {

    /* Bildausgabe mit Text Seite 3 */

    $("span.genericon.genericon-downarrow").on("click", function () {
        $("div.weiss").remove();
        var beschrieb = "<div class='weiss'>Hier sollte der Text stehen!</div>";
        $(this.parentElement).append(beschrieb);
        switch (this.parentElement) {

            case bild37:
                $("div.weiss").text("Die Britisch Halblanghaar...");
                break;
            case bild38:
                $("div.weiss").text("Die Balinese...");
                break;
            case bild39:
                $("div.weiss").text("Die Orientalisch Halblanghaar...");
                break;
            case bild40:
                $("div.weiss").text("Die Somali...");
                break;
            case bild41:
                $("div.weiss").text("Die Nebelung...");
                break;
            case bild42:
                $("div.weiss").text("Die Highland Fold...");
                break;
            case bild43:
                $("div.weiss").text("Die Halblanghaarige American Curl...");
                break;
            case bild44:
                $("div.weiss").text("Die Cymric...");
                break;
            case bild45:
                $("div.weiss").text("Die Halblanghaarige American Bobtail...");
                break;
            case bild46:
                $("div.weiss").text("Die Halblanghaarige Japanese Bobtail...");
                break;
            case bild47:
                $("div.weiss").text("Die Halblanghaarige Munchkin...");
                break;
            default:
                alert("Dieses Tier gibt es nicht");

        }
    });


});












