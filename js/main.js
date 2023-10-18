$(function () {
    // Add basemap collection
    for (const { icon, caption, url } of BASEMAP_COLLECTION) {
        appendImageIcon(icon, caption, url);
    }

    // Function to handle shapefile upload
    $('#add-shapefile').on('click', function () {
        // Trigger the hidden file input element
        $('#shapefile-input').click();
    });

    function addShapefileLayer(geojson, filename) {
        map.addSource('shapefile-data', {
            type: 'geojson',
            data: geojson
        });

        map.addLayer({
            id: 'shapefile-layer',
            type: 'fill',
            source: 'shapefile-data',
            paint: {
                'fill-color': 'rgba(255, 0, 0, 0.5)'
            }
        });

        map.fitBounds(turf.bbox(geojson), {
            padding: 20
        });

        // Add a checkbox to toggle the shapefile layer visibility
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'toggle-shapefile-layer';
        checkbox.checked = true; // Initially, the layer is visible
        const label = document.createElement('label');
        label.textContent = filename;
        label.htmlFor = 'toggle-shapefile-layer';
        label.style.display = 'block';
        label.style.marginTop = '10px';

        label.appendChild(checkbox);
        $('#menu').append(label);

        // Toggle the layer visibility when the checkbox is changed
        checkbox.addEventListener('change', function () {
            const visibility = this.checked ? 'visible' : 'none';
            map.setLayoutProperty('shapefile-layer', 'visibility', visibility);
        });
    }

    $('#shapefile-input').on('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                shp(e.target.result)
                    .then(geojson => {
                        addShapefileLayer(geojson, file.name);
                    });
            };
            reader.readAsArrayBuffer(file);
        }
    });
});
