 function totalBasketballScore(freeThrows, midRange, threePointers) {

if (isNaN(freeThrows, midRange, threePointers)) {
   return console.log("all entries must be numbers");
  } else {
    return (freeThrows * 1) + (midRange * 2) + (threePointers * 3);
  }
}

// totalBasketballScore(2, 3, 4); // should be 20

function itemPrice(item) {
  if (typeof item != "string") {
    return console.log("all entries must be a string");
  }
  switch (item) {
    case "case":
      return "$25";
    case "computer":
      return "$500";
    case "mouse":
      return "$10";
    case "router":
      return "$100";
    default:
      return console.log("item is not in the store");
  }
};
// itemPrice("case");

const restaurants = [
  "Applebees",
  "Panera Bread",
  "Popeyes",
  "Chopt",
  "Chick-fil-A",
  "Cheesecake Factory",
  "Five Guys",
];

function randomRestaurant(numOfRestaurants) {
  
 let randomRestaurant = restaurants.sort(() => 0.5 - Math.random());
let randomRestaurantList = randomRestaurant.slice(0, numOfRestaurants)
  return randomRestaurantList;
};

// randomRestaurant(3);  should return a randomRestaurantList array with the
// names of 3 random from the restaurants array


function isLeapYear(year) {
    if (year % 100 === 0 && year % 400 === 0) {
        return true;
    } else {
        return false;
    }
};

// isLeapYear(2000) // is called, it should return the value true.

