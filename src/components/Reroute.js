import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import img1 from "../images/1.png"
import vector20 from "../images/Vector 20.png"
import kyc from "../images/163.png"
import mobile2 from "../images/164.png"
import mobile3 from "../images/165.png"
import img2 from "../images/2.png"
import img4 from "../images/4.png"
import mv1 from "../images/Vector 72.png"
import img44 from "../images/166.png"
import img167 from "../images/167.png"
import img5 from "../images/5.png"
import img6 from "../images/3.png"
import vector22 from "../images/Vector 26.png"
import vector23 from "../images/Vector 23.png"

const makeStyle = {
  mainBox: {
    marginTop: "2rem",
    marginLeft: '2rem',
    marginRight: "4rem",
    "@media (max-width: 700px)": {
      marginLeft: "2rem",
      marginBottom: "4rem"
    },
    "@media (max-width: 486px)": {
      marginLeft: "1rem",
    },
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
    borderLeft: "4px solid #F79633",
    "@media (max-width: 650px)": {
      paddingLeft: '2px'
    },

  },
  content1: {
    marginTop: "1rem",
    marginBottom: "1rem",
    fontFamily: "'Rubik', sans-serif",
    fontWeight: "600",
    fontSize: "50px",
    fontStyle: "normal",
    color: "#2A4F6D",
    "@media (max-width: 650px)": {
      fontSize: "30px"
    },
    "@media (max-width: 435px)": {
      fontSize: '20px'
    },
  },
  content2: {
    fontFamily: "'Krub', sans-serif",
    fontWeight: "500",
    fontSize: "30px",
    color: "rgba(42, 79, 109, 1)",
    fontStyle: "normal",
    "@media (max-width: 650px)": {
      fontSize: "20px"
    },
    "@media (max-width: 435px)": {
      fontSize: '15px'
    },
  },
  info: {
    textAlign: "center",
    // border: "1px solid red",
    color: "#666C89",
    fontFamily: "'Krub', sans-serif",
    fontWeight: "500",
    fontSize: "20px",
    height: "50px",
    "@media (max-width: 700px)": {
      marginBottom: "10px",
      float: 'right',
      width: "50%"
    },
    "@media (max-width: 360px)": {
      width: "70%"
    },
    "@media (max-width: 1000px)": {
      // height: "80px",
      fontSize: "14px",
      height: "60px",
    },
    "@media (max-width: 1354px)": {
      // height: "80px",
      fontSize: "14px",

    },
  },
  webArrow: {
    "@media (max-width: 700px)": {
      display: "none"
    },
  },
  arrow: {
    maxWidth: "100%",
    height: "auto",
    marginTop: "30px",
  },
  orderBox: {
    margin: "auto",
    borderRadius: "50%",
    height: "75px",

    width: "75px",
    backgroundColor: "#F79633",
    marginTop: "20px",
    "@media (max-width: 700px)": {
      display: "none"
    },
  },
  order: {
    fontFamily: "'Krub', sans-serif",
    fontFamily: "'Krub', sans-serif",
    fontWeight: "600",
    fontSize: "40px",
    fontStyle: "bold !important",
    fontSize: "20px",
    color: "#fff",

  },
  imgStyle: {
    marginRight: "20px",
    maxWidth: "100%",
    height: "auto",
  },
  imgStyle3: {
    marginTop: "1px",
    maxWidth: "100%",

    marginRight: "20px",
    height: "auto",
    "@media (max-width: 700px)": {
      display: "none",
    },
  },
  imgStyle2: {
    objectFit: "contain",
    maxWidth: "40%",
    height: "auto",
    marginBottom: "40px",
    "@media (max-width: 700px)": {
      height: "auto",
      maxWidth: "50%",
    },
  },
  rerouteContent: {
    // border: "1px solid red",

    display: "flex",
    height: "250px",
    justifyContent: "space-between",
    position: "relative",
    "@media (max-width: 700px)": {
      height: "500px",
      width: "80vw",
      justifyContent: "flex-end",
    },
    "@media (max-width: 600px)": {
      height: "600px",
    },
    "@media (max-width: 1000px)": {
      height: "120px",
    },
    "@media (max-width: 1600px)": {
      height: "220px",
    },
    "@media (max-width: 1400px)": {
      height: "200px",
    },
    "@media (max-width: 1200px)": {
      height: "160px",
    },

  },
  mobile: {
    // border: "1px solid red",
    display: "flex",
    height: "250px",
    "@media (max-width: 1600px)": {
      height: "220px",
    },
    "@media (max-width: 1400px)": {
      height: "200px",
    },
    "@media (max-width: 1200px)": {
      height: "160px",
    },
    "@media (max-width: 700px)": {
      height: "200px",
      width: "80vw",
      justifyContent: "flex-end",
    },
  },
  dnone: {
    display: "block",
    "@media (max-width: 700px)": {
      display: "none"
    },
  },
  dview: {
    marginLeft: "30px",
    display: "none",
    "@media (max-width: 700px)": {
      display: "block"
    },
  },
  mv1: {
    display: "none",
    "@media (max-width: 700px)": {
      top: "90px",
      position: "absolute",
      left: "0",
      display: "block",
    },
  },
  mv2: {
    display: "none",
    "@media (max-width: 700px)": {
      position: "absolute",
      top: "66px",
      left: "0px",
      display: "block",
    },
  },
  mv2: {
    display: "none",
    "@media (max-width: 700px)": {
      position: "absolute",
      top: "66px",
      left: "0px",
      display: "block",
    },
  },
  mediaInfo: {
    // marginTop: "-1px",
    "@media (max-width: 700px)": {
      // border: "5px solid pink",
      width: '78vw',

    },
  },
  info2: {
    textAlign: "center",
    // border: "1px solid red",
    color: "#666C89",
    fontFamily: "'Krub', sans-serif",
    fontWeight: "500",
    fontSize: "20px",
    width: "50%",
    "@media (max-width: 1000px)": {
      width: "85%"
    },
  },
  vector2: {
    maxWidth: "100%",
    height: "auto",
    position: "absolute",
    left: "0",
  },
  imgStyle4: {
    objectFit: "contain",
    backgroundSize: "cover",
    maxWidth: "100%",
    height: "auto",
  },
  imgStyle5: {
    maxWidth: "100%",
    height: "auto"
  },

  // mobile view 
  order1: {
    color: "#fff",
    display: "none",
    position: "absolute", top: "75px", left: "-10px", background: "#F79633", height: "25px", width: "25px", borderRadius: "50%", textAlign: "center",
    "@media (max-width: 700px)": {
      display: 'block'
    },
  },
  smallOrder3: {
    color: "#fff",
    display: "none",
    position: "absolute", left: "-10px", top: "19px", background: "#F79633", height: "25px", width: "25px", borderRadius: "50%", textAlign: "center",
    "@media (max-width: 700px)": {
      display: 'block'
    },
  },

  smallOrder2: {
    color: "#fff",
    display: "none",
    position: "absolute", top: "40px", left: "-10px", background: "#F79633", height: "25px", width: "25px", borderRadius: "50%", textAlign: "center",
    "@media (max-width: 700px)": {
      display: 'block'
    },
  },

  // mobileview reroute bottom side
  bottomSide: {
    // border:"1px solid red",
    mt:"40px",
    display: "none",
    "@media (max-width: 700px)": {
      display: "block"
    },
  },
  order4: {
    color: "#fff",
    position: "absolute",
    background: "#F79633",
    height: "25px",
    width: "25px",
    borderRadius: "50%",
    textAlign: "center",
    left: "10px",
    top: "13px",
    "@media (max-width: 486px)": {
      top: "10px",
      left: "-10px"
    },
  },

  txt4: {
    marginLeft: "10px",
    textAlign: "center",
    // border: "1px solid red",
    color: "#666C89",
    fontFamily: "'Krub', sans-serif",
    fontWeight: "500",
    fontSize: "20px",
    "@media (max-width: 1000px)": {
      fontSize: "16px"
    },

  },

  vector4: {
    position: "absolute",
    left: "23px",
    top: "38px",
    "@media (max-width: 486px)": {
      position:"absolute",
      right: "40px",
      // left:"10px"
    },
  },
  vector4r: {
     
    "@media (max-width: 486px)": {
      position: "absolute",
      left:"-23px",
      
    },
  },
  order5: {
    color: "#fff",
    position: "absolute",
    background: "#F79633",
    height: "25px",
    width: "25px",
    borderRadius: "50%",
    textAlign: "center",
    top: "-25px",
    left: "14px",
    "@media (max-width: 486px)": {
      position: "absolute",
      left: "-10px"
    },
  },
  mv5: {
    display: "none",
    "@media (max-width: 700px)": {
      display: "block",
      top: "45px",
      position: "absolute",
      left: "0px",

    },
  },
  mainBox2: {
    marginLeft: "10%", marginTop: "4rem",
    "@media (max-width: 700px)": {
      marginLeft: "0%"

    },
  },


  // styling for bottom side web view

  bottomRoute: {
    
    display: "block",
    marginRight: "4rem",
    marginLeft: "4rem",
    height: "380px",
    maxWidth: "100%",
    position: "relative",
    display: "flex",
    mt: "-100px",
    "@media (max-width: 700px)": {
      display: "none",
    },
  },
  vector22img: {
    position: "absolute",
    right: "11%",
    bottom: "0px",
    objectFit: "contain",
    maxWidth: "14%",
    height: "100%",
    top: "10%"


  },
  vector23img: {
    position: "absolute",
    right: "0",
    maxWidth: "27%",
    bottom: "0px",
    left: "37%"
  },
  item1: {
    // backgroundColor: "red",
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    mt: "-30px",
    marginLeft: "15%"
  },
  item2: {
    width: "50%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", mt: "-30px",
    marginRight: "12%",
    "@media (max-width: 1000px)": {
      marginRight: "30px"
    },
  },
  info4: {
    display: "flex", justifyContent: "center", alignItems: "center", width: "60%", textAlign: "center", color: "#666C89",
    fontFamily: "'Krub', sans-serif",
    fontWeight: "500",
    fontSize: "20px",
    width: "50%",
    "@media (max-width: 1000px)": {
      // height: "80px",
      fontSize: "14px",
      width: "70%",
    },
    "@media (max-width: 1354px)": {
      // height: "80px",
      fontSize: "14px",

    },

  },
  orderBottom: {
    color: "#fff",
    fontWeight: "700",
    fontSize: "25px",
    position: "absolute", bottom: "0", background: "#F79633",
    height: "75px",
    width: "75px",
    borderRadius: "50%",
    textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center"
  }




}

export default function Reroute() {
  return (
    <div>
      <Box sx={makeStyle.mainBox}>
        <Box sx={makeStyle.mainBox2}>
          <Typography sx={makeStyle.title}>How it works</Typography>
          <Typography sx={makeStyle.content1}>How Reeroute works</Typography>
          <Typography sx={makeStyle.content2}>With Reeroute, experience the perfect blend of reliability and convenience in your transportation needs.</Typography>
        </Box>
        <Box sx={{ mt: "5rem", ml: "5%" }}>
          <Grid container spacing={2} sx={{ '@media (max-width: 700px)': { flexDirection: 'column', justifyContent: "flex-end" } }}>
            <Grid item lg={4} md={4} sm={4}>

              <Box sx={makeStyle.rerouteContent}>
                <Typography sx={makeStyle.order1}>1</Typography>
                <Box sx={makeStyle.mv1}>
                  <img src={mv1} alt="" sx={makeStyle.im1} />
                </Box>

                <Box sx={makeStyle.dnone}>
                  <img src={img1} alt="" style={makeStyle.imgStyle} />
                </Box>
                <Box sx={makeStyle.dview}>
                  <img src={mobile2} alt="" style={makeStyle.imgStyle} />
                </Box>


                <Box sx={makeStyle.webArrow}>
                  <img src={vector20} alt="" style={makeStyle.arrow} />
                </Box>
              </Box>
              <Box sx={makeStyle.mediaInfo}>
                <Typography sx={makeStyle.info}>Enter the query details including origin, destination & type of truck required.</Typography>
              </Box>
              <Box sx={makeStyle.orderBox} display="flex" justifyContent="center" alignItems="center">
                <Box>
                  <Typography sx={makeStyle.order}>1</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={4}>
              <Box sx={makeStyle.rerouteContent}>
                <Typography sx={makeStyle.smallOrder2}>2</Typography>
                <Box sx={makeStyle.mv2}>

                  <img src={mv1} alt="" sx={makeStyle.im1} />
                </Box>
                <Box sx={makeStyle.dnone}>
                  <img src={img2} alt="" style={makeStyle.imgStyle3} />
                </Box>
                <Box sx={makeStyle.dview}>
                  <img src={kyc} alt="" style={makeStyle.imgStyle3} />
                </Box>
                <Box sx={makeStyle.webArrow}>
                  <img src={vector20} alt="" style={makeStyle.arrow} />
                </Box>
              </Box>

              <Box sx={makeStyle.mediaInfo}>
                <Typography sx={makeStyle.info}>The query is shared with our 10,000+ verified partners in real-time</Typography>
              </Box>


              <Box sx={makeStyle.orderBox} display="flex" justifyContent="center" alignItems="center">
                <Box>
                  <Typography sx={makeStyle.order}>2</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={4}>
              <Box sx={{ position: "relative" }}>
                <Typography sx={makeStyle.smallOrder3}>3</Typography>
                <Box sx={makeStyle.mobile}>

                  <Box sx={makeStyle.mv5}>
                    <img src={mv1} alt="" sx={makeStyle.im1} />
                  </Box>
                  <img src={window.innerWidth > 700 ? img4 : mobile3} alt="" style={makeStyle.imgStyle2} />

                </Box>
                <Box sx={makeStyle.mediaInfo}>
                  <Typography sx={makeStyle.info}>Get the best quote out of all the interested partners</Typography>
                </Box>
                <Box sx={makeStyle.orderBox} display="flex" justifyContent="center" alignItems="center">
                  <Box>
                    <Typography sx={makeStyle.order}>3</Typography>
                  </Box>
                </Box>
              </Box>

            </Grid>
          </Grid>
          {/* bottom side */}
        </Box>
        <Box  >
        </Box>



      </Box>


      {/* bottom side web view reroute works */}

      <Box sx={makeStyle.bottomRoute}>
        <img src={vector22} alt="" style={makeStyle.vector22img} />
        <img src={vector23} alt="" style={makeStyle.vector23img} />
        <Box sx={makeStyle.item1}>
          <img src={img5} alt="" style={{ maxWidth: "80%", height: "165px" }} />
          <Typography sx={makeStyle.info4}>Upon trip completion, download POD from ReeRoute App.</Typography>
          <Typography sx={makeStyle.orderBottom}>5</Typography>
        </Box>
        <Box sx={makeStyle.item2}>
          <img src={img6} alt="" style={{ maxWidth: "80%", height: "165px" }} />
          <Typography sx={makeStyle.info4}>Confirm the quote and your booking is confirmed.</Typography>
          <Typography sx={makeStyle.orderBottom}>4</Typography>
        </Box>
      </Box>








      {/* bottom side mobile view */}

      <Box sx={makeStyle.bottomSide}>
        <Box sx={{ height: "300px", width: "90%", ml: "2rem", display: "flex", justifyContent: "space-between", mt: "-59px" }}>
          <Box sx={{ width: "30%", height: "100%", position: 'relative' }}>
            <Typography sx={makeStyle.order4}>4</Typography>
            <Box sx={makeStyle.vector4r}>
              <img src={mv1} alt="" style={makeStyle.vector4} />
            </Box>

          </Box>
          <Box sx={{ width: "55%", height: "100%", mt: "-30px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Box>
              <img src={img44} alt="" style={{ margin: "auto", alignItems: "center" }} />
            </Box>

            <Typography sx={makeStyle.txt4}>Confirm the quote and your booking is confirmed.</Typography>
          </Box>
        </Box>
        <Box sx={{ height: "00px", width: "90%", ml: "2rem", display: "flex", justifyContent: "space-between", position: "relative" }}>

          <Box sx={{ width: "60%", height: "100%" }}>
            <Typography sx={makeStyle.order5}>5</Typography>
          </Box>
          <Box sx={{ mt: "50px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
            <Box>
              <img src={img167} alt="" />

            </Box>
            <Box>
              <Typography sx={makeStyle.txt4}>Upon trip completion, download POD from ReeRoute App.</Typography>
            </Box>


          </Box>
        </Box>
      </Box>
      {/* bottom side mobile view end */}


    </div>
  )
}
