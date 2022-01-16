const renderBranches = (branches) => {
  //console.log("here loadBranches: ", branches);
  for(let id in branches) {
    //console.log("then: ", branches.id)
    $branch = createBranchElement(branches[id]);
    $("#branches").append($branch);
  }
};

const renderPromotions = () => {};

const createBranchElement = (branchObj) => {
  $html = `
  <div class="marketer-div">
    <p>Bank Branch id: ${branchObj.id}</p> 
    <br>
    <p>Bank Branch Latitude: ${branchObj.latitude}</p> 
    <br>
    <p>Bank Branch Longitude: ${branchObj.longitude}</p>
  </div>
  `;

  return $html; 
};

const createPromotionElement = () => {};

function loadBranches() {
  $.ajax("/branches", {method: "GET"})
      .then(function (theBranches) {
        renderBranches(theBranches);
      })
      .catch(console.log("Error happened"))
};

function loadPromotions() {

};

function initMarketerMap() {
  const myLatlng = { lat: -25.363, lng: 131.044 };
  const marketer_map = new google.maps.Map(document.getElementById("marketer-map"), {
    zoom: 4,
    center: myLatlng,
  });
  
  marketer_map.addListener("click", (mapsMouseEvent) => {
    //mapsMouseEvent.latLng
    const lat =$("#latitude1");
    const lng =$("#longitude1");
    lat.val("The Latitude is " + mapsMouseEvent.latLng.lat());
    lng.val("The Longitude is " + mapsMouseEvent.latLng.lng());
    const latitude = mapsMouseEvent.latLng.lat();
    const longitude = mapsMouseEvent.latLng.lng();
    $.ajax("/addBranch", {method: "POST", data: {latitude, longitude}})
      .then(function(){
        //empty the container to avoid duplicate messages
        $("#branches").empty();
        loadBranches();
    })
      .catch(console.log("Error happened"))
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

  loadBranches();

  

  $( ".marketer-div" ).click(function() {
    alert( "Handler for .click() for marketer called." );
  });

  $( ".user-div" ).click(function() {
    alert( "Handler for .click() for user called." );
  });
});