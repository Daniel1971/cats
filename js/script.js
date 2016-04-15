$(document).ready(function() {

    $("#button1").click(function () {

        var jsonURL = "data/data.json";
        $.getJSON(jsonURL, function (json) {
            var imgList = "";

            $.each(json.pictures, function () {

                imgList += '<li><img src= " ' + this.url + '" style="width: 244px; height: 211px;"></li>';
            });

            console.log(imgList);
            $("#sprungziel").append(imgList);


        });

    });

});
