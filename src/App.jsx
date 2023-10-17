import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import UseEffect from './UseEffect'; // Import the 'UseEffect' component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<h1>contact page</h1>} />
        <Route path="/useEffect" element={<UseEffect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;