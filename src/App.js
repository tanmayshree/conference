import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import ImportantDates from './Components/Important Dates/ImportantDates';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Hero />
        <Home />
        <ImportantDates/>
      </div>
    </>

  );
}

export default App;
