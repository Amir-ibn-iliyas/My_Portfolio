import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./Components/Footer";
import Navbar from './Components/Navbar'
import { About, Contact, Home, Projects } from "./Pages";

const App = () => {
  return (
    <main className='bg-slate-300/20 '>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;