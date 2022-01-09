const flyDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};
const branchDatabase = {
  1: {id: 1, latitude: 3, longitude: 5},
  2: {id: 2, latitude: 8, longitude: 2}
};

const promotionDatabase = {
  1: {id: 1, 
      branchId: 2, 
      imageUrl: "/images/promotion_image.webp",
      caption: "Great Opportunity"},
  2:  {id: 1, 
       branchId: 2, 
       imageUrl: "/images/promotion_image.webp",
       caption: "Fantastic Opportunity"}
};

function diff(a, b) {
  return Math.abs(a - b);
}

module.exports = {diff, flyDatabase, branchDatabase, promotionDatabase};