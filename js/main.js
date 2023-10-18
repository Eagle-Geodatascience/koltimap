
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
    $('#shapefile-input').on('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                shp(e.target.result)
                    .then(geojson => {
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
                    });
            };
            reader.readAsArrayBuffer(file);
        }
    });
});
