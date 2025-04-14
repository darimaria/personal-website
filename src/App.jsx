import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import About from './sections/About';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import More from './sections/More';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <About />
      <Experience fileURL="/Resume-25.pdf" />
      <More />
      <Contact />
    </div>
  )
}

export default App
