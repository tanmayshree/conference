import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import Error404 from './Components/404/404.jsx';
import { AdvisoryBoard } from './Components/Advisory Board/AdvisoryBoard';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ImportantDates from './Components/Important Dates/ImportantDates';
import { TechnicalProgramCommittee } from './Components/Technical Program Committee/TechnicalProgramCommittee';
import { OrganizingCommittee } from './Components/Organizing Committee/OrganizingCommittee';
import StudentCommittee from './Components/Student Committee/StudentCommittee';
import CallForPaper from './Components/Call For Paper/CallForPaper';
import Submission from './Components/Submission/Submission';
import Registration from './Components/Registration/Registration';
import Proceedings from './Components/Proceedings/Proceedings';
import Venue from './Components/Venue/Venue';
import HowToReach from './Components/How To Reach/HowToReach';
import OurSpeaker from './Components/Our Speaker/OurSpeaker';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Hero />
          <Routes>
            {/* All routes */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/advisory-board" element={<AdvisoryBoard />} />
            <Route exact path="/technical-program-committee" element={<TechnicalProgramCommittee />} />
            <Route exact path="/organizing-committee" element={<OrganizingCommittee />} />
            <Route exact path="/student-committee" element={<StudentCommittee />} />

            <Route exact path="/call-for-papers" element={<CallForPaper />} />
            <Route exact path="/paper-submission" element={<Submission />} />
            <Route exact path="/registration" element={<Registration />} />
            <Route exact path="/proceedings" element={<Proceedings />} />

            <Route exact path="/important-dates" element={<ImportantDates />} />
            <Route exact path="/venue" element={<Venue />} />
            <Route exact path="/how-to-reach" element={<HowToReach />} />

            <Route exact path="/our-speaker" element={<OurSpeaker />} />


            {/* 404 page */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
