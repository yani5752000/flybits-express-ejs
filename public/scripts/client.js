function initMarketerMap() {
  const myLatlng = { lat: -25.363, lng: 131.044 };
  const marketer_map = new google.maps.Map(document.getElementById("marketer-map"), {
    zoom: 4,
    center: myLatlng,
  });
  // Create the initial InfoWindow.
  // let infoWindow = new google.maps.InfoWindow({
  //   content: "Click the map to get Lat/Lng!",
  //   position: myLatlng,
  // });

  // infoWindow.open(map);
  // // Configure the click listener.
  marketer_map.addListener("mousemove", (mapsMouseEvent) => {
    //mapsMouseEvent.latLng
    const lat1 =$("#latitude1");
    const lng1 =$("#longitude1");
    lat1.val("Your Latitude is " + mapsMouseEvent.latLng.lat());
    lng1.val("Your Longitude is " + mapsMouseEvent.latLng.lng());
  });
  // map.addListener("click", (mapsMouseEvent) => {
  //   //mapsMouseEvent.latLng
  //   const lat =$("#latitude");
  //   const lng =$("#longitude");
  //   lat.val("Your Latitude is " + mapsMouseEvent.latLng.lat());
  //   lng.val("Your Longitude is " + mapsMouseEvent.latLng.lng());
  //   // alert( "Handler for .click() called. " 
  //   // + mapsMouseEvent.latLng 
  //   // + " " + mapsMouseEvent.latLng.lat()
  //   // + " " + mapsMouseEvent.latLng.lng());
  //   // // Close the current InfoWindow.
  //   // infoWindow.close();
  //   // // Create a new InfoWindow.
  //   // infoWindow = new google.maps.InfoWindow({
  //   //   position: mapsMouseEvent.latLng,
  //   // });
  //   // infoWindow.setContent(
  //   //   JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
  //   // );
  //   // infoWindow.open(map);
  // });
}

function initUserMap() {
  const myLatlng = { lat: 25.363, lng: -131.044 };
  const map = new google.maps.Map(document.getElementById("user-map"), {
    zoom: 4,
    center: myLatlng,
  });
  // Create the initial InfoWindow.
  // let infoWindow = new google.maps.InfoWindow({
  //   content: "Click the map to get Lat/Lng!",
  //   position: myLatlng,
  // });

  // infoWindow.open(map);
  // // Configure the click listener.
  map.addListener("mousemove", (mapsMouseEvent) => {
    //mapsMouseEvent.latLng
    const lat =$("#latitude");
    const lng =$("#longitude");
    lat.val("Your Latitude is " + mapsMouseEvent.latLng.lat());
    lng.val("Your Longitude is " + mapsMouseEvent.latLng.lng());
  });
  // map.addListener("click", (mapsMouseEvent) => {
  //   //mapsMouseEvent.latLng
  //   const lat =$("#latitude");
  //   const lng =$("#longitude");
  //   lat.val("Your Latitude is " + mapsMouseEvent.latLng.lat());
  //   lng.val("Your Longitude is " + mapsMouseEvent.latLng.lng());
  //   // alert( "Handler for .click() called. " 
  //   // + mapsMouseEvent.latLng 
  //   // + " " + mapsMouseEvent.latLng.lat()
  //   // + " " + mapsMouseEvent.latLng.lng());
  //   // // Close the current InfoWindow.
  //   // infoWindow.close();
  //   // // Create a new InfoWindow.
  //   // infoWindow = new google.maps.InfoWindow({
  //   //   position: mapsMouseEvent.latLng,
  //   // });
  //   // infoWindow.setContent(
  //   //   JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
  //   // );
  //   // infoWindow.open(map);
  // });
}

$(document).ready(function() {
  // --- our code goes here ---
  console.log("ready");

  // var dumbo = {lat: 40.700802, lng:73.987602};
  // var mapOptions = {
  //     center: dumbo,
  //     zoom: 10
  // };
  // var googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);

  // $("#tweet-text").on("input", function(event) {
  //   console.log(140 - $(this).val().length);
  //   let tweetLength = $(this).val().length;
  //   let counter = $("#counter");
  //   counter.val(140 - tweetLength);
  //   if (counter.val() < 0) {
  //     counter.css("color", "red");
  //   } else {
  //     counter.css("color", "#545149");
  //   }
  // });

  $( ".marketer-div" ).click(function() {
    alert( "Handler for .click() for marketer called." );
  });

  $( ".user-div" ).click(function() {
    alert( "Handler for .click() for user called." );
  });
});