import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "../components/Navbar.css";
import logo from "../images/mainlogo3.png"

const linkText = {
  fontSize: "16px",
  fontFamily: "'Krub', sans-serif",
  fontWeight: "400",
  borderBottom: "6px solid #fff",
  padding: "5px",
  borderRadius: "3px",
  marginRight: "25px"

};

const linkText2 = {
  fontSize: "16px",
  fontFamily: "'Krub', sans-serif",
  fontWeight: "400",
  padding: "5px",
  marginRight: "25px"
};

function Navbarr() {
  const navRef = useRef();
  const location = useLocation();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (

    <header >
      <Container>
        <img src={logo} alt="" style={{ height: "50px", marginTop: "10px" }} />
      </Container>


      <nav ref={navRef} >
        <Link to="/" onClick={hideNavbar}>
          <Typography sx={location.pathname === "/" ? linkText : linkText2}>
            Shipper
          </Typography>
        </Link>
        <Link to="/trucker" onClick={hideNavbar}>
          <Typography sx={location.pathname === "/trucker" ? linkText : linkText2}>
            Trucker
          </Typography>
        </Link>
        <Link to="/aboutus" onClick={hideNavbar}>
          <Typography sx={location.pathname === "/aboutus" ? linkText : linkText2}>About</Typography>
        </Link>
        <Link to="/carrers" onClick={hideNavbar} style={{ whiteSpace: 'nowrap' }}>
          <Typography sx={location.pathname === "/carrers" ? linkText : linkText2}>Careers</Typography>
        </Link>
        <Link to="/contact" onClick={hideNavbar}>
          <Typography sx={location.pathname === "/contact" ? linkText : linkText2}>Contact</Typography>
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <div>
            <img src={logo} alt="" style={{ height: "50px", marginTop: "10px", position: "absolute", left: "50px" }} />
          </div>
          <div>
            <CloseIcon sx={{ height: "36px", width: "36px", position: "absolute", right: "0" }} />
          </div>

        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <MenuIcon sx={{ height: "36px", width: "36px", mr: "20px" }} />
      </button>
    </header>

  );
}

export default Navbarr;
