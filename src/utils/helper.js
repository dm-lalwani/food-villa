export function filterData(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

// export function filterTopRest(allRestaurants) {
//   const topRestaurants = allRestaurants.filter(
//     (restaurant) => parseFloat(restaurant.info.avgRating) > 4.2
//   );
//   return topRestaurants;
// }

export function sortTopRest(allRestaurants) {
  const sortedRestaurants = allRestaurants.slice().sort((a, b) => {
    const ratingA = parseFloat(a.info.avgRating);
    const ratingB = parseFloat(b.info.avgRating);

    return ratingB - ratingA;
  });
  return sortedRestaurants;
}

// if avgRating is string parseFloat converts it to a number it is robust choice
