function changeBasemap(styleURL) {
    map.setStyle(styleURL);
}

function appendImageIcon(imageSource, title, styleURL) {
    var icon = $('<a>').addClass('bc-icon').attr('title', title);

    // When an icon is clicked, change the basemap using the provided style URL
    icon.click(function () {
        changeBasemap(styleURL);
    });
    var img = $('<img>').attr('src', 'image/' + imageSource).appendTo(icon);
    $('#tools').append(icon);
    
}

