

// const branchDatabase = {
//   1: {id: 1, latitude: 3, longitude: 5},
//   2: {id: 2, latitude: 8, longitude: 2}
// };

// const promotionDatabase = {
//   1: {id: 1, 
//       branchId: 2, 
//       imageUrl: "/images/promotion_image.webp",
//       caption: "Great Opportunity"},
//   2:  {id: 1, 
//        branchId: 2, 
//        imageUrl: "/images/promotion_image.webp",
//        caption: "Fantastic Opportunity"}
// };

// function diff(a, b) {
//   return Math.abs(a - b);
// }
//



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
  // marketer_map.addListener("mousemove", (mapsMouseEvent) => {
  //   //mapsMouseEvent.latLng
  //   const lat1 =$("#latitude1");
  //   const lng1 =$("#longitude1");
  //   lat1.val("Your Latitude is " + mapsMouseEvent.latLng.lat());
  //   lng1.val("Your Longitude is " + mapsMouseEvent.latLng.lng());
  // });
  marketer_map.addListener("click", (mapsMouseEvent) => {
    //mapsMouseEvent.latLng
    const lat =$("#latitude1");
    const lng =$("#longitude1");
    lat.val("The Latitude is " + mapsMouseEvent.latLng.lat());
    lng.val("The Longitude is " + mapsMouseEvent.latLng.lng());
    const latitude = mapsMouseEvent.latLng.lat();
    const longitude = mapsMouseEvent.latLng.lng();
    $.ajax("/addBranch", {method: "POST", data: {latitude, longitude}})
      .then(console.log("success"))
      .catch(console.log("Error happened"))
    // alert( "Handler for .click() called. " 
    // + mapsMouseEvent.latLng 
    // + " " + mapsMouseEvent.latLng.lat()
    // + " " + mapsMouseEvent.latLng.lng());
    // // Close the current InfoWindow.
    // infoWindow.close();
    // // Create a new InfoWindow.
    // infoWindow = new google.maps.InfoWindow({
    //   position: mapsMouseEvent.latLng,
    // });
    // infoWindow.setContent(
    //   JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    // );
    // infoWindow.open(map);
  });
}

const findBranch = (lat, lng) => {

};

function initUserMap() {
  const myLatlng = { lat: 25.363, lng: -131.044 };
  const user_map = new google.maps.Map(document.getElementById("user-map"), {
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
  user_map.addListener("mousemove", (mapsMouseEvent) => {
    //mapsMouseEvent.latLng
    const latitude = mapsMouseEvent.latLng.lat();
    const longitude = mapsMouseEvent.latLng.lng();
    const lat =$("#latitude");
    const lng =$("#longitude");
    lat.val("Your Latitude is " + mapsMouseEvent.latLng.lat());
    lng.val("Your Longitude is " + mapsMouseEvent.latLng.lng());
    $.ajax("/userCheckPromotion", {method: "POST", data: {latitude, longitude}})
      .then(function(response) {console.log("success response:", response)})
      .catch(console.log("Error happened"))
    // const refLat = 45.37464841017669;
    // const refLng = -75.651369761328;
    // if(diff(refLat, mapsMouseEvent.latLng.lat()) <= 0.0001 
    // && diff(refLng, mapsMouseEvent.latLng.lng()) <= 0.0001) {
    //   alert("this is the promotion");
    // }
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