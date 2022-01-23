const flyDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};
const branchDatabase = {
  1: {id: 1, latitude: 3, longitude: 5},
  2: {id: 2, latitude: 8, longitude: 2},
  3: {id: 3, latitude: 45.37464841017669, longitude: -75.651369761328}
};

const promotionDatabase = {
  1: {id: 1, 
      branchId: 1, 
      imageUrl: "/images/promotion_image.webp",
      caption: "Great Opportunity"},
  2:  {id: 2, 
       branchId: 2, 
       imageUrl: "/images/promotion_image.webp",
       caption: "Fantastic Opportunity"},
  3:   {id: 3, 
        branchId: 3, 
        imageUrl: "/images/promotion_image.webp",
        caption: "Fabulous Opportunity"}
};

function diff(a, b) {
  return Math.abs(a - b);
}

module.exports = {diff, flyDatabase, branchDatabase, promotionDatabase};