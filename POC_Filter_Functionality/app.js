$(document).ready(function(){
    var details = {
        "Data cable": 100, 
        "Computer Mouse": 300, 
        "web Cam": 600, 
        "Laptop Bag": 500, 
        "Mobile charger": 1000, 
        "Laptop charger": 1200, 
        "Memory card": 800, 
        "Basic mobile": 1100, 
        "camera-battery": 1500, 
        "Earphone": 2000, 
        "Game Cd's": 1800, 
        "Wireless Charger": 1300, 
    };

    $( "#mySlider" ).slider({range: true, min: 0, max: 2000, values: [ 0, 500 ],
        change: (event, ui) => {
            getDetails(ui.values[0], ui.values[1]);
        }
    });
    let current = $("#mySlider").slider("option", "values");
    getDetails(current[0], current[1]);
   
    function getDetails(minimum, maximum){
        $("#range").text("Rs - " + minimum + " To " + "Rs - " + maximum);
        var result = `
    <div class="container mt-4">
        <div class="row">
            <div class="col-6 border">
                Product Name
            </div>
            <div class="col-6 border">
                Price in Rs
            </div>
        </div>
    </div>
        `
        for(var item in details){
            if(details[item] >= minimum && details[item] <= maximum){
                result += "<div class='container'><div class='row'><div class='col-6 border mt-3'>" + item + "</div><div class='col-6 border mt-3'>" + details[item] + "</div></div></div>"
            }
        }
        $("#output").html(result);
    };
});
