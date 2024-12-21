```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Removed wildcard, added exact matching for contact */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div>};
function About() { return <div>About</div>};
function Contact() { return <div>Contact</div>};
```