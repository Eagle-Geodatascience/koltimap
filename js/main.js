$(function () {
    // Add basemap collection
    for (const {icon, caption, url} of BASEMAP_COLLECTION) {
        appendImageIcon(icon, caption, url);
    }
})





















// ! Some Example

// map.on('load', function() {
//     // Center the map on a specific location
//     map.flyTo({
//         center: [120, 0], // New center [lng, lat]
//         zoom: 8, // Zoom level
//         speed: 1.5 // Speed of the animation
//     });

//     // Add a marker to the map
//     var marker = new mapboxgl.Marker()
//         .setLngLat([120, 0]) // Marker position [lng, lat]
//         .addTo(map);
// });

// map.on('click', function(e) {
//     // Handle the click event here, e.lngLat contains the clicked coordinates
//     console.log('Clicked at:', e.lngLat);
// });
