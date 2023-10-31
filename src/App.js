import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import Error404 from './Components/404/404.jsx';
import { AdBoard } from './Components/Advisory Board/AdBoard';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ImportantDates from './Components/Important Dates/ImportantDates';
import { TPC } from './Components/Technical Program Committee/TPC';
import { OrgCom } from './Components/Organising Committee/OrgCom';
import StudentCommittee from './Components/Student Committee/StudentCommittee';
// import ImportantDates from './Components/Important Dates/ImportantDates';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Hero />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/advisory-board" element={<AdBoard />} />
            {/* All routes */}
            <Route exact path="/important-dates" element={<ImportantDates />} />
            <Route exact path="/tpc" element={<TPC />} />
            <Route exact path="/oc" element={<OrgCom />} />
            <Route exact path="/sc" element={<StudentCommittee />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
