// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom"
import Trucker from './trucker/Trucker';
import Navbar from './components/Navbar';
import Shipper from './shipper/Shipper';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shipper />} />
        <Route path="/trucker" element={<Trucker />} />
      </Routes>
    </>
  );
}

export default App;
