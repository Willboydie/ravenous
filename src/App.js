// import logo from './logo.svg';
import './App.css';
import sushi from './happy-man-eating-sushi.webp'

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <h1 type="Big">Ravenous</h1>
        <img src={sushi} alt="sushiman" height='300' width='250'/>
        <p>
          Feed your dreams.
        </p>
        <span>
        <a>An app by </a>
        <a
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
