$(document).ready(function(){
    "use strict";


var window_width = $(window).width(),
window_height    = window.innerHeight,
header_height    = $(".default-header").height(),
header_height_static = $(".site-header.static").outerHeight(),
fitscreen        = window_height - header_height;


$(".fullscreen").css("height", window_height)
$(".fitscreen").css("height", fitscreen);

// active sticky js //
$(".default-header").sticky({topSpacing:0});



// active nice select //
if(document.getElementById("default-select")){
    $('select').niceSelect();
};

if (document.getElementById("property")){
    $('select').niceSelect();
};

$('.img-pop-up').magnificPopup({
    type: 'image',
    gallery:{
    enabled:true
    }
});


$(".navbar-nav lia[href^='#']").on('click', function(event){
    var target = this.hash;

    event.preventDefault();

    var navOffset = $('#navbar').height();

    return $('html, body').animate({
        scrollTop: $(this.hash).offset().top-70 - navOffset
    }, 600, function(){
        return window.history.pushState(null,null,target);
    });
});

// $('.navbar-nav>li>a').on('click', function(){
  //     $('.navbar-collapse').collapse('hide');
  // });



//   mail send ajax

$(document).ready(function () {
    var form = $('#booking'); // contact form
    var submit = $('.submit-btn'); // submit button
    var alert = $('.alert-msg'); // alert div for show alert message


    //form submit event
    form.on('submit', function(e) {
        e.preventDefault(); // prevent default form submit

        $.ajax ({
            url: 'booking.php', // form action url
            type: 'POST', // form submit method get/post
            dataType: 'html', // request type html/json/xml
            data: form.serialize(), // serialize form data
            beforeSend: function() {
                alert.fadeOut();
                submit.html('sending....'); // change submit button text
            },
            success: function(data) {
                alert.html(data).fadein();
                form.trigger('reset');
                submit.attr("style", "display: none !important");;
            },
            error: function (e) {
                console.log(e)
            }

        });
    });
    
});

// start google map

// when the window has finished loading create google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // basic options for a simple google map
var mapOptions = {
    // How zoomed in you want the map to start at
    zoom: 11,

    // The latitude and longitude to center the map
    center: new google.maps.LatLng(33.7490, -84.3880), // New york

    // Style map
    styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
    };
    
    //Get HTML DOM element contain map
    //using a div with id=map
    var mapElement = document.getElementById('map');

    // create google map using our element and options
    var map = new google.maps.Map(mapElement, mapOptions);

    // add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(33.7490, -84.3880),
        map: map,
        title: 'snazzy!'
    });
2
}

$(document).ready(function(){
    $('#mc_embed_signup').find('form').ajaxChimp();
});

    $("#range").ionRangeSlider({
        hide_min_max: true,
        keyboard: true,
        min: 0,
        max: 5000,
        from: 1000,
        to: 4000,
        type: 'double',
        step: 1,
        prefix: "$",
        grid: true
    });
    $("#range2").ionRangeSlider({
        hide_min_max: true,
        keyboard: true,
        min: 0,
        max: 5000,
        from: 1000,
        to: 4000,
        type: 'double',
        step: 1,
        prefix: "",
        grid: true
    });






});
