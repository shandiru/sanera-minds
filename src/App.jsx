// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './Page/Homepage'; // Use relative path correctly
import Aboutpage from './Page/Aboutpage'; // Use relative path correctly
import WorkshopsPage from './Page/Workshoppage';
import EducationPage from "./Page/EducationPage"
import OrganisationPage from "./Page/OrganisationPage"
import BookNowPage from "./Page/BookNowPage"
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
         <Route path="/about" element={<Aboutpage />} />
          <Route path="/services/workshops" element={<WorkshopsPage />} />
          <Route path="/services/education" element={<EducationPage />} />
           <Route path="/services/organisation" element={<OrganisationPage />} />
             <Route path="/contact" element={<BookNowPage />} />
      </Routes>
    </Router>
  );
}


export default App;
