ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-180.000000, -90.000000, 180.000300, 87.386000]);
var wms_layers = [];

var format_Countries_0 = new ol.format.GeoJSON();
var features_Countries_0 = format_Countries_0.readFeatures(json_Countries_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Countries_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Countries_0.addFeatures(features_Countries_0);
var lyr_Countries_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Countries_0, 
                style: style_Countries_0,
                interactive: true,
                title: '<img src="styles/legend/Countries_0.png" /> Countries'
            });
var format_Countrynames_1 = new ol.format.GeoJSON();
var features_Countrynames_1 = format_Countrynames_1.readFeatures(json_Countrynames_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Countrynames_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Countrynames_1.addFeatures(features_Countrynames_1);
var lyr_Countrynames_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Countrynames_1, 
                style: style_Countrynames_1,
                interactive: true,
                title: '<img src="styles/legend/Countrynames_1.png" /> Country names'
            });
var format_Faults_2 = new ol.format.GeoJSON();
var features_Faults_2 = format_Faults_2.readFeatures(json_Faults_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Faults_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Faults_2.addFeatures(features_Faults_2);
var lyr_Faults_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Faults_2, 
                style: style_Faults_2,
                interactive: true,
                title: '<img src="styles/legend/Faults_2.png" /> Faults'
            });
var format_Tectonicplateboundaries_3 = new ol.format.GeoJSON();
var features_Tectonicplateboundaries_3 = format_Tectonicplateboundaries_3.readFeatures(json_Tectonicplateboundaries_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Tectonicplateboundaries_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tectonicplateboundaries_3.addFeatures(features_Tectonicplateboundaries_3);
var lyr_Tectonicplateboundaries_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tectonicplateboundaries_3, 
                style: style_Tectonicplateboundaries_3,
                interactive: true,
                title: '<img src="styles/legend/Tectonicplateboundaries_3.png" /> Tectonic plate boundaries'
            });
var format_SeismicRisks_4 = new ol.format.GeoJSON();
var features_SeismicRisks_4 = format_SeismicRisks_4.readFeatures(json_SeismicRisks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SeismicRisks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SeismicRisks_4.addFeatures(features_SeismicRisks_4);
var lyr_SeismicRisks_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SeismicRisks_4, 
                style: style_SeismicRisks_4,
                interactive: true,
    title: 'Seismic Risks<br />\
    <img src="styles/legend/SeismicRisks_4_0.png" /> 0 - 0<br />\
    <img src="styles/legend/SeismicRisks_4_1.png" /> 0 - 3<br />\
    <img src="styles/legend/SeismicRisks_4_2.png" /> 3 - 6<br />\
    <img src="styles/legend/SeismicRisks_4_3.png" /> 6 - 9<br />\
    <img src="styles/legend/SeismicRisks_4_4.png" /> 9 - 12<br />'
        });
var format_FloodRisks_5 = new ol.format.GeoJSON();
var features_FloodRisks_5 = format_FloodRisks_5.readFeatures(json_FloodRisks_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FloodRisks_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FloodRisks_5.addFeatures(features_FloodRisks_5);
var lyr_FloodRisks_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FloodRisks_5, 
                style: style_FloodRisks_5,
                interactive: true,
    title: 'Flood Risks<br />\
    <img src="styles/legend/FloodRisks_5_0.png" /> 0 - 0<br />\
    <img src="styles/legend/FloodRisks_5_1.png" /> 0 - 3<br />\
    <img src="styles/legend/FloodRisks_5_2.png" /> 3 - 6<br />\
    <img src="styles/legend/FloodRisks_5_3.png" /> 6 - 9<br />\
    <img src="styles/legend/FloodRisks_5_4.png" /> 9 - 12<br />'
        });
var format_LandslideRisks_6 = new ol.format.GeoJSON();
var features_LandslideRisks_6 = format_LandslideRisks_6.readFeatures(json_LandslideRisks_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LandslideRisks_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandslideRisks_6.addFeatures(features_LandslideRisks_6);
var lyr_LandslideRisks_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LandslideRisks_6, 
                style: style_LandslideRisks_6,
                interactive: true,
    title: 'Landslide Risks<br />\
    <img src="styles/legend/LandslideRisks_6_0.png" /> 0 - 0<br />\
    <img src="styles/legend/LandslideRisks_6_1.png" /> 0 - 3<br />\
    <img src="styles/legend/LandslideRisks_6_2.png" /> 3 - 6<br />\
    <img src="styles/legend/LandslideRisks_6_3.png" /> 6 - 9<br />\
    <img src="styles/legend/LandslideRisks_6_4.png" /> 9 - 12<br />'
        });

lyr_Countries_0.setVisible(true);lyr_Countrynames_1.setVisible(false);lyr_Faults_2.setVisible(false);lyr_Tectonicplateboundaries_3.setVisible(false);lyr_SeismicRisks_4.setVisible(false);lyr_FloodRisks_5.setVisible(false);lyr_LandslideRisks_6.setVisible(false);
var layersList = [lyr_Countries_0,lyr_Countrynames_1,lyr_Faults_2,lyr_Tectonicplateboundaries_3,lyr_SeismicRisks_4,lyr_FloodRisks_5,lyr_LandslideRisks_6];
lyr_Countries_0.set('fieldAliases', {'NAME': 'NAME', });
lyr_Countrynames_1.set('fieldAliases', {'NAME': 'NAME', });
lyr_Faults_2.set('fieldAliases', {'name': 'name', 'slip_type': 'slip_type', });
lyr_Tectonicplateboundaries_3.set('fieldAliases', {'Name': 'Name', 'PlateA': 'PlateA', 'PlateB': 'PlateB', });
lyr_SeismicRisks_4.set('fieldAliases', {'fid': 'fid', 'Seismic Risk': 'Seismic Risk', });
lyr_FloodRisks_5.set('fieldAliases', {'fid': 'fid', 'Flood Risk': 'Flood Risk', });
lyr_LandslideRisks_6.set('fieldAliases', {'fid': 'fid', 'Landslide Risk': 'Landslide Risk', });
lyr_Countries_0.set('fieldImages', {'NAME': 'TextEdit', });
lyr_Countrynames_1.set('fieldImages', {'NAME': 'TextEdit', });
lyr_Faults_2.set('fieldImages', {'name': 'TextEdit', 'slip_type': 'TextEdit', });
lyr_Tectonicplateboundaries_3.set('fieldImages', {'Name': 'TextEdit', 'PlateA': 'TextEdit', 'PlateB': 'TextEdit', });
lyr_SeismicRisks_4.set('fieldImages', {'fid': 'TextEdit', 'Seismic Risk': 'TextEdit', });
lyr_FloodRisks_5.set('fieldImages', {'fid': 'TextEdit', 'Flood Risk': 'TextEdit', });
lyr_LandslideRisks_6.set('fieldImages', {'fid': 'TextEdit', 'Landslide Risk': 'TextEdit', });
lyr_Countries_0.set('fieldLabels', {'NAME': 'inline label', });
lyr_Countrynames_1.set('fieldLabels', {'NAME': 'inline label', });
lyr_Faults_2.set('fieldLabels', {'name': 'inline label', 'slip_type': 'inline label', });
lyr_Tectonicplateboundaries_3.set('fieldLabels', {'Name': 'inline label', 'PlateA': 'inline label', 'PlateB': 'inline label', });
lyr_SeismicRisks_4.set('fieldLabels', {'fid': 'inline label', 'Seismic Risk': 'inline label', });
lyr_FloodRisks_5.set('fieldLabels', {'fid': 'inline label', 'Flood Risk': 'inline label', });
lyr_LandslideRisks_6.set('fieldLabels', {'fid': 'inline label', 'Landslide Risk': 'inline label', });
lyr_LandslideRisks_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});