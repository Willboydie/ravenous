
const dropdownMenuItems = {
    'rating': 'Highest Rated', 
    'best_match': 'Best Match', 
    'review_count': 'Most Reviewed'
}


function DropdownMenu(props) {
    return (
        <select id='dropdownMenu' 
        className={props.dropStyles}
        onClick={props.onSelect}>
            {Object.entries(dropdownMenuItems).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
            ))}
        </select>
    );
};

export default DropdownMenu;