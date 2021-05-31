export const RestaurantsModule = (function(){

    // array for å holde på informasjonen om alle restaurantene
    let restaurants = [
        {restaurant: "Oslo S", image: "oslos-restaurant.png", id: "0", address: "Oslo Svinger 34, 0342 Oslo", leader: "Silje Antonsen", phone: "624 95 345", mail: "oslos@gyldnepizza.no", openingtimes: "Alle dager, 10:00 - 21:00", emplyees: "2 ansatte", established: "2019"},
        {restaurant: "Majorstua", image: "majorstua-restaurant.png", id: "1", address: "Majorstua 56, 0468 Oslo", leader: "Hanne Davidsen", phone: "638 98 474", mail: "majorstua@gyldnepizza.no", openingtimes: "Alle dager, 11:00 - 22:00", emplyees: "2 ansatte", established: "2019"},
        {restaurant: "Torshov", image: "torshov-restaurant.png", id: "2", address: "Torresen 90, 0360 Oslo", leader: "Jacob Salg", phone: "678 87 476", mail: "torshov@gyldnepizza.no", openingtimes: "man - fre: 10 - 20, lør - søn: 09:00 - 23:00", emplyees: "2 ansatte", established: "2019"},
        {restaurant: "Karl Johan", image: "karljohan-restaurant.png", id: "3", address: "Karl Johans Gate 87, 0908 Oslo", leader: "Sonja Finne", phone: "765 37 384", mail: "karljohan@gyldnepizza.no", openingtimes: "man - fre: 09:00 - 21:00, lør - søn: 08:00 - 24:00", emplyees: "2 ansatte", established: "2019"}
    ];

    // funksjon for å få tak i informasjonen i arrayet
    let getAllRestaurants = () => restaurants;

    // funksjon for å pushe info til array fra brukerinput
    let addNewRestaurant = (adding) => restaurants.push(adding);

    // funksjon for å slette en restaurant fra arrayet
    const deleteRestaurant = (restaurantID) => restaurants.filter(restaurant =>
        restaurant.id === restaurantID && restaurants.splice(restaurantID, 1)
     );

    return {
        getAllRestaurants, 
        addNewRestaurant, 
        deleteRestaurant,
        restaurants
    }


}()); // end of RestaurantsModule

        
 
