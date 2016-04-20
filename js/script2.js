$(document).ready(function () {

    /* Bildausgabe mit Text Seite 1 */

    $("span.genericon.genericon-downarrow").on("click", function () {
        $("div.weiss").remove();
        var beschrieb = "<div class='weiss'>Hier sollte der Text stehen!</div>";
        $(this.parentElement).append(beschrieb);
        switch (this.parentElement) {

            case bild1:
                $("div.weiss").text("Die Britisch Kurzhaar...");
                break;
            case bild2:
                $("div.weiss").text("Die Europäisch Kurzhaar...");
                break;
            case bild3:
                $("div.weiss").text("Die Amerikanische Kurzhaar...");
                break;
            case bild4:
                $("div.weiss").text("Die Kartäuser...");
                break;
            case bild5:
                $("div.weiss").text("Die Exotische Kurzhaar...");
                break;
            case bild6:
                $("div.weiss").text("Die Manx...");
                break;
            case bild7:
                $("div.weiss").text("Die Amerikanische Stummelschwanzkatze...");
                break;
            case bild8:
                $("div.weiss").text("Die Japanische Stummelschwanzkatze...");
                break;
            case bild9:
                $("div.weiss").text("Die Schottische Hängeohrkatze...");
                break;
            case bild10:
                $("div.weiss").text("Die American Curl...");
                break;
            case bild11:
                $("div.weiss").text("Die Munchkin...");
                break;
            case bild12:
                $("div.weiss").text("Die Russisch Blau...");
                break;
            case bild13:
                $("div.weiss").text("Die Korat...");
                break;
            case bild14:
                $("div.weiss").text("Die Siamkatze...");
                break;
            case bild15:
                $("div.weiss").text("Die weisse Siamkatze...");
                break;
            case bild16:
                $("div.weiss").text("Die Orientalisch Kurzhaar...");
                break;
            case bild17:
                $("div.weiss").text("Die Havana Brown...");
                break;
            case bild18:
                $("div.weiss").text("Die Snowshoe...");
                break;
            case bild19:
                $("div.weiss").text("Die Burma...");
                break;
            case bild20:
                $("div.weiss").text("Die Bombay...");
                break;
            case bild21:
                $("div.weiss").text("Die Tonkanese...");
                break;
            case bild22:
                $("div.weiss").text("Die Singapura...");
                break;
            case bild23:
                $("div.weiss").text("Die Abessinier...");
                break;
            case bild24:
                $("div.weiss").text("Die California Spangled");
                break;
            case bild25:
                $("div.weiss").text("Die Ägyptische Mau...");
                break;
            case bild26:
                $("div.weiss").text("Die Ocicat...");
                break;
            case bild27:
                $("div.weiss").text("Die Bengalkatze...");
                break;
            case bild28:
                $("div.weiss").text("Die Sokoke...");
                break;
            case bild29:
                $("div.weiss").text("Die Maine Coon...");
                break;
            default:
                alert("Dieses Tier gibt es nicht");

        }
    });



});