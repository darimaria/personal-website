import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './sections/About';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import More from './sections/More';

import WritingPage from './pages/WritingPage';
import ReadingPage from './pages/ReadingPage';
import MiscPage from './pages/MiscPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Experience fileURL="/Resume-25.pdf" />
              <More />
              <Contact />
            </>
          }
        />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/reading" element={<ReadingPage />} />
        <Route path="/misc" element={<MiscPage />} />
      </Routes>
    </Router>
  )
}

export default App
