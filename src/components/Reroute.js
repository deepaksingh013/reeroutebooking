import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import img1 from "../images/1.png"
import vector20 from "../images/Vector 20.png"
import img2 from "../images/2.png"
import img4 from "../images/4.png"
import img5 from "../images/5.png"
import img3 from "../images/3.png"
import vector22 from "../images/Vector 22 (1).png"
import vector27 from "../images/Vector 27.png"
import imgA from "../images/s1 3.png"
import imgB from "../images/s2.png"
import imgC from "../images/s3.png"
import imgD from "../images/s4.png"
import imgE from "../images/s5 (1).png"
const makeStyle = {
  mainBox: {
    marginTop: "2rem",
    marginLeft: '4rem',
    marginRight: "4rem"
  },
  title: {
    fontWeight: "400",
    fontFamily: "'Rubik', sans-serif",
    fontSize: "14px",
    fontStyle: "normal",
    width: "90px",
    color: "#2A4F6D",
    paddingLeft: "10px",
    backgroundColor: "rgba(232, 232, 232, 0.5)",
    borderLeft: "4px solid #F79633"
  },
  content1: {
    fontFamily: "'Rubik', sans-serif",
    fontWeight: "600",
    fontSize: "50px",
    fontStyle: "normal",
    color: "#2A4F6D"
  },
  content2: {
    fontFamily: "'Krub', sans-serif",
    fontWeight: "500",
    fontSize: "30px",
    color: "rgba(42, 79, 109, 1)",
    fontStyle: "normal",
  },
  info: {
    marginTop: "25px",
    color: "#666C89",
    fontFamily: "'Krub', sans-serif",
    fontWeight: "500",
    fontSize: "20px",
  },
  arrow: {
    marginBottom: "15%"
  },
  orderBox: {
    margin: "auto",
    borderRadius: "50%",
    height: "75px",
    width: "75px",
    backgroundColor: "#F79633",
    marginTop: "20px"
  },
  order: {
    fontFamily: "'Krub', sans-serif",
    fontFamily: "'Krub', sans-serif",
    fontWeight: "600",
    fontSize: "20px",
    fontStyle: "bold !important",
    fontSize: "20px",
    color: "#fff"
  }
}

export default function Reroute() {
  return (
    <div>
      <Box sx={makeStyle.mainBox}>
        <Box >
          <Typography sx={makeStyle.title}>How it works</Typography>
          <Typography sx={makeStyle.content1}>How Reeroute works</Typography>
          <Typography sx={makeStyle.content2}>With Reeroute, experience the perfect blend of reliability and convenience in your transportation needs.</Typography>
        </Box>
        <Box sx={{ mt: "3rem" }}>
          <Grid container spacing={2}>
            <Grid item lg={5}>
              <img src={window.location.pathname === "/" ? img1 : imgA} alt="" />
              <img src={vector20} alt="" style={makeStyle.arrow} />
              <Typography sx={makeStyle.info}>Enter the query details including origin, destination & type of truck required.</Typography>
              <Box sx={makeStyle.orderBox} display="flex" justifyContent="center" alignItems="center">
                <Box>
                  <Typography sx={makeStyle.order}>1</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={5}>
              <img src={window.location.pathname === "/" ? img2 : imgB} alt="" />
              <img src={vector20} alt="" style={makeStyle.arrow} />
              <Typography sx={makeStyle.info} width="80%">The query is shared with our 10,000+ verified partners in real-time</Typography>
              <Box sx={makeStyle.orderBox} display="flex" justifyContent="center" alignItems="center">
                <Box>
                  <Typography sx={makeStyle.order}>2</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={2}>
              <img src={window.location.pathname === "/" ? img4 : imgC} alt="" />
              <Typography sx={makeStyle.info}>Get the best quote out of all the interested partners</Typography>
              <Box sx={makeStyle.orderBox} display="flex" justifyContent="center" alignItems="center">
                <Box>
                  <Typography sx={makeStyle.order}>3</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          {/*  */}
        </Box>
        <Box sx={{ minHeight: "600px", mt: "5rem" }} >
          <Grid container spacing={2} >

            <Grid item lg={6}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box sx={{ position: "relative" }}>
                  <img src={window.location.pathname === "/" ? img5 : imgE} alt="" />

                  <Typography sx={makeStyle.info} marginBottom={10}>Upon trip completion, download POD from ReeRoute App.</Typography>
                  <img src={vector27} alt="" style={{ position: 'absolute', left: '70%', right: "100px" }} />
                  <Box sx={makeStyle.orderBox} display="flex" justifyContent="center" alignItems="center" >
                    <Box >
                      <Typography sx={makeStyle.order}>5</Typography>
                    </Box>
                  </Box>


                </Box>


              </Box>
              {/* <Box sx={makeStyle.orderBox} display="flex" justifyContent="center" alignItems="center">
                <Box>
                  <Typography sx={makeStyle.order}>4</Typography>
                </Box>
              </Box> */}
            </Grid>
            <Grid item lg={6}>
              <Box display="flex" justifyContent="center" alignItems="center" sx={{ position: "relative" }}>
                <Box>
                  <img src={window.location.pathname === "/" ? img5 : imgD} alt="" />
                  <Typography sx={makeStyle.info} marginBottom={10}>Upon trip completion, download POD from ReeRoute App.</Typography>
                  <Box sx={makeStyle.orderBox} display="flex" justifyContent="center" alignItems="center" >
                    <Box >
                      <Typography sx={makeStyle.order}>4</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <img src={vector22} alt="" style={{ position: "absolute", right: "0", bottom: "-10px" }} />
                </Box>
              </Box>
              {/* <Box sx={makeStyle.orderBox} display="flex" justifyContent="center" alignItems="center">
                <Box>
                  <Typography sx={makeStyle.order}>4</Typography>
                </Box>
              </Box> */}
            </Grid>
          </Grid>
        </Box>

      </Box>
    </div>
  )
}
