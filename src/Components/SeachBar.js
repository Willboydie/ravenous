

const dropdownMenuItems = {
    'rating': 'Highest Rated', 
    'best_match': 'Best Match', 
    'review_count': 'Most Reviewed'
}


const dropdownMenu = (
    <select>
        {Object.entries(dropdownMenuItems).map(([key, value]) => (
            <option key={key} value={key}>Sort by: {value}</option>
        ))}
    </select>
);


const searchBar =
    (
    <form onSubmit={(e) => e.preventDefault()}>
        <input type="search" placeholder="Search your dreams.." />
        <input type="search" placeholder="Location" />
        <button type="submit" >Search </button>
        {dropdownMenu}
    </form>    
    
    );

    
export default searchBar;