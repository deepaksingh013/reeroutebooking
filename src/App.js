// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom"
import Trucker from './trucker/Trucker';
import Navbar from './components/Navbar';
import Shipper from './shipper/Shipper';
import Contact from './contact/Contact';
import Carrers from './Carrers/Carrers';


function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Shipper />} />
        <Route path="/trucker" element={<Trucker />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/carrers" element={<Carrers/>}/>
      </Routes>
    </>
  );
}

export default App;
