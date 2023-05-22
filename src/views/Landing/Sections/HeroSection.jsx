import React, { useEffect } from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import heroImg from "../../../assets/IOT-MARCA2-removebg.png";
import CustomButton from "../../../components/CustomButton";
import Navbar from "../../../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(-7),
    marginBottom: theme.spacing(15),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "50px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <section data-aos="zoom-in" id="HeroSection">
      <Box sx={{ backgroundColor: "#FFFFFF", minHeight: "80vh" }}>
        <Container>
          <Navbar />
          <CustomBox>
            <Box sx={{ flex: "1" }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "18px",
                  color: "#687690",
                  fontWeight: "500",
                  mt: 10,
                  mb: 4,
                }}
              >
                Bienvenidos a MIoT
              </Typography>
              <Title variant="h1" sx={{color: "#11437c}"}}>
                Promovemos la innovación digital y la optimización de procesos
                logísticos
              </Title>
              <Typography
                variant="body2"
                sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
              >
                El IoT identifica a la conexión de dispositivos a internet
                utilizando sensores incorporados para comunicarse y recopilar e
                intercambiar datos entre sí. Desde nuestra empresa proponemos
                una infraestructura IoT gestionada y totalmente segura para las
                comunicaciones.
              </Typography>
              <a href="#contact">
                <CustomButton
                  backgroundColor="#15B9F0"
                  color="#fff"
                  buttonText="Contáctanos"
                  heroBtn={true}
                />
              </a>
            </Box>
            <Box sx={{ flex: "0.9" }}>
              <img
                src={heroImg}
                alt="heroImg"
                style={{ maxWidth: "100%", marginBottom: "1rem", marginTop: "3rem" }}
              />
            </Box>
          </CustomBox>
        </Container>
      </Box>
    </section>
  );
};

export default HeroSection;
