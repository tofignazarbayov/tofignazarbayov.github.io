ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-180.124700, -90.000000, 180.125300, 87.511000]);
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
                title: 'Country names'
            });
var lyr_Landslideriskmap_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Landslide risk map",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Landslideriskmap_2.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [-158.124700, -44.989000, 180.125300, 61.261000]
                            })
                        });
var lyr_Floodriskmap_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Flood risk map",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Floodriskmap_3.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [-158.624700, -46.239000, 180.125300, 65.261000]
                            })
                        });
var format_Tectonicplateboundaries_4 = new ol.format.GeoJSON();
var features_Tectonicplateboundaries_4 = format_Tectonicplateboundaries_4.readFeatures(json_Tectonicplateboundaries_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Tectonicplateboundaries_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tectonicplateboundaries_4.addFeatures(features_Tectonicplateboundaries_4);
var lyr_Tectonicplateboundaries_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tectonicplateboundaries_4, 
                style: style_Tectonicplateboundaries_4,
                interactive: true,
                title: '<img src="styles/legend/Tectonicplateboundaries_4.png" /> Tectonic plate boundaries'
            });
var format_Faults_5 = new ol.format.GeoJSON();
var features_Faults_5 = format_Faults_5.readFeatures(json_Faults_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Faults_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Faults_5.addFeatures(features_Faults_5);
var lyr_Faults_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Faults_5, 
                style: style_Faults_5,
                interactive: true,
                title: '<img src="styles/legend/Faults_5.png" /> Faults'
            });
var lyr_Seismicriskmap_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Seismic risk map",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Seismicriskmap_6.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [-180.124700, -73.989000, 180.125300, 87.511000]
                            })
                        });
var group_Web = new ol.layer.Group({
                                layers: [lyr_Countries_0,lyr_Countrynames_1,lyr_Landslideriskmap_2,lyr_Floodriskmap_3,lyr_Tectonicplateboundaries_4,lyr_Faults_5,lyr_Seismicriskmap_6,],
                                title: "Web"});

lyr_Countries_0.setVisible(true);lyr_Countrynames_1.setVisible(true);lyr_Landslideriskmap_2.setVisible(true);lyr_Floodriskmap_3.setVisible(true);lyr_Tectonicplateboundaries_4.setVisible(true);lyr_Faults_5.setVisible(true);lyr_Seismicriskmap_6.setVisible(true);
var layersList = [group_Web];
lyr_Countries_0.set('fieldAliases', {'featurecla': 'featurecla', 'scalerank': 'scalerank', 'LABELRANK': 'LABELRANK', 'SOVEREIGNT': 'SOVEREIGNT', 'SOV_A3': 'SOV_A3', 'ADM0_DIF': 'ADM0_DIF', 'LEVEL': 'LEVEL', 'TYPE': 'TYPE', 'TLC': 'TLC', 'ADMIN': 'ADMIN', 'ADM0_A3': 'ADM0_A3', 'GEOU_DIF': 'GEOU_DIF', 'GEOUNIT': 'GEOUNIT', 'GU_A3': 'GU_A3', 'SU_DIF': 'SU_DIF', 'SUBUNIT': 'SUBUNIT', 'SU_A3': 'SU_A3', 'BRK_DIFF': 'BRK_DIFF', 'NAME': 'NAME', 'NAME_LONG': 'NAME_LONG', 'BRK_A3': 'BRK_A3', 'BRK_NAME': 'BRK_NAME', 'BRK_GROUP': 'BRK_GROUP', 'ABBREV': 'ABBREV', 'POSTAL': 'POSTAL', 'FORMAL_EN': 'FORMAL_EN', 'FORMAL_FR': 'FORMAL_FR', 'NAME_CIAWF': 'NAME_CIAWF', 'NOTE_ADM0': 'NOTE_ADM0', 'NOTE_BRK': 'NOTE_BRK', 'NAME_SORT': 'NAME_SORT', 'NAME_ALT': 'NAME_ALT', 'MAPCOLOR7': 'MAPCOLOR7', 'MAPCOLOR8': 'MAPCOLOR8', 'MAPCOLOR9': 'MAPCOLOR9', 'MAPCOLOR13': 'MAPCOLOR13', 'POP_EST': 'POP_EST', 'POP_RANK': 'POP_RANK', 'POP_YEAR': 'POP_YEAR', 'GDP_MD': 'GDP_MD', 'GDP_YEAR': 'GDP_YEAR', 'ECONOMY': 'ECONOMY', 'INCOME_GRP': 'INCOME_GRP', 'FIPS_10': 'FIPS_10', 'ISO_A2': 'ISO_A2', 'ISO_A2_EH': 'ISO_A2_EH', 'ISO_A3': 'ISO_A3', 'ISO_A3_EH': 'ISO_A3_EH', 'ISO_N3': 'ISO_N3', 'ISO_N3_EH': 'ISO_N3_EH', 'UN_A3': 'UN_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'WOE_ID': 'WOE_ID', 'WOE_ID_EH': 'WOE_ID_EH', 'WOE_NOTE': 'WOE_NOTE', 'ADM0_ISO': 'ADM0_ISO', 'ADM0_DIFF': 'ADM0_DIFF', 'ADM0_TLC': 'ADM0_TLC', 'ADM0_A3_US': 'ADM0_A3_US', 'ADM0_A3_FR': 'ADM0_A3_FR', 'ADM0_A3_RU': 'ADM0_A3_RU', 'ADM0_A3_ES': 'ADM0_A3_ES', 'ADM0_A3_CN': 'ADM0_A3_CN', 'ADM0_A3_TW': 'ADM0_A3_TW', 'ADM0_A3_IN': 'ADM0_A3_IN', 'ADM0_A3_NP': 'ADM0_A3_NP', 'ADM0_A3_PK': 'ADM0_A3_PK', 'ADM0_A3_DE': 'ADM0_A3_DE', 'ADM0_A3_GB': 'ADM0_A3_GB', 'ADM0_A3_BR': 'ADM0_A3_BR', 'ADM0_A3_IL': 'ADM0_A3_IL', 'ADM0_A3_PS': 'ADM0_A3_PS', 'ADM0_A3_SA': 'ADM0_A3_SA', 'ADM0_A3_EG': 'ADM0_A3_EG', 'ADM0_A3_MA': 'ADM0_A3_MA', 'ADM0_A3_PT': 'ADM0_A3_PT', 'ADM0_A3_AR': 'ADM0_A3_AR', 'ADM0_A3_JP': 'ADM0_A3_JP', 'ADM0_A3_KO': 'ADM0_A3_KO', 'ADM0_A3_VN': 'ADM0_A3_VN', 'ADM0_A3_TR': 'ADM0_A3_TR', 'ADM0_A3_ID': 'ADM0_A3_ID', 'ADM0_A3_PL': 'ADM0_A3_PL', 'ADM0_A3_GR': 'ADM0_A3_GR', 'ADM0_A3_IT': 'ADM0_A3_IT', 'ADM0_A3_NL': 'ADM0_A3_NL', 'ADM0_A3_SE': 'ADM0_A3_SE', 'ADM0_A3_BD': 'ADM0_A3_BD', 'ADM0_A3_UA': 'ADM0_A3_UA', 'ADM0_A3_UN': 'ADM0_A3_UN', 'ADM0_A3_WB': 'ADM0_A3_WB', 'CONTINENT': 'CONTINENT', 'REGION_UN': 'REGION_UN', 'SUBREGION': 'SUBREGION', 'REGION_WB': 'REGION_WB', 'NAME_LEN': 'NAME_LEN', 'LONG_LEN': 'LONG_LEN', 'ABBREV_LEN': 'ABBREV_LEN', 'TINY': 'TINY', 'HOMEPART': 'HOMEPART', 'MIN_ZOOM': 'MIN_ZOOM', 'MIN_LABEL': 'MIN_LABEL', 'MAX_LABEL': 'MAX_LABEL', 'LABEL_X': 'LABEL_X', 'LABEL_Y': 'LABEL_Y', 'NE_ID': 'NE_ID', 'WIKIDATAID': 'WIKIDATAID', 'NAME_AR': 'NAME_AR', 'NAME_BN': 'NAME_BN', 'NAME_DE': 'NAME_DE', 'NAME_EN': 'NAME_EN', 'NAME_ES': 'NAME_ES', 'NAME_FA': 'NAME_FA', 'NAME_FR': 'NAME_FR', 'NAME_EL': 'NAME_EL', 'NAME_HE': 'NAME_HE', 'NAME_HI': 'NAME_HI', 'NAME_HU': 'NAME_HU', 'NAME_ID': 'NAME_ID', 'NAME_IT': 'NAME_IT', 'NAME_JA': 'NAME_JA', 'NAME_KO': 'NAME_KO', 'NAME_NL': 'NAME_NL', 'NAME_PL': 'NAME_PL', 'NAME_PT': 'NAME_PT', 'NAME_RU': 'NAME_RU', 'NAME_SV': 'NAME_SV', 'NAME_TR': 'NAME_TR', 'NAME_UK': 'NAME_UK', 'NAME_UR': 'NAME_UR', 'NAME_VI': 'NAME_VI', 'NAME_ZH': 'NAME_ZH', 'NAME_ZHT': 'NAME_ZHT', 'FCLASS_ISO': 'FCLASS_ISO', 'TLC_DIFF': 'TLC_DIFF', 'FCLASS_TLC': 'FCLASS_TLC', 'FCLASS_US': 'FCLASS_US', 'FCLASS_FR': 'FCLASS_FR', 'FCLASS_RU': 'FCLASS_RU', 'FCLASS_ES': 'FCLASS_ES', 'FCLASS_CN': 'FCLASS_CN', 'FCLASS_TW': 'FCLASS_TW', 'FCLASS_IN': 'FCLASS_IN', 'FCLASS_NP': 'FCLASS_NP', 'FCLASS_PK': 'FCLASS_PK', 'FCLASS_DE': 'FCLASS_DE', 'FCLASS_GB': 'FCLASS_GB', 'FCLASS_BR': 'FCLASS_BR', 'FCLASS_IL': 'FCLASS_IL', 'FCLASS_PS': 'FCLASS_PS', 'FCLASS_SA': 'FCLASS_SA', 'FCLASS_EG': 'FCLASS_EG', 'FCLASS_MA': 'FCLASS_MA', 'FCLASS_PT': 'FCLASS_PT', 'FCLASS_AR': 'FCLASS_AR', 'FCLASS_JP': 'FCLASS_JP', 'FCLASS_KO': 'FCLASS_KO', 'FCLASS_VN': 'FCLASS_VN', 'FCLASS_TR': 'FCLASS_TR', 'FCLASS_ID': 'FCLASS_ID', 'FCLASS_PL': 'FCLASS_PL', 'FCLASS_GR': 'FCLASS_GR', 'FCLASS_IT': 'FCLASS_IT', 'FCLASS_NL': 'FCLASS_NL', 'FCLASS_SE': 'FCLASS_SE', 'FCLASS_BD': 'FCLASS_BD', 'FCLASS_UA': 'FCLASS_UA', });
lyr_Countrynames_1.set('fieldAliases', {'featurecla': 'featurecla', 'scalerank': 'scalerank', 'LABELRANK': 'LABELRANK', 'SOVEREIGNT': 'SOVEREIGNT', 'SOV_A3': 'SOV_A3', 'ADM0_DIF': 'ADM0_DIF', 'LEVEL': 'LEVEL', 'TYPE': 'TYPE', 'TLC': 'TLC', 'ADMIN': 'ADMIN', 'ADM0_A3': 'ADM0_A3', 'GEOU_DIF': 'GEOU_DIF', 'GEOUNIT': 'GEOUNIT', 'GU_A3': 'GU_A3', 'SU_DIF': 'SU_DIF', 'SUBUNIT': 'SUBUNIT', 'SU_A3': 'SU_A3', 'BRK_DIFF': 'BRK_DIFF', 'NAME': 'NAME', 'NAME_LONG': 'NAME_LONG', 'BRK_A3': 'BRK_A3', 'BRK_NAME': 'BRK_NAME', 'BRK_GROUP': 'BRK_GROUP', 'ABBREV': 'ABBREV', 'POSTAL': 'POSTAL', 'FORMAL_EN': 'FORMAL_EN', 'FORMAL_FR': 'FORMAL_FR', 'NAME_CIAWF': 'NAME_CIAWF', 'NOTE_ADM0': 'NOTE_ADM0', 'NOTE_BRK': 'NOTE_BRK', 'NAME_SORT': 'NAME_SORT', 'NAME_ALT': 'NAME_ALT', 'MAPCOLOR7': 'MAPCOLOR7', 'MAPCOLOR8': 'MAPCOLOR8', 'MAPCOLOR9': 'MAPCOLOR9', 'MAPCOLOR13': 'MAPCOLOR13', 'POP_EST': 'POP_EST', 'POP_RANK': 'POP_RANK', 'POP_YEAR': 'POP_YEAR', 'GDP_MD': 'GDP_MD', 'GDP_YEAR': 'GDP_YEAR', 'ECONOMY': 'ECONOMY', 'INCOME_GRP': 'INCOME_GRP', 'FIPS_10': 'FIPS_10', 'ISO_A2': 'ISO_A2', 'ISO_A2_EH': 'ISO_A2_EH', 'ISO_A3': 'ISO_A3', 'ISO_A3_EH': 'ISO_A3_EH', 'ISO_N3': 'ISO_N3', 'ISO_N3_EH': 'ISO_N3_EH', 'UN_A3': 'UN_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'WOE_ID': 'WOE_ID', 'WOE_ID_EH': 'WOE_ID_EH', 'WOE_NOTE': 'WOE_NOTE', 'ADM0_ISO': 'ADM0_ISO', 'ADM0_DIFF': 'ADM0_DIFF', 'ADM0_TLC': 'ADM0_TLC', 'ADM0_A3_US': 'ADM0_A3_US', 'ADM0_A3_FR': 'ADM0_A3_FR', 'ADM0_A3_RU': 'ADM0_A3_RU', 'ADM0_A3_ES': 'ADM0_A3_ES', 'ADM0_A3_CN': 'ADM0_A3_CN', 'ADM0_A3_TW': 'ADM0_A3_TW', 'ADM0_A3_IN': 'ADM0_A3_IN', 'ADM0_A3_NP': 'ADM0_A3_NP', 'ADM0_A3_PK': 'ADM0_A3_PK', 'ADM0_A3_DE': 'ADM0_A3_DE', 'ADM0_A3_GB': 'ADM0_A3_GB', 'ADM0_A3_BR': 'ADM0_A3_BR', 'ADM0_A3_IL': 'ADM0_A3_IL', 'ADM0_A3_PS': 'ADM0_A3_PS', 'ADM0_A3_SA': 'ADM0_A3_SA', 'ADM0_A3_EG': 'ADM0_A3_EG', 'ADM0_A3_MA': 'ADM0_A3_MA', 'ADM0_A3_PT': 'ADM0_A3_PT', 'ADM0_A3_AR': 'ADM0_A3_AR', 'ADM0_A3_JP': 'ADM0_A3_JP', 'ADM0_A3_KO': 'ADM0_A3_KO', 'ADM0_A3_VN': 'ADM0_A3_VN', 'ADM0_A3_TR': 'ADM0_A3_TR', 'ADM0_A3_ID': 'ADM0_A3_ID', 'ADM0_A3_PL': 'ADM0_A3_PL', 'ADM0_A3_GR': 'ADM0_A3_GR', 'ADM0_A3_IT': 'ADM0_A3_IT', 'ADM0_A3_NL': 'ADM0_A3_NL', 'ADM0_A3_SE': 'ADM0_A3_SE', 'ADM0_A3_BD': 'ADM0_A3_BD', 'ADM0_A3_UA': 'ADM0_A3_UA', 'ADM0_A3_UN': 'ADM0_A3_UN', 'ADM0_A3_WB': 'ADM0_A3_WB', 'CONTINENT': 'CONTINENT', 'REGION_UN': 'REGION_UN', 'SUBREGION': 'SUBREGION', 'REGION_WB': 'REGION_WB', 'NAME_LEN': 'NAME_LEN', 'LONG_LEN': 'LONG_LEN', 'ABBREV_LEN': 'ABBREV_LEN', 'TINY': 'TINY', 'HOMEPART': 'HOMEPART', 'MIN_ZOOM': 'MIN_ZOOM', 'MIN_LABEL': 'MIN_LABEL', 'MAX_LABEL': 'MAX_LABEL', 'LABEL_X': 'LABEL_X', 'LABEL_Y': 'LABEL_Y', 'NE_ID': 'NE_ID', 'WIKIDATAID': 'WIKIDATAID', 'NAME_AR': 'NAME_AR', 'NAME_BN': 'NAME_BN', 'NAME_DE': 'NAME_DE', 'NAME_EN': 'NAME_EN', 'NAME_ES': 'NAME_ES', 'NAME_FA': 'NAME_FA', 'NAME_FR': 'NAME_FR', 'NAME_EL': 'NAME_EL', 'NAME_HE': 'NAME_HE', 'NAME_HI': 'NAME_HI', 'NAME_HU': 'NAME_HU', 'NAME_ID': 'NAME_ID', 'NAME_IT': 'NAME_IT', 'NAME_JA': 'NAME_JA', 'NAME_KO': 'NAME_KO', 'NAME_NL': 'NAME_NL', 'NAME_PL': 'NAME_PL', 'NAME_PT': 'NAME_PT', 'NAME_RU': 'NAME_RU', 'NAME_SV': 'NAME_SV', 'NAME_TR': 'NAME_TR', 'NAME_UK': 'NAME_UK', 'NAME_UR': 'NAME_UR', 'NAME_VI': 'NAME_VI', 'NAME_ZH': 'NAME_ZH', 'NAME_ZHT': 'NAME_ZHT', 'FCLASS_ISO': 'FCLASS_ISO', 'TLC_DIFF': 'TLC_DIFF', 'FCLASS_TLC': 'FCLASS_TLC', 'FCLASS_US': 'FCLASS_US', 'FCLASS_FR': 'FCLASS_FR', 'FCLASS_RU': 'FCLASS_RU', 'FCLASS_ES': 'FCLASS_ES', 'FCLASS_CN': 'FCLASS_CN', 'FCLASS_TW': 'FCLASS_TW', 'FCLASS_IN': 'FCLASS_IN', 'FCLASS_NP': 'FCLASS_NP', 'FCLASS_PK': 'FCLASS_PK', 'FCLASS_DE': 'FCLASS_DE', 'FCLASS_GB': 'FCLASS_GB', 'FCLASS_BR': 'FCLASS_BR', 'FCLASS_IL': 'FCLASS_IL', 'FCLASS_PS': 'FCLASS_PS', 'FCLASS_SA': 'FCLASS_SA', 'FCLASS_EG': 'FCLASS_EG', 'FCLASS_MA': 'FCLASS_MA', 'FCLASS_PT': 'FCLASS_PT', 'FCLASS_AR': 'FCLASS_AR', 'FCLASS_JP': 'FCLASS_JP', 'FCLASS_KO': 'FCLASS_KO', 'FCLASS_VN': 'FCLASS_VN', 'FCLASS_TR': 'FCLASS_TR', 'FCLASS_ID': 'FCLASS_ID', 'FCLASS_PL': 'FCLASS_PL', 'FCLASS_GR': 'FCLASS_GR', 'FCLASS_IT': 'FCLASS_IT', 'FCLASS_NL': 'FCLASS_NL', 'FCLASS_SE': 'FCLASS_SE', 'FCLASS_BD': 'FCLASS_BD', 'FCLASS_UA': 'FCLASS_UA', });
lyr_Tectonicplateboundaries_4.set('fieldAliases', {'LAYER': 'LAYER', 'Name': 'Name', 'Source': 'Source', 'PlateA': 'PlateA', 'PlateB': 'PlateB', 'Type': 'Type', });
lyr_Faults_5.set('fieldAliases', {'WKT_GEOMET': 'WKT_GEOMET', 'accuracy': 'accuracy', 'activity_c': 'activity_c', 'average_di': 'average_di', 'average_ra': 'average_ra', 'catalog_id': 'catalog_id', 'catalog_na': 'catalog_na', 'dip_dir': 'dip_dir', 'downthrown': 'downthrown', 'downthro_1': 'downthro_1', 'epistemic_': 'epistemic_', 'exposure_q': 'exposure_q', 'fs_name': 'fs_name', 'is_active': 'is_active', 'last_movem': 'last_movem', 'lower_seis': 'lower_seis', 'name': 'name', 'net_slip_r': 'net_slip_r', 'notes': 'notes', 'ogc_fid': 'ogc_fid', 'reference': 'reference', 'shortening': 'shortening', 'slip_type': 'slip_type', 'strike_sli': 'strike_sli', 'upper_seis': 'upper_seis', 'vert_sep_r': 'vert_sep_r', });
lyr_Countries_0.set('fieldImages', {'featurecla': 'TextEdit', 'scalerank': 'Range', 'LABELRANK': 'Range', 'SOVEREIGNT': 'TextEdit', 'SOV_A3': 'TextEdit', 'ADM0_DIF': 'Range', 'LEVEL': 'Range', 'TYPE': 'TextEdit', 'TLC': 'TextEdit', 'ADMIN': 'TextEdit', 'ADM0_A3': 'TextEdit', 'GEOU_DIF': 'Range', 'GEOUNIT': 'TextEdit', 'GU_A3': 'TextEdit', 'SU_DIF': 'Range', 'SUBUNIT': 'TextEdit', 'SU_A3': 'TextEdit', 'BRK_DIFF': 'Range', 'NAME': 'TextEdit', 'NAME_LONG': 'TextEdit', 'BRK_A3': 'TextEdit', 'BRK_NAME': 'TextEdit', 'BRK_GROUP': 'TextEdit', 'ABBREV': 'TextEdit', 'POSTAL': 'TextEdit', 'FORMAL_EN': 'TextEdit', 'FORMAL_FR': 'TextEdit', 'NAME_CIAWF': 'TextEdit', 'NOTE_ADM0': 'TextEdit', 'NOTE_BRK': 'TextEdit', 'NAME_SORT': 'TextEdit', 'NAME_ALT': 'TextEdit', 'MAPCOLOR7': 'Range', 'MAPCOLOR8': 'Range', 'MAPCOLOR9': 'Range', 'MAPCOLOR13': 'Range', 'POP_EST': 'TextEdit', 'POP_RANK': 'Range', 'POP_YEAR': 'Range', 'GDP_MD': 'Range', 'GDP_YEAR': 'Range', 'ECONOMY': 'TextEdit', 'INCOME_GRP': 'TextEdit', 'FIPS_10': 'TextEdit', 'ISO_A2': 'TextEdit', 'ISO_A2_EH': 'TextEdit', 'ISO_A3': 'TextEdit', 'ISO_A3_EH': 'TextEdit', 'ISO_N3': 'TextEdit', 'ISO_N3_EH': 'TextEdit', 'UN_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'WOE_ID': 'Range', 'WOE_ID_EH': 'Range', 'WOE_NOTE': 'TextEdit', 'ADM0_ISO': 'TextEdit', 'ADM0_DIFF': 'TextEdit', 'ADM0_TLC': 'TextEdit', 'ADM0_A3_US': 'TextEdit', 'ADM0_A3_FR': 'TextEdit', 'ADM0_A3_RU': 'TextEdit', 'ADM0_A3_ES': 'TextEdit', 'ADM0_A3_CN': 'TextEdit', 'ADM0_A3_TW': 'TextEdit', 'ADM0_A3_IN': 'TextEdit', 'ADM0_A3_NP': 'TextEdit', 'ADM0_A3_PK': 'TextEdit', 'ADM0_A3_DE': 'TextEdit', 'ADM0_A3_GB': 'TextEdit', 'ADM0_A3_BR': 'TextEdit', 'ADM0_A3_IL': 'TextEdit', 'ADM0_A3_PS': 'TextEdit', 'ADM0_A3_SA': 'TextEdit', 'ADM0_A3_EG': 'TextEdit', 'ADM0_A3_MA': 'TextEdit', 'ADM0_A3_PT': 'TextEdit', 'ADM0_A3_AR': 'TextEdit', 'ADM0_A3_JP': 'TextEdit', 'ADM0_A3_KO': 'TextEdit', 'ADM0_A3_VN': 'TextEdit', 'ADM0_A3_TR': 'TextEdit', 'ADM0_A3_ID': 'TextEdit', 'ADM0_A3_PL': 'TextEdit', 'ADM0_A3_GR': 'TextEdit', 'ADM0_A3_IT': 'TextEdit', 'ADM0_A3_NL': 'TextEdit', 'ADM0_A3_SE': 'TextEdit', 'ADM0_A3_BD': 'TextEdit', 'ADM0_A3_UA': 'TextEdit', 'ADM0_A3_UN': 'Range', 'ADM0_A3_WB': 'Range', 'CONTINENT': 'TextEdit', 'REGION_UN': 'TextEdit', 'SUBREGION': 'TextEdit', 'REGION_WB': 'TextEdit', 'NAME_LEN': 'Range', 'LONG_LEN': 'Range', 'ABBREV_LEN': 'Range', 'TINY': 'Range', 'HOMEPART': 'Range', 'MIN_ZOOM': 'TextEdit', 'MIN_LABEL': 'TextEdit', 'MAX_LABEL': 'TextEdit', 'LABEL_X': 'TextEdit', 'LABEL_Y': 'TextEdit', 'NE_ID': 'TextEdit', 'WIKIDATAID': 'TextEdit', 'NAME_AR': 'TextEdit', 'NAME_BN': 'TextEdit', 'NAME_DE': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_ES': 'TextEdit', 'NAME_FA': 'TextEdit', 'NAME_FR': 'TextEdit', 'NAME_EL': 'TextEdit', 'NAME_HE': 'TextEdit', 'NAME_HI': 'TextEdit', 'NAME_HU': 'TextEdit', 'NAME_ID': 'TextEdit', 'NAME_IT': 'TextEdit', 'NAME_JA': 'TextEdit', 'NAME_KO': 'TextEdit', 'NAME_NL': 'TextEdit', 'NAME_PL': 'TextEdit', 'NAME_PT': 'TextEdit', 'NAME_RU': 'TextEdit', 'NAME_SV': 'TextEdit', 'NAME_TR': 'TextEdit', 'NAME_UK': 'TextEdit', 'NAME_UR': 'TextEdit', 'NAME_VI': 'TextEdit', 'NAME_ZH': 'TextEdit', 'NAME_ZHT': 'TextEdit', 'FCLASS_ISO': 'TextEdit', 'TLC_DIFF': 'TextEdit', 'FCLASS_TLC': 'TextEdit', 'FCLASS_US': 'TextEdit', 'FCLASS_FR': 'TextEdit', 'FCLASS_RU': 'TextEdit', 'FCLASS_ES': 'TextEdit', 'FCLASS_CN': 'TextEdit', 'FCLASS_TW': 'TextEdit', 'FCLASS_IN': 'TextEdit', 'FCLASS_NP': 'TextEdit', 'FCLASS_PK': 'TextEdit', 'FCLASS_DE': 'TextEdit', 'FCLASS_GB': 'TextEdit', 'FCLASS_BR': 'TextEdit', 'FCLASS_IL': 'TextEdit', 'FCLASS_PS': 'TextEdit', 'FCLASS_SA': 'TextEdit', 'FCLASS_EG': 'TextEdit', 'FCLASS_MA': 'TextEdit', 'FCLASS_PT': 'TextEdit', 'FCLASS_AR': 'TextEdit', 'FCLASS_JP': 'TextEdit', 'FCLASS_KO': 'TextEdit', 'FCLASS_VN': 'TextEdit', 'FCLASS_TR': 'TextEdit', 'FCLASS_ID': 'TextEdit', 'FCLASS_PL': 'TextEdit', 'FCLASS_GR': 'TextEdit', 'FCLASS_IT': 'TextEdit', 'FCLASS_NL': 'TextEdit', 'FCLASS_SE': 'TextEdit', 'FCLASS_BD': 'TextEdit', 'FCLASS_UA': 'TextEdit', });
lyr_Countrynames_1.set('fieldImages', {'featurecla': 'TextEdit', 'scalerank': 'Range', 'LABELRANK': 'Range', 'SOVEREIGNT': 'TextEdit', 'SOV_A3': 'TextEdit', 'ADM0_DIF': 'Range', 'LEVEL': 'Range', 'TYPE': 'TextEdit', 'TLC': 'TextEdit', 'ADMIN': 'TextEdit', 'ADM0_A3': 'TextEdit', 'GEOU_DIF': 'Range', 'GEOUNIT': 'TextEdit', 'GU_A3': 'TextEdit', 'SU_DIF': 'Range', 'SUBUNIT': 'TextEdit', 'SU_A3': 'TextEdit', 'BRK_DIFF': 'Range', 'NAME': 'TextEdit', 'NAME_LONG': 'TextEdit', 'BRK_A3': 'TextEdit', 'BRK_NAME': 'TextEdit', 'BRK_GROUP': 'TextEdit', 'ABBREV': 'TextEdit', 'POSTAL': 'TextEdit', 'FORMAL_EN': 'TextEdit', 'FORMAL_FR': 'TextEdit', 'NAME_CIAWF': 'TextEdit', 'NOTE_ADM0': 'TextEdit', 'NOTE_BRK': 'TextEdit', 'NAME_SORT': 'TextEdit', 'NAME_ALT': 'TextEdit', 'MAPCOLOR7': 'Range', 'MAPCOLOR8': 'Range', 'MAPCOLOR9': 'Range', 'MAPCOLOR13': 'Range', 'POP_EST': 'TextEdit', 'POP_RANK': 'Range', 'POP_YEAR': 'Range', 'GDP_MD': 'Range', 'GDP_YEAR': 'Range', 'ECONOMY': 'TextEdit', 'INCOME_GRP': 'TextEdit', 'FIPS_10': 'TextEdit', 'ISO_A2': 'TextEdit', 'ISO_A2_EH': 'TextEdit', 'ISO_A3': 'TextEdit', 'ISO_A3_EH': 'TextEdit', 'ISO_N3': 'TextEdit', 'ISO_N3_EH': 'TextEdit', 'UN_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'WOE_ID': 'Range', 'WOE_ID_EH': 'Range', 'WOE_NOTE': 'TextEdit', 'ADM0_ISO': 'TextEdit', 'ADM0_DIFF': 'TextEdit', 'ADM0_TLC': 'TextEdit', 'ADM0_A3_US': 'TextEdit', 'ADM0_A3_FR': 'TextEdit', 'ADM0_A3_RU': 'TextEdit', 'ADM0_A3_ES': 'TextEdit', 'ADM0_A3_CN': 'TextEdit', 'ADM0_A3_TW': 'TextEdit', 'ADM0_A3_IN': 'TextEdit', 'ADM0_A3_NP': 'TextEdit', 'ADM0_A3_PK': 'TextEdit', 'ADM0_A3_DE': 'TextEdit', 'ADM0_A3_GB': 'TextEdit', 'ADM0_A3_BR': 'TextEdit', 'ADM0_A3_IL': 'TextEdit', 'ADM0_A3_PS': 'TextEdit', 'ADM0_A3_SA': 'TextEdit', 'ADM0_A3_EG': 'TextEdit', 'ADM0_A3_MA': 'TextEdit', 'ADM0_A3_PT': 'TextEdit', 'ADM0_A3_AR': 'TextEdit', 'ADM0_A3_JP': 'TextEdit', 'ADM0_A3_KO': 'TextEdit', 'ADM0_A3_VN': 'TextEdit', 'ADM0_A3_TR': 'TextEdit', 'ADM0_A3_ID': 'TextEdit', 'ADM0_A3_PL': 'TextEdit', 'ADM0_A3_GR': 'TextEdit', 'ADM0_A3_IT': 'TextEdit', 'ADM0_A3_NL': 'TextEdit', 'ADM0_A3_SE': 'TextEdit', 'ADM0_A3_BD': 'TextEdit', 'ADM0_A3_UA': 'TextEdit', 'ADM0_A3_UN': 'Range', 'ADM0_A3_WB': 'Range', 'CONTINENT': 'TextEdit', 'REGION_UN': 'TextEdit', 'SUBREGION': 'TextEdit', 'REGION_WB': 'TextEdit', 'NAME_LEN': 'Range', 'LONG_LEN': 'Range', 'ABBREV_LEN': 'Range', 'TINY': 'Range', 'HOMEPART': 'Range', 'MIN_ZOOM': 'TextEdit', 'MIN_LABEL': 'TextEdit', 'MAX_LABEL': 'TextEdit', 'LABEL_X': 'TextEdit', 'LABEL_Y': 'TextEdit', 'NE_ID': 'TextEdit', 'WIKIDATAID': 'TextEdit', 'NAME_AR': 'TextEdit', 'NAME_BN': 'TextEdit', 'NAME_DE': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_ES': 'TextEdit', 'NAME_FA': 'TextEdit', 'NAME_FR': 'TextEdit', 'NAME_EL': 'TextEdit', 'NAME_HE': 'TextEdit', 'NAME_HI': 'TextEdit', 'NAME_HU': 'TextEdit', 'NAME_ID': 'TextEdit', 'NAME_IT': 'TextEdit', 'NAME_JA': 'TextEdit', 'NAME_KO': 'TextEdit', 'NAME_NL': 'TextEdit', 'NAME_PL': 'TextEdit', 'NAME_PT': 'TextEdit', 'NAME_RU': 'TextEdit', 'NAME_SV': 'TextEdit', 'NAME_TR': 'TextEdit', 'NAME_UK': 'TextEdit', 'NAME_UR': 'TextEdit', 'NAME_VI': 'TextEdit', 'NAME_ZH': 'TextEdit', 'NAME_ZHT': 'TextEdit', 'FCLASS_ISO': 'TextEdit', 'TLC_DIFF': 'TextEdit', 'FCLASS_TLC': 'TextEdit', 'FCLASS_US': 'TextEdit', 'FCLASS_FR': 'TextEdit', 'FCLASS_RU': 'TextEdit', 'FCLASS_ES': 'TextEdit', 'FCLASS_CN': 'TextEdit', 'FCLASS_TW': 'TextEdit', 'FCLASS_IN': 'TextEdit', 'FCLASS_NP': 'TextEdit', 'FCLASS_PK': 'TextEdit', 'FCLASS_DE': 'TextEdit', 'FCLASS_GB': 'TextEdit', 'FCLASS_BR': 'TextEdit', 'FCLASS_IL': 'TextEdit', 'FCLASS_PS': 'TextEdit', 'FCLASS_SA': 'TextEdit', 'FCLASS_EG': 'TextEdit', 'FCLASS_MA': 'TextEdit', 'FCLASS_PT': 'TextEdit', 'FCLASS_AR': 'TextEdit', 'FCLASS_JP': 'TextEdit', 'FCLASS_KO': 'TextEdit', 'FCLASS_VN': 'TextEdit', 'FCLASS_TR': 'TextEdit', 'FCLASS_ID': 'TextEdit', 'FCLASS_PL': 'TextEdit', 'FCLASS_GR': 'TextEdit', 'FCLASS_IT': 'TextEdit', 'FCLASS_NL': 'TextEdit', 'FCLASS_SE': 'TextEdit', 'FCLASS_BD': 'TextEdit', 'FCLASS_UA': 'TextEdit', });
lyr_Tectonicplateboundaries_4.set('fieldImages', {'LAYER': 'TextEdit', 'Name': 'TextEdit', 'Source': 'TextEdit', 'PlateA': 'TextEdit', 'PlateB': 'TextEdit', 'Type': 'TextEdit', });
lyr_Faults_5.set('fieldImages', {'WKT_GEOMET': 'TextEdit', 'accuracy': 'TextEdit', 'activity_c': 'TextEdit', 'average_di': 'TextEdit', 'average_ra': 'TextEdit', 'catalog_id': 'TextEdit', 'catalog_na': 'TextEdit', 'dip_dir': 'TextEdit', 'downthrown': 'TextEdit', 'downthro_1': 'TextEdit', 'epistemic_': 'TextEdit', 'exposure_q': 'TextEdit', 'fs_name': 'TextEdit', 'is_active': 'TextEdit', 'last_movem': 'TextEdit', 'lower_seis': 'TextEdit', 'name': 'TextEdit', 'net_slip_r': 'TextEdit', 'notes': 'TextEdit', 'ogc_fid': 'TextEdit', 'reference': 'TextEdit', 'shortening': 'TextEdit', 'slip_type': 'TextEdit', 'strike_sli': 'TextEdit', 'upper_seis': 'TextEdit', 'vert_sep_r': 'TextEdit', });
lyr_Countries_0.set('fieldLabels', {});
lyr_Countrynames_1.set('fieldLabels', {});
lyr_Tectonicplateboundaries_4.set('fieldLabels', {});
lyr_Faults_5.set('fieldLabels', {});
lyr_Faults_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});