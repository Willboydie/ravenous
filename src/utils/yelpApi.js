import RestaurantResultConverter from "../Components/App/RestaurantResultConverter";

const yelpApiKey = '_UhWFub-mYNzfnnw2i2Zqc0ramMQtYLp4wA6vvgentsG-oVWPZvC1jFX0qdRNd6_YKNk7DqVLIDgV8YdkivrTvOkk_A6lGrW_oJZpAHbGc20qiKLu7DS_700j0_9ZnYx';
const corsPrepend = 'https://cors-anywhere.herokuapp.com/';

export default async function getYelpRestaurants({ term, location, sortby }) {
    const yelpBaseUrl = 'https://api.yelp.com/v3';
    const businessSearchEndpoint = '/businesses/search';
    const requestParams = `?term=${term}&location=${location}&sort_by=${sortby}`;

    const urlToFetch = `${corsPrepend}${yelpBaseUrl}${businessSearchEndpoint}${requestParams}`;

    try {
        const response = await fetch(urlToFetch, {
            headers: {
                'Authorization': `Bearer ${yelpApiKey}`,
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const jsonResponse = await response.json();
            const restaurantsConverted = RestaurantResultConverter({restaurantsRaw: jsonResponse.businesses});
            console.log(restaurantsConverted);
            return restaurantsConverted;
        }
    } catch (error) {
        console.log(error);
        return 0;
    }
}