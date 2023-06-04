import { Grid, Typography, Box, Container } from '@mui/material'
import React from 'react'

const makeStyle = {
    counterBox:{
        display:"flex",
        justifyContent:"center",
        alignitem:"center",
        textAlign:"center",
        margin:"2rem 2rem 0rem 2rem"
    },
    mainBox:{
        // border: "1px solid red",
        display:"flex",
        // justifyContent:"space-between",
        alignItem:"center"
    },
    smallBox:{
        marginTop:"20px",
        height:"17px",
        width:"17px",
        backgroundColor:"#E57E38",
        marginRight:"10px",
        marginLeft:"10px",
    },
    counter: {
        color: "#2A4F6D",
        fontFamily: "'Rubik', sans-serif",
        fontWeight: "600",
        fontSize: "42px",
        "@media (max-width: 768px)": {
          fontSize: "36px",
        },
        "@media (max-width: 480px)": {
          fontSize: "28px",
        },
      },
    title:{
        // paddingBottom:"10px",
        fontfamily: "'League Spartan', sans-serif",
        fontSize:"20px",
        fontWeight:"400",
        color:"#2A4F6D",
        "@media (max-width: 768px)": {
            fontSize: "20px",
          },
          "@media (max-width: 480px)": {
            fontSize: "16px",
          },
        // marginTop:"10px"
    }
}

export default function Counter() {
    const counter = [
        {
            counter: "10000+",
            title: "Vehicle Owners"
        },
        {
            counter: "25000+",
            title: "Successful Bookings"
        },
        {
            counter: "3000+",
            title: "Satisfied clients"
        },
        {
            counter: "70+",
            title: "Cities Covered"
        }
    ]
    return (
        <>
        <Box sx={makeStyle.counterBox}>
                <Grid container spacing={2}>
                    {counter.map((item, index) => {
                        return <Grid item lg={3} xs={12} md={6}>
                            <Box sx={makeStyle.mainBox}>
                                <Typography sx={makeStyle.counter}>{item.counter}</Typography>
                       <Box sx={{display:"flex",justifyContent:"center",textAlign:"center"}}>
                       <Box sx={makeStyle.smallBox}></Box>
                                   <Typography sx={makeStyle.title}>{item.title}</Typography>
                       </Box> 
                            </Box>
                        </Grid>
                    })}
                </Grid>
        </Box>

        </>
    )
}
