import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import HomePage from './components/HomePage';  // make sure you created this

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<HomePage />} />
          {/* fallback: if no route matches, go to SignIn */}
          <Route path="*" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
