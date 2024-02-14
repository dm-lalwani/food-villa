export function filterData(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

export function filterTopRest(allRestaurants) {
  const topRestaurants = allRestaurants.filter(
    (restaurant) => parseFloat(restaurant.info.avgRating) > 4.2
  );
  return topRestaurants;
}

// if avgRating is string parseFloat converts it to a number it is robust choice
