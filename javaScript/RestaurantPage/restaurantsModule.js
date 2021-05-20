const RestaurantsModule = (function(){ // IIFE

    const restaurants = [
        {restaurant: "Oslo S", image: "oslos-restaurant.png"},
        {restaurant: "Majorstua", image: "majorstua-restaurant.png"},
        {restaurant: "Torshov", image: "torshov-restaurant.png"},
        {restaurant: "Karl Johan", image: "karljohan-restaurant.png"}
    ];

    const getAllRestaurants = () => restaurants;

    return {getAllRestaurants}

}()); // end of RestaurantsModule

export default RestaurantsModule;