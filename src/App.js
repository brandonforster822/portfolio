import HomePage from './components/HomePage'
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
