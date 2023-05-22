import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  return (
    <section id="footer">
      <Box sx={{ py: 2, mt: 5 }}>
        <CustomContainer>
          <CustomContainer>
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#7A7A7E",
                  fontWeight: "500",
                  mb: 2,
                }}
              >
                © 2023 Morris&Opazo Team. All rights reserved.
              </Typography>
            </Box>
          </CustomContainer>
        </CustomContainer>
      </Box>
    </section>
  );
};

export default Footer;
