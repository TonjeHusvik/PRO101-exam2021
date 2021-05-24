export const RestaurantsModule = (function(){ // IIFE

    const restaurants = [
        {restaurant: "Oslo S", image: "oslos-restaurant.png", id: 1, address: "Oslo Svinger 34", leader: "Silje Antonsen", phone: "624 95 345", mail: "oslos@gyldnepizza.no", openingtimes: "Alle dager, 10:00 - 21:00", emplyees: "2 ansatte", established: "2019"},
        {restaurant: "Majorstua", image: "majorstua-restaurant.png", id: 2, address: "Majorstua 56", leader: "Hanne Davidsen", phone: "638 98 474", mail: "majorstua@gyldnepizza.no", openingtimes: "Alle dager, 11:00 - 22:00", emplyees: "2 ansatte", established: "2019"},
        {restaurant: "Torshov", image: "torshov-restaurant.png", id: 3, address: "Torresen 90", leader: "Jacob Salg", phone: "678 87 476", mail: "torshov@gyldnepizza.no", openingtimes: "man - fre: 10 - 20, lør - søn: 09:00 - 23:00", emplyees: "2 ansatte", established: "2019"},
        {restaurant: "Karl Johan", image: "karljohan-restaurant.png", id: 4, address: "Karl Johans Gate 87", leader: "Sonja Finne", phone: "765 37 384", mail: "karljohan@gyldnepizza.no", openingtimes: "man - fre: 09:00 - 21:00, lør - søn: 08:00 - 24:00", emplyees: "2 ansatte", established: "2019"}
    ];

    const getAllRestaurants = () => restaurants;

    return {getAllRestaurants}

}()); // end of RestaurantsModule
