import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import NoteState from './context/notes/NotesState';
import Alert from './components/Alert';

function App() {
  return (
    <>
      <NoteState>
       
          <Router>
            <Navbar />
            <Alert />
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
            </Routes>
          </Router>
       
      </NoteState>
    </>
  );
}

export default App;
