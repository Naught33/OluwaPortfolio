import './App.css';
import Index from './components/Index.jsx';
import Portfolio from './components/Portfolio.jsx';
import Projects from './components/Projects.jsx';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('home');  // State to manage which page is displayed

  const handleNavigation = (pageName) => {
    setPage(pageName);  // Update the page state when a button is clicked
    console.log("clicked"+pageName)
  };

  switch (page) {
    case 'home':
      return <Index handleNavigation={handleNavigation} />;  // Pass handleNavigation to the child
    case 'portfolio':
      return <Portfolio handleNavigation={handleNavigation}/>;
    case 'projects':
      return <Projects handleNavigation={handleNavigation}/>;
    default:
      return <Index handleNavigation={handleNavigation} />;  // Default to home if unknown
  }
}

export default App;
