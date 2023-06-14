import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import truckImg1 from "../images/HIW1.png";
import truckImg2 from "../images/s1 10.png";
import truckImg3 from "../images/abouttrucker.png";

const initialStyle = {
    height: "30px",
    width: "30px",
    backgroundColor: "red",
    marginBottom: "10px"
};

const updateStyle = {
    height: "30px",
    width: "30px",
    backgroundColor: "pink",
    marginBottom: "10px"
};

const Background = () => {
    const [currentBackground, setCurrentBackground] = useState(0);
    const backgrounds = [truckImg1, truckImg2, truckImg3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBackground((prevBackground) => (prevBackground + 1) % backgrounds.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const [circleStyles, setCircleStyles] = useState([
        initialStyle,
        initialStyle,
        initialStyle
    ]);

    useEffect(() => {
        const updatedStyles = circleStyles.map((style, index) => {
            if (index === currentBackground) {
                return updateStyle;
            } else {
                return initialStyle;
            }
        });

        setCircleStyles(updatedStyles);
    }, [currentBackground]);

    const bannerStyle = {
        height: '400px',
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${backgrounds[currentBackground]})`,
    };

    return (
        <>
            <Box style={bannerStyle} />

            <Box>
                <Box style={circleStyles[0]} />
                <Box style={circleStyles[1]} />
                <Box style={circleStyles[2]} />
            </Box>
        </>
    );
};

export default Background;
