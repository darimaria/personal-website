import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import More from "./sections/More";

import WritingPage from "./pages/WritingPage";
import ReadingPage from "./pages/ReadingPage";
import MiscPage from "./pages/MiscPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
