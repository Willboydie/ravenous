
export default function RestaurantResultConverter({ restaurantsRaw }) {
    const restaurantsConverted = restaurantsRaw.map(restaurantObj => {
        // Convert the object to an array of key-value pairs
        const filteredEntries = Object.entries(restaurantObj)
            .filter(([key, value]) => 
                key === 'image_url' || key === 'location' || key === 'name' || key === 'rating' || key === 'review_count'
            );

        // Rename certain keys in the filtered entries
        const renamedFilteredEntries = filteredEntries.map(([key, value]) => {
            if (key === 'image_url') {
                return ['imgSrc', value];
            } else if (key === 'review_count') {
                return ['reviewCount', value];
            } else if (key === 'location') {

                return ['address', value['display_address']]

            } else {
                return [key, value];
            }
        });

        // Convert the renamed filtered entries back to an object
        return Object.fromEntries(renamedFilteredEntries);
    });

    return restaurantsConverted;
}