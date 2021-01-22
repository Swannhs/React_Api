import './App.css';
import ReactDom from 'react-dom';

function App() {
window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    error => console.log(error)
);
  return (
    <div className="App">

    </div>
  );
}

export default App;
