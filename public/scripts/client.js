const renderBranches = (branches) => {
  for(let id in branches) {
    $branch = createBranchElement(branches[id]);
    $("#branches").append($branch);
  }
};

const renderMarketerPromotions = (Promotions) => {
  for(let id in Promotions) {
    $promotion = createPromotionElement(Promotions[id]);
    $("#marketerPromotions").append($promotion);
  }
};


const renderUserPromotions = (Promotions, userCoords) => {
  for(let id in Promotions) {
    $promotion = createPromotionElement(Promotions[id]);
    $("#userPromotions").append($promotion);
  }
};

const loadUserPromotions = (userCoords) => {

};

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

const createPromotionElement = (promotionObj) => {
  $html = `
  <div class="marketer-div">
    <p>Promotion id: ${promotionObj.id}</p> 
    <br>
    <p>Bank Branch id: ${promotionObj.branchId}</p> 
    <br>
    <p>Image: </p> <img src="${promotionObj.imageUrl}" alt="">
    <br>
    <p>Caption:  ${promotionObj.caption}</p>
  </div>
  `;

  return $html;
};

{/* <p>Promotion id: <%= id %></p> 
      <br>
      <p>Bank Branch id: <%= promotionDatabase[id]["branchId"] %></p> 
      <br>
      <p>Image: </p><img src="<%=promotionDatabase[id].imageUrl%>" alt="">
      <br>
      <p>Caption:  */}

function loadBranches() {
  $.ajax("/branches", {method: "GET"})
      .then(function (theBranches) {
        renderBranches(theBranches);
      })
      .catch(console.log("Error happened"))
};

function loadMarketerPromotions() {
  $.ajax("/Promotions", {method: "GET"})
      .then(function (Promotions) {
        renderMarketerPromotions( Promotions);
      })
      .catch(console.log("Error happened"))
};

function initMarketerMap() {
  const myLatlng = { lat: 45.37464841017669, lng: -75.651369761328 };
  const marketer_map = new google.maps.Map(document.getElementById("marketer-map"), {
    zoom: 20,
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
  const myLatlng = { lat: 45.37464841017669, lng: -75.651369761328 };
  
  const user_map = new google.maps.Map(document.getElementById("user-map"), {
    zoom: 20,
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
    
  });

}

$(document).ready(function() {
  // --- our code goes here ---
  console.log("ready");

  loadBranches();

  loadMarketerPromotions();

  // loadPromotions();

  

  $( ".marketer-div" ).click(function() {
    alert( "Handler for .click() for marketer called." );
  });

  $( ".user-div" ).click(function() {
    alert( "Handler for .click() for user called." );
  });
});