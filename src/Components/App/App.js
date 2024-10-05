import React, {useState, useEffect} from 'react';
import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList'
import getYelpRestaurants from '../../utils/yelpApi';
import sushiMan from './happy-man-eating-sushi.webp';


function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [sortTerm, setSortTerm] = useState('best_match');

  const searchObj = {
    term: searchTerm,
    location: searchLocation,
    sortby: sortTerm
  }

  function updateSearchObj(newSearchObj) {
    setSearchTerm(newSearchObj.term);
    setSearchLocation(newSearchObj.location);
    setSortTerm(newSearchObj.sortby);
  };

  const [restaurants, setRestaurants] = useState([]);


  useEffect(() => {

    if (searchTerm && searchLocation) {

      const getRestaurantsResponse = async(searchObj) => {
        const restaurantsResponse = await getYelpRestaurants(searchObj);
        if (restaurantsResponse) {
          setRestaurants(restaurantsResponse);
        } else {
          console.log('Could not find matching restaurants.')
        }
      }
      getRestaurantsResponse(searchObj);
    }

  }, [searchTerm, searchLocation, sortTerm])


  return (
    <div className={styles.App} >
      <h1>
        Ravenous
        <span className={styles.smallText}>
          <a> </a>            
          by
          <a> </a>
          <a href="https://willboydtutoring.co.uk"
            target="_blank"
            rel="noopener noreferrer" >
            Will Boyd
          </a>          
        </span>
      </h1>
      <SearchBar updateSearchObj={updateSearchObj}/>
      <main>
        <BusinessList businesses={restaurants} />
      </main>   
    </div>
  );
}

export default App;
