// import logo from './logo.svg';
import '../App.css';
import sushi from './happy-man-eating-sushi.webp'
import searchBar from './SeachBar';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <h1 type='Big'>Ravenous</h1>
        {searchBar}
        <img src={sushi} alt="sushiman" height='300' width='250'
        style={{ padding: '20px'}}/>
        <p>
          Feed yourself. Feed your dreams. 
        </p>
        <span>
        <a An app by 
          className="App-link"
          href="https://willboydtutoring.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Will Boyd
        </a>
        <a>.</a>
        </span>
      </header>
    </div>
  );
}

export default App;
