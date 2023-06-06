import React from 'react';
import { Box, Container, Typography } from '@mui/material';

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
};

const data = [
    {
        title: "Information We Collect",
        items: [
            "Service Delivery: We use the information collected to provide and improve our logistics services, process shipments, and communicate with you regarding your orders.",
            "Usage Information: We gather non-personal information, including your IP address, browser type, and device information, to analyze trends, administer our website, and improve user experience."
        ]
    },
    {
        title: "Use of Information",
        items: [
            "Personal Information: We may collect personal information, such as your name, contact details, and shipping addresses, to provide our logistics services and fulfill your requests.",
            "Internal Operations: We may use your information for internal purposes such as data analysis, auditing, and enhancing our services' effectiveness.",
            "Communication: We may contact you to provide updates, respond to inquiries, or deliver important notifications related to your shipments or our services.",
            "Legal Compliance: We may disclose your information if required by law, to protect our rights, or to comply with legal processes."
        ]
    },
    {
        title: "Information Sharing",
        items: [
            "Third-Party Service Providers: We may engage trusted third-party service providers to assist in delivering our logistics services. These providers are bound by confidentiality agreements and are only authorized to use your information for the intended purpose.",
            "Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity, subject to applicable privacy laws.",
            "Consent: We will obtain your consent before sharing your information with third parties for purposes other than those outlined in this policy."
        ]
    },
    {
        title: "Data Security",
        items: [
            "We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, or destruction.",
            "However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security."
        ]
    },
    {
        title: "Data Retention",
        items: [
            "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law."
        ]
    },
    {
        title: "Your Rights and Choices",
        items: [
            "Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child, we will take steps to delete it."
        ]
    },
    {
        title: "Children's Privacy",
        items: [
            "Third-Party Service Providers: We may engage trusted third-party service providers to assist in delivering our logistics services. These providers are bound by confidentiality agreements and are only authorized to use your information for the intended purpose."
        ]
    },
    {
        title: "External Links",
        items: [
            "Our website may contain links to external sites that are not governed by this Privacy Policy. We are not responsible for the privacy practices or content of such third-artyp sites."
        ]
    },
    {
        title: "Policy Updates",
        items: [
            "We may update this Privacy Policy from time to time. Any changes will be effective upon posting the revised policy on our website. We encourage you to review this policy periodically."
        ]
    }

];

export default function PrivacyContent() {
    return (
        <Box sx={{ mt: "3rem", mb: "8rem" }}>
            <Container>
                <Typography sx={makeStyle.text}>
                    At Reeroute, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when accessing our logistics services. By using our services, you consent to the practices described in this policy.
                </Typography>
                {data.map((section, index) => (
                    <Box key={index}>
                        <Typography variant="h6" sx={makeStyle.text}>{index + 1}. {section.title}</Typography>
                        <Box sx={{ ml: "25px",mb:"15px" }}>
                            {section.items.map((item, itemIndex) => (
                                <Typography key={itemIndex} sx={makeStyle.text}>{`${String.fromCharCode(97 + itemIndex)}. ${item}`}</Typography>
                            ))}
                        </Box>
                    </Box>
                ))}

                <Typography sx={makeStyle.text}>If you have any questions or concerns regarding our Privacy Policy, please contact us using the provided contact information. By using our logistics services, you agree to the terms of this Privacy Policy and consent to the collection and use of your information as described herein.</Typography>
            </Container>
        </Box>
    )
}
