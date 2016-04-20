$(document).ready(function() {

    /* Bildausgabe mit Text Seite 5 */

    $("span.genericon.genericon-downarrow").on("click", function () {
        $("div.weiss").remove();
        var beschrieb = "<div class='weiss'>Hier sollte der Text stehen!</div>";
        $(this.parentElement).append(beschrieb);
        switch (this.parentElement) {


            case bild49:
                $("div.weiss").text("Die American Wirehair...");
                break;
            case bild50:
                $("div.weiss").text("Die German Rex...");
                break;
            case bild51:
                $("div.weiss").text("Die Cornish Rex...");
                break;
            case bild52:
                $("div.weiss").text("Die Devon Rex...");
                break;
            case bild53:
                $("div.weiss").text("Die Selkirk Rex...");
                break;
            case bild54:
                $("div.weiss").text("Die Pudelkatze...");
                break;
            case bild55:
                $("div.weiss").text("Die Sphynx...");
                break;
            default:
                alert("Dieses Tier gibt es nicht");

        }
    });


});












