import React, {useState, useEffect} from 'react';
import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList'
import RestaurantData from './RestaurantData';


function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [sortTerm, setSortTerm] = useState('best_match');

  function updateSearchObj(newSearchObj) {
    setSearchTerm(newSearchObj.term);
    setSearchLocation(newSearchObj.location);
    setSortTerm(newSearchObj.sortby);

  };

  useEffect(() => {
    console.log(`term: ${searchTerm}, loc: ${searchLocation}, sortby: ${sortTerm}`);
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
        <BusinessList businesses={RestaurantData} />
      </main>   
    </div>
  );
}

export default App;
