import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import ImgCard from "../../../assets/IOT-MARCA2-removebg.png";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyUs = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#0F54A1",
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
    },
  }));

  const SmallText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#7B8087",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  }));

  const TextFlexbox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(7),
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 5, 0, 5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(5),
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    width: "13%",
    height: "5px",
    backgroundColor: "#0F54A1",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));

  return (
    <section data-aos="fade-up" id="whyus">
      <Box sx={{ py: 10, backgroundColor: "#E6F0FF", marginBottom: "5%" }}>
        <Container>
          <CustomBox>
            <ImgContainer>
              <img src={ImgCard} alt="house" style={{ maxWidth: "100%" }} />
            </ImgContainer>

            <Box>
              <Divider />
              <Typography
                sx={{
                  fontSize: "35px",
                  color: "#0F54A1",
                  fontWeight: "700",
                  my: 3,
                }}
              >
                Protección Robusta Contra los ataques
              </Typography>

              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#5A6473",
                  lineHeight: "27px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                porttitor eget dolor morbi non arcu risus.
              </Typography>
            </Box>

            <Box>
              <Divider />
              <Typography
                sx={{
                  fontSize: "35px",
                  color: "#0F54A1",
                  fontWeight: "700",
                  my: 3,
                }}
              >
                Protección Robusta Contra los ataques
              </Typography>

              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#5A6473",
                  lineHeight: "27px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                porttitor eget dolor morbi non arcu risus.
              </Typography>
            </Box>
          </CustomBox>

          <TextFlexbox>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <LargeText>2500+</LargeText>
              <SmallText>Lorem ipsum dolor</SmallText>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <LargeText>3000+</LargeText>
              <SmallText>Lorem ipsum dolor</SmallText>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <LargeText>3500+</LargeText>
              <SmallText>Lorem ipsum dolor</SmallText>
            </Box>
          </TextFlexbox>
        </Container>
      </Box>
    </section>
  );
};

export default WhyUs;
