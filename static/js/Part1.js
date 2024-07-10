// Create the map
var map = L.map('map').setView([37.7749, -95.4194], 4);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Fetch the earthquake data
var earthquakeUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

var earthquakes = new L.LayerGroup();

d3.json(earthquakeUrl).then(function(data) {
    function getColor(depth) {
        return depth > 90 ? '#FDB72A' :
               depth > 70 ? '#FCA35D' :
               depth > 50 ? '#FC7A5C' :
               depth > 30 ? '#F7DB11' :
               depth > 10 ? '#DCF400' :
                            '#A3F600';
    }

    function getRadius(magnitude) {
        return magnitude * 4;
    }

    function style(feature) {
        return {
            fillColor: getColor(feature.geometry.coordinates[2]),
            weight: 1,
            opacity: 1,
            color: '#000000',
            fillOpacity: 0.8,
            radius: getRadius(feature.properties.mag)
        };
    }

    function onEachFeature(feature, layer) {
        layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>Magnitude: ${feature.properties.mag}<br>Depth: ${feature.geometry.coordinates[2]}</p>`);
    }

    L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },
        style: style,
        onEachFeature: onEachFeature
    }).addTo(earthquakes);

    earthquakes.addTo(map);

    // Add a legend to the map
    var legend = L.control({position: 'bottomright'});

    legend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend'),
            grades = [-10, 10, 30, 50, 70, 90],
            labels = [];

        div.innerHTML += '<h4>Depth</h4>';

        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legend.addTo(map);
});

// Fetch the tectonic plates data
var tectonicPlatesLink = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

var tectonicPlates = new L.LayerGroup();

d3.json(tectonicPlatesLink).then(function(data) {
    L.geoJson(data, {
        style: function(feature) {
            return {
                color: "orange",
                weight: 2
            };
        }
    }).addTo(tectonicPlates);

    tectonicPlates.addTo(map);

    // Add layer control
    var baseMaps = {
        "Base Map": map
    };

    var overlayMaps = {
        "Earthquakes": earthquakes,
        "Tectonic Plates": tectonicPlates
    };

    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(map);
});