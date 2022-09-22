var size = 0;
var placement = 'point';

var style_Countrynames_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    ''
    var labelText = "";
    size = 0;
    var labelFont = "15.600000000000001px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("NAME") !== null) {
        labelText = String(feature.get("NAME"));
    }
    
    var style = [ new ol.style.Style({
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth)
    })];;

    return style;
};
