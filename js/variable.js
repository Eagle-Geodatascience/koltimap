mapboxgl.accessToken = 'pk.eyJ1Ijoia29sdGlnaXMiLCJhIjoiY2xhYzYyNm9xMDc5czNvbWhjMTNrODVkMyJ9.2Ni9VMsNgMf3vj67B_l2zA';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/satellite-streets-v12', 
    center: [120, 0], // starting position [lng, lat]
    zoom: 3, // starting zoom
});

const BASEMAP_COLLECTION = [
    { 
        icon: 'map.png', 
        caption:'Streets',
        url:'mapbox://styles/mapbox/streets-v12'
    },
    { 
        icon: 'satellite.png', 
        caption:'Satellite',
        url:'mapbox://styles/mapbox/satellite-streets-v12'
    },
    { 
        icon: 'light.png', 
        caption:'Light',
        url:'mapbox://styles/mapbox/light-v11'
    },
    { 
        icon: 'dark.png', 
        caption:'Dark',
        url:'mapbox://styles/mapbox/dark-v11'
    },
]