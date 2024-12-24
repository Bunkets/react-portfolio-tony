import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Book from "./components/Book";
import ScribeGo from "./components/ScribeGo"; // Import the new ScribeGo component

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <Router>
        <div className="container mx-auto px-8">
          <Navbar /> {/* Navbar stays fixed across all pages */}
          
          {/* Set up routing between the pages */}
          <Routes>
            <Route path="/book" element={<Book />} /> {/* Home route */}
            <Route path="/" element={<Hero />} /> {/* Book route */}
            <Route path="/scribego" element={<ScribeGo />} /> {/* ScribeGo route */}
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
