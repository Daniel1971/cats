$(document).ready(function () {

    $("#button1").on("click", function () {

        var jsonURL = "data/data.json";
        $.getJSON(jsonURL, function (json)
        {
            var imgList= "";

            $.each(json.bilder, function () {
                imgList += '<img src= "' + this.imgPath + '">';

            });

            $("#sprungziel").append(imgList);

        });
    });

});