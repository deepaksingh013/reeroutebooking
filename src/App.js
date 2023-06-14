// import logo from './logo.svg';
import './App.css';
import { Form, Route, Routes } from "react-router-dom"
import Trucker from './trucker/Trucker';
import Navbar from './components/Navbar';
import Shipper from './shipper/Shipper';
import Contact from './contact/Contact';
import Carrers from './Carrers/Carrers';
import Tc from './t&c/Tc';
import PrivacyPolicy from './privacypolicy/PrivacyPolicy';
import About from './about/About';
import Forms from './shipper/Forms';
import For from './components/For';
import { Box } from '@mui/material';
import Navbarr from './components/Navbarr';
// import Slider from './components/Slider';


function App() {
  return (

    <>
      <Box sx={{ position: "absolute", top: "0", zIndex: "1000", width: "100%" }}>
        <Navbarr />

      </Box>

      <Routes>
        <Route path="/" element={<Shipper />} />
        <Route path="/trucker" element={<Trucker />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carrers" element={<Carrers />} />
        <Route path="/t&c" element={<Tc />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>

      {/* <Slider /> */}

      {/* <Forms/> */}
      {/* <Navbarr/> */}

    </>
  );
}

export default App;
