import './App.css';
import SearchBar from "./components/SearchBar";

function App() {
window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    error => console.log(error)
);
  return (
    <div className="App">
      <SearchBar/>
    </div>
  );
}

export default App;
