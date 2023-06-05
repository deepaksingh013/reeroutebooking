import React, { useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import img1 from "../images/Photo (1).jpg";
import img2 from "../images/Photo (2).jpg";
import img3 from "../images/Photo (3).jpg";
import img4 from "../images/Photo (4).jpg";

const images = [
  img1,
  img2,
  img3,
  img4
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const rightClickHandler = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <Container>
        <Box sx={{ width: "100%", overflow: "hidden" }}>
          <div style={{
            display: "flex",
            transform: `translateX(-${currentIndex * 300}px)`,
            transition: "transform 0.5s ease-in-out",
            height: "300px"
          }}>
            {images.map((item, index) => (
              <Box key={index} sx={{ display: "flex", height: "300px", width: "300px", width: "25%" }}>
                <img src={item} alt="" />
              </Box>
            ))}
          </div>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Button onClick={rightClickHandler}>Next Image</Button>
        </Box>
      </Container>

    </>
  );
}

export default Slider;