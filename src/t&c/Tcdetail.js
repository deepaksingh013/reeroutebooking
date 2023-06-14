import { Container, Typography, Box } from '@mui/material';
import React from 'react';

const data = [
    {
        title: "Service Agreement",
        item1: "Our services are subject to availability and are provided on a best-effort basis.",
        item2: "We reserve the right to refuse service to any individual or business without providing a reason."
    },
    {
        title: "Pricing and Payment ",
        item1: "The pricing for our logistics services is provided upon request and is subject to change. ",
        item2: "Payment terms and methods will be communicated to you and must be adhered to as agreed upon."
    },
    {
        title: "Shipment Handling",
        item1: "We handle shipments with care, but we are not liable for any loss or damage during transportation.",
        item2: "You are responsible for ensuring that shipments comply with relevant laws, regulations, and customs requirements."
    },
    {
        title: "Delivery and Trnsit Times",
        item1: "We strive to provide accurate delivery estimates, but they are not guaranteed.",
        item2: "Transit times may vary due to factors beyond our control, such as weather conditions or transportation delays."
    },
    {
        title: "Liability and Insurance ",
        item1: "Our liability for any loss or damage is limited as per the ters of our insurance coverage. ",
        item2: "It is recommended that you obtain additional insurance to cover the full value of your shipments."
    },
    {
        title: "Confidentiality",
        item1: "Any information shared with us in the course of providing our services will be treated as confidential.",
        item2: "We will not disclose your confidential information to third parties without your consent, unless required by law."
    },

    {
        title: "Intellectual Property ",
        item1: "All intellectual property rights related to our website, services, and materials remain our property or that of our licensors.",
        item2: "You agree not to use, reproduce, or distribute our intellectual property without prior written permission."
    },

    {
        title: "Termination ",
        item1: "Ether party may terminate the service agreement with written notice.",
        item2: "Termination does not relieve you of any outstanding payment obligations or liabilities incurred before termination."
    },
    {
        title: "Governing Law and Jurisdiction ",
        item1: "These terms and conditions are governed by the laws of India.",
        item2: "Any disputes arising from these terms and conditions will be subject to the exclusive jurisdiction of the courts in India."
    }
    // ... other data objects
];

const makeStyle = {
    text: {
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "24px",
        color: "#2A4F6D",
        "@media (max-width: 600px)": {
            fontSize: "20px"
        },
        "@media (max-width: 400px)": {
            fontSize: "16px"
        },
    },
    textA: {
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "24px",
        color: "#2A4F6D",
        ml: "15px",
        mb: "2px",
        "@media (max-width: 600px)": {
            fontSize: "20px"
        },
        "@media (max-width: 400px)": {
            fontSize: "16px"
        },
    },
    textB: {
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "24px",
        color: "#2A4F6D",
        ml: "15px",
        mb: "2px",
        mb: "10px",
        mt: "-7px",
        ml: "15px",
        "@media (max-width: 600px)": {
            fontSize: "20px"
        },
        "@media (max-width: 400px)": {
            fontSize: "16px"
        },
    }
}


export default function Tcdetail() {
    return (
        <>
            <Box sx={{ mt: "3rem", mb:"4rem"}}>
                <Container sx={{mb:"10rem",pb:"4rem"}}>
                    <Typography sx={makeStyle.text}>
                        Welcome to Reeroute. These terms and conditions govern your use of our logistics services. By engaging with our services, you agree to comply with these terms and conditions. Please read them carefully.
                    </Typography>
                    {data.map((item, index) => (
                        <Typography key={index} sx={{ position: "relative" }}>
                            <Box>
                                <Box sx={makeStyle.text} display="flex">
                                    <Typography sx={makeStyle.text}>{index + 1}.</Typography>
                                    <Typography sx={makeStyle.text}>{item.title}</Typography>
                                </Box>
                            </Box>
                            <Typography sx={makeStyle.textA}>{`${String.fromCharCode(97)}. ${item.item1}`}</Typography>
                            <Typography sx={makeStyle.textB}>{`${String.fromCharCode(98)}. ${item.item2}`}</Typography>
                        </Typography>
                    ))}
                    <Typography sx={makeStyle.text}>
                        By engaging with our logistics services, you acknowledge and agree to these terms and conditions. It is your responsibility to review them periodically for any updates or changes. If you have any questions or concerns, please contact us using the provided contact information on our website.
                    </Typography>
                </Container>
            </Box>
        </>
    );
}