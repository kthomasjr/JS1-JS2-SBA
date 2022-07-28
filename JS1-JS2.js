function totalBasketballScore(freeThrows, midRange, threePointers) {
  if (
    typeof freeThrows != isNaN() &&
    typeof midRange != isNaN() &&
    typeof threePointers != isNaN()
  ) {
    return freeThrows * 1 + midRange * 2 + threePointers * 3;
  } else {
    return console.log("all entries must be numbers");
  }
}

totalBasketballScore(2, 3, 4); // should be 20

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
}
itemPrice("case");

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
  
  randomRestaurantList =
    restaurants
    [
      Math.floor(Math.random() * restaurants.length)
    ];

  console.log(randomRestaurantList);
}

randomRestaurant(3); // should return a randomRestaurantList array with the
// names of 3 random from the restaurants array


function isLeapYear(year) {
    if (year % 100 === 0 && year % 400 === 0) {
        console.log(true)
        return true;
    } else {
        console.log(false)
        return false;
    }
}



isLeapYear(2000) // is called, it should return the value true.

