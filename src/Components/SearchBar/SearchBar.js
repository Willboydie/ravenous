import styles from './SearchBar.module.css'
import React, {useState} from 'react';
import DropdownMenu from './DropdownMenu'


function SearchBar(props) {
    
    const [termInputText, setTermInputText] = useState('');
    function handleSearchTermChange({target}) {
        setTermInputText(target.value);
      }
  
    const [locInputText, setLocInputText] = useState('');
    function handleSearchLocChange({target}) {
      setLocInputText(target.value);
    }

    const [selectedSortBy, setSelectedSortBy] = useState('best_match');
    function handleSortBySelection({target}) {
        setSelectedSortBy(target.value);
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (termInputText || locInputText) {
            const searchObj = {
                term: termInputText,
                location: locInputText,
                sortby: selectedSortBy
            }
            props.updateSearchObj(searchObj);
        }
    }
    
    return (
        <form onSubmit={handleSubmit} 
        className={styles.SearchBar}>
            <input type="search" 
            placeholder="What do you fancy..." 
            onChange={handleSearchTermChange} 
            value={termInputText}/>
            <input type="search" 
            placeholder="Where in the world..." 
            onChange={handleSearchLocChange}
            value={locInputText}/>
            <button type="submit" 
            className={styles.SearchBarSubmit} >Search </button>
            <label for='dropdownMenu'> Sort by: </label>
            <DropdownMenu onSelect={handleSortBySelection}
            value={selectedSortBy}
            dropStyles={styles.SearchBarSortbyOptions}
            />
        </form>    
        );
};

    
export default SearchBar;