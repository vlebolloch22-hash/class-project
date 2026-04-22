var wms_layers = [];


        var lyr_mymap_0 = new ol.layer.Tile({
            'title': 'mymap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIWorldTopo_1 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleRoads_2 = new ol.layer.Tile({
            'title': 'Google Roads',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_3 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Schoolprojectpublic_4 = new ol.format.GeoJSON();
var features_Schoolprojectpublic_4 = format_Schoolprojectpublic_4.readFeatures(json_Schoolprojectpublic_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schoolprojectpublic_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schoolprojectpublic_4.addFeatures(features_Schoolprojectpublic_4);
var lyr_Schoolprojectpublic_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schoolprojectpublic_4, 
                style: style_Schoolprojectpublic_4,
                popuplayertitle: 'School project public',
                interactive: true,
                title: '<img src="styles/legend/Schoolprojectpublic_4.png" /> School project public'
            });
var format_CallePamplonaClimb_5 = new ol.format.GeoJSON();
var features_CallePamplonaClimb_5 = format_CallePamplonaClimb_5.readFeatures(json_CallePamplonaClimb_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CallePamplonaClimb_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CallePamplonaClimb_5.addFeatures(features_CallePamplonaClimb_5);
var lyr_CallePamplonaClimb_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CallePamplonaClimb_5, 
                style: style_CallePamplonaClimb_5,
                popuplayertitle: 'Calle Pamplona Climb',
                interactive: true,
                title: '<img src="styles/legend/CallePamplonaClimb_5.png" /> Calle Pamplona Climb'
            });
var format_BerniaClimb_6 = new ol.format.GeoJSON();
var features_BerniaClimb_6 = format_BerniaClimb_6.readFeatures(json_BerniaClimb_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BerniaClimb_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BerniaClimb_6.addFeatures(features_BerniaClimb_6);
var lyr_BerniaClimb_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BerniaClimb_6, 
                style: style_BerniaClimb_6,
                popuplayertitle: 'Bernia Climb',
                interactive: true,
                title: '<img src="styles/legend/BerniaClimb_6.png" /> Bernia Climb'
            });
var format_CarreteraDeDeniaClimb_7 = new ol.format.GeoJSON();
var features_CarreteraDeDeniaClimb_7 = format_CarreteraDeDeniaClimb_7.readFeatures(json_CarreteraDeDeniaClimb_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CarreteraDeDeniaClimb_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarreteraDeDeniaClimb_7.addFeatures(features_CarreteraDeDeniaClimb_7);
var lyr_CarreteraDeDeniaClimb_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CarreteraDeDeniaClimb_7, 
                style: style_CarreteraDeDeniaClimb_7,
                popuplayertitle: 'Carretera De Denia Climb',
                interactive: true,
                title: '<img src="styles/legend/CarreteraDeDeniaClimb_7.png" /> Carretera De Denia Climb'
            });
var format_CollDeRatesClimb_8 = new ol.format.GeoJSON();
var features_CollDeRatesClimb_8 = format_CollDeRatesClimb_8.readFeatures(json_CollDeRatesClimb_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CollDeRatesClimb_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CollDeRatesClimb_8.addFeatures(features_CollDeRatesClimb_8);
var lyr_CollDeRatesClimb_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CollDeRatesClimb_8, 
                style: style_CollDeRatesClimb_8,
                popuplayertitle: 'Coll De Rates Climb',
                interactive: true,
                title: '<img src="styles/legend/CollDeRatesClimb_8.png" /> Coll De Rates Climb'
            });
var format_CumbreDelSolClimb_9 = new ol.format.GeoJSON();
var features_CumbreDelSolClimb_9 = format_CumbreDelSolClimb_9.readFeatures(json_CumbreDelSolClimb_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CumbreDelSolClimb_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CumbreDelSolClimb_9.addFeatures(features_CumbreDelSolClimb_9);
var lyr_CumbreDelSolClimb_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CumbreDelSolClimb_9, 
                style: style_CumbreDelSolClimb_9,
                popuplayertitle: 'Cumbre Del Sol Climb',
                interactive: true,
                title: '<img src="styles/legend/CumbreDelSolClimb_9.png" /> Cumbre Del Sol Climb'
            });
var format_PilaretsClimb_10 = new ol.format.GeoJSON();
var features_PilaretsClimb_10 = format_PilaretsClimb_10.readFeatures(json_PilaretsClimb_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PilaretsClimb_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PilaretsClimb_10.addFeatures(features_PilaretsClimb_10);
var lyr_PilaretsClimb_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PilaretsClimb_10, 
                style: style_PilaretsClimb_10,
                popuplayertitle: 'Pilarets Climb',
                interactive: true,
                title: '<img src="styles/legend/PilaretsClimb_10.png" /> Pilarets Climb'
            });
var format_Schoolprojectpublictrack_points_11 = new ol.format.GeoJSON();
var features_Schoolprojectpublictrack_points_11 = format_Schoolprojectpublictrack_points_11.readFeatures(json_Schoolprojectpublictrack_points_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schoolprojectpublictrack_points_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schoolprojectpublictrack_points_11.addFeatures(features_Schoolprojectpublictrack_points_11);
var lyr_Schoolprojectpublictrack_points_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schoolprojectpublictrack_points_11, 
                style: style_Schoolprojectpublictrack_points_11,
                popuplayertitle: 'School project public — track_points',
                interactive: true,
                title: '<img src="styles/legend/Schoolprojectpublictrack_points_11.png" /> School project public — track_points'
            });
var format_Schoolprojectpublicwaypoints_12 = new ol.format.GeoJSON();
var features_Schoolprojectpublicwaypoints_12 = format_Schoolprojectpublicwaypoints_12.readFeatures(json_Schoolprojectpublicwaypoints_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schoolprojectpublicwaypoints_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schoolprojectpublicwaypoints_12.addFeatures(features_Schoolprojectpublicwaypoints_12);
var lyr_Schoolprojectpublicwaypoints_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schoolprojectpublicwaypoints_12, 
                style: style_Schoolprojectpublicwaypoints_12,
                popuplayertitle: 'School project public — waypoints',
                interactive: true,
                title: '<img src="styles/legend/Schoolprojectpublicwaypoints_12.png" /> School project public — waypoints'
            });

lyr_mymap_0.setVisible(true);lyr_ESRIWorldTopo_1.setVisible(true);lyr_GoogleRoads_2.setVisible(true);lyr_OSMStandard_3.setVisible(true);lyr_Schoolprojectpublic_4.setVisible(true);lyr_CallePamplonaClimb_5.setVisible(true);lyr_BerniaClimb_6.setVisible(true);lyr_CarreteraDeDeniaClimb_7.setVisible(true);lyr_CollDeRatesClimb_8.setVisible(true);lyr_CumbreDelSolClimb_9.setVisible(true);lyr_PilaretsClimb_10.setVisible(true);lyr_Schoolprojectpublictrack_points_11.setVisible(true);lyr_Schoolprojectpublicwaypoints_12.setVisible(true);
var layersList = [lyr_mymap_0,lyr_ESRIWorldTopo_1,lyr_GoogleRoads_2,lyr_OSMStandard_3,lyr_Schoolprojectpublic_4,lyr_CallePamplonaClimb_5,lyr_BerniaClimb_6,lyr_CarreteraDeDeniaClimb_7,lyr_CollDeRatesClimb_8,lyr_CumbreDelSolClimb_9,lyr_PilaretsClimb_10,lyr_Schoolprojectpublictrack_points_11,lyr_Schoolprojectpublicwaypoints_12];
lyr_Schoolprojectpublic_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_CallePamplonaClimb_5.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BerniaClimb_6.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_CarreteraDeDeniaClimb_7.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_CollDeRatesClimb_8.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_CumbreDelSolClimb_9.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_PilaretsClimb_10.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Schoolprojectpublictrack_points_11.set('fieldAliases', {'track_fid': 'track_fid', 'track_seg_id': 'track_seg_id', 'track_seg_point_id': 'track_seg_point_id', 'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_Schoolprojectpublicwaypoints_12.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_Schoolprojectpublic_4.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_CallePamplonaClimb_5.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_BerniaClimb_6.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_CarreteraDeDeniaClimb_7.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_CollDeRatesClimb_8.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_CumbreDelSolClimb_9.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_PilaretsClimb_10.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Schoolprojectpublictrack_points_11.set('fieldImages', {'track_fid': '', 'track_seg_id': '', 'track_seg_point_id': '', 'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_Schoolprojectpublicwaypoints_12.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_Schoolprojectpublic_4.set('fieldLabels', {'name': 'inline label - visible with data', 'cmt': 'inline label - visible with data', 'desc': 'inline label - visible with data', 'src': 'inline label - visible with data', 'link1_href': 'inline label - visible with data', 'link1_text': 'inline label - visible with data', 'link1_type': 'inline label - visible with data', 'link2_href': 'inline label - visible with data', 'link2_text': 'inline label - visible with data', 'link2_type': 'inline label - visible with data', 'number': 'inline label - visible with data', 'type': 'inline label - visible with data', });
lyr_CallePamplonaClimb_5.set('fieldLabels', {'name': 'inline label - visible with data', 'cmt': 'inline label - visible with data', 'desc': 'inline label - visible with data', 'src': 'inline label - visible with data', 'link1_href': 'inline label - visible with data', 'link1_text': 'inline label - visible with data', 'link1_type': 'inline label - visible with data', 'link2_href': 'inline label - visible with data', 'link2_text': 'inline label - visible with data', 'link2_type': 'inline label - visible with data', 'number': 'inline label - visible with data', 'type': 'inline label - visible with data', });
lyr_BerniaClimb_6.set('fieldLabels', {'name': 'inline label - visible with data', 'cmt': 'inline label - visible with data', 'desc': 'inline label - visible with data', 'src': 'inline label - visible with data', 'link1_href': 'inline label - visible with data', 'link1_text': 'inline label - visible with data', 'link1_type': 'inline label - visible with data', 'link2_href': 'inline label - visible with data', 'link2_text': 'inline label - visible with data', 'link2_type': 'inline label - visible with data', 'number': 'inline label - visible with data', 'type': 'inline label - visible with data', });
lyr_CarreteraDeDeniaClimb_7.set('fieldLabels', {'name': 'inline label - visible with data', 'cmt': 'inline label - visible with data', 'desc': 'inline label - visible with data', 'src': 'inline label - visible with data', 'link1_href': 'inline label - visible with data', 'link1_text': 'inline label - visible with data', 'link1_type': 'inline label - visible with data', 'link2_href': 'inline label - visible with data', 'link2_text': 'inline label - visible with data', 'link2_type': 'inline label - visible with data', 'number': 'inline label - visible with data', 'type': 'inline label - visible with data', });
lyr_CollDeRatesClimb_8.set('fieldLabels', {'name': 'inline label - visible with data', 'cmt': 'inline label - visible with data', 'desc': 'inline label - visible with data', 'src': 'inline label - visible with data', 'link1_href': 'inline label - visible with data', 'link1_text': 'inline label - visible with data', 'link1_type': 'inline label - visible with data', 'link2_href': 'inline label - visible with data', 'link2_text': 'inline label - visible with data', 'link2_type': 'inline label - visible with data', 'number': 'inline label - visible with data', 'type': 'inline label - visible with data', });
lyr_CumbreDelSolClimb_9.set('fieldLabels', {'name': 'inline label - visible with data', 'cmt': 'inline label - visible with data', 'desc': 'inline label - visible with data', 'src': 'inline label - visible with data', 'link1_href': 'inline label - visible with data', 'link1_text': 'inline label - visible with data', 'link1_type': 'inline label - visible with data', 'link2_href': 'inline label - visible with data', 'link2_text': 'inline label - visible with data', 'link2_type': 'inline label - visible with data', 'number': 'inline label - visible with data', 'type': 'inline label - visible with data', });
lyr_PilaretsClimb_10.set('fieldLabels', {'name': 'inline label - visible with data', 'cmt': 'inline label - visible with data', 'desc': 'inline label - visible with data', 'src': 'inline label - visible with data', 'link1_href': 'inline label - visible with data', 'link1_text': 'inline label - visible with data', 'link1_type': 'inline label - visible with data', 'link2_href': 'inline label - visible with data', 'link2_text': 'inline label - visible with data', 'link2_type': 'inline label - visible with data', 'number': 'inline label - visible with data', 'type': 'inline label - visible with data', });
lyr_Schoolprojectpublictrack_points_11.set('fieldLabels', {'track_fid': 'inline label - visible with data', 'track_seg_id': 'inline label - visible with data', 'track_seg_point_id': 'inline label - visible with data', 'ele': 'inline label - visible with data', 'time': 'inline label - visible with data', 'magvar': 'inline label - visible with data', 'geoidheight': 'inline label - visible with data', 'name': 'inline label - visible with data', 'cmt': 'inline label - visible with data', 'desc': 'inline label - visible with data', 'src': 'inline label - visible with data', 'link1_href': 'inline label - visible with data', 'link1_text': 'inline label - visible with data', 'link1_type': 'inline label - visible with data', 'link2_href': 'inline label - visible with data', 'link2_text': 'inline label - visible with data', 'link2_type': 'inline label - visible with data', 'sym': 'inline label - visible with data', 'type': 'inline label - visible with data', 'fix': 'inline label - visible with data', 'sat': 'inline label - visible with data', 'hdop': 'inline label - visible with data', 'vdop': 'inline label - visible with data', 'pdop': 'inline label - visible with data', 'ageofdgpsdata': 'inline label - visible with data', 'dgpsid': 'inline label - visible with data', });
lyr_Schoolprojectpublicwaypoints_12.set('fieldLabels', {'ele': 'inline label - visible with data', 'time': 'inline label - visible with data', 'magvar': 'inline label - visible with data', 'geoidheight': 'inline label - visible with data', 'name': 'inline label - visible with data', 'cmt': 'inline label - visible with data', 'desc': 'inline label - visible with data', 'src': 'inline label - visible with data', 'link1_href': 'inline label - visible with data', 'link1_text': 'inline label - visible with data', 'link1_type': 'inline label - visible with data', 'link2_href': 'inline label - visible with data', 'link2_text': 'inline label - visible with data', 'link2_type': 'inline label - visible with data', 'sym': 'inline label - visible with data', 'type': 'inline label - visible with data', 'fix': 'inline label - visible with data', 'sat': 'inline label - visible with data', 'hdop': 'inline label - visible with data', 'vdop': 'inline label - visible with data', 'pdop': 'inline label - visible with data', 'ageofdgpsdata': 'inline label - visible with data', 'dgpsid': 'inline label - visible with data', });
lyr_Schoolprojectpublicwaypoints_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});