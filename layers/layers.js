var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Unionfile_1 = new ol.format.GeoJSON();
var features_Unionfile_1 = format_Unionfile_1.readFeatures(json_Unionfile_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unionfile_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unionfile_1.addFeatures(features_Unionfile_1);
var lyr_Unionfile_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Unionfile_1, 
                style: style_Unionfile_1,
                interactive: true,
                title: '<img src="styles/legend/Unionfile_1.png" /> Unionfile'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Unionfile_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Unionfile_1];
lyr_Unionfile_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Name_2': 'Name_2', 'descript_1': 'descript_1', 'timestamp_': 'timestamp_', 'begin_2': 'begin_2', 'end_2': 'end_2', 'altitude_1': 'altitude_1', 'tessella_1': 'tessella_1', 'extrude_2': 'extrude_2', 'visibili_1': 'visibili_1', 'drawOrder_': 'drawOrder_', 'icon_2': 'icon_2', });
lyr_Unionfile_1.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'Name_2': '', 'descript_1': '', 'timestamp_': '', 'begin_2': '', 'end_2': '', 'altitude_1': '', 'tessella_1': '', 'extrude_2': '', 'visibili_1': '', 'drawOrder_': '', 'icon_2': '', });
lyr_Unionfile_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Name_2': 'no label', 'descript_1': 'no label', 'timestamp_': 'no label', 'begin_2': 'no label', 'end_2': 'no label', 'altitude_1': 'no label', 'tessella_1': 'no label', 'extrude_2': 'no label', 'visibili_1': 'no label', 'drawOrder_': 'no label', 'icon_2': 'no label', });
lyr_Unionfile_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});