import { Box, styled, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Solutions = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <section data-aos="fade-up-right" id="solutions">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "5%",
            height: "5px",
            backgroundColor: "#0F54A1",
            margin: "0 auto",
            marginTop: "10px",
          }}
        ></div>

        <Typography
          variant="h3"
          sx={{ fontSize: "35px", fontWeight: "bold", color: "#0F54A1", my: 3 }}
        >
          Nuestras soluciones
        </Typography>

        <CustomBox>
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#5A6473",
              textAlign: "center",
            }}
          >
            Todo lo que tienes que saber sobre nuestras soluciones.
          </Typography>
        </CustomBox>

        <GuidesBox gap={"30px"}>
          <GuideBox>
            <img
              src="http://landing-producto-iot.s3-website-us-east-1.amazonaws.com/static/media/chooseus-1.dee85da4e256071eaf8e.png"
              alt="buyIcon"
              style={{ width: "100%", height: "100%" }}
            />
            <Typography
              variant="body2"
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                color: "#3B3c45",
                my: 1,
              }}
            >
              Networking
            </Typography>
            <Box
              sx={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                Garantizamos la optima conectividad de diversos dispositivos de
                su empresa.
              </Typography>
            </Box>
          </GuideBox>

          <GuideBox>
            <img
              src="http://landing-producto-iot.s3-website-us-east-1.amazonaws.com/static/media/chooseus-1.dee85da4e256071eaf8e.png"
              alt="buyIcon"
              style={{ width: "100%", height: "100%" }}
            />
            <Typography
              variant="body2"
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                color: "#3B3c45",
                my: 1,
              }}
            >
              Cloud
            </Typography>
            <Box
              sx={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                Infraestructura para Datacenter On Premise, Cloud o hibrido,
                AWS.
              </Typography>
            </Box>
          </GuideBox>

          <GuideBox>
            <img
              src="http://landing-producto-iot.s3-website-us-east-1.amazonaws.com/static/media/chooseus-2.6222a9448a571471b9ea.png"
              alt="buyIcon"
              style={{ width: "100%", height: "100%" }}
            />
            <Typography
              variant="body2"
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                color: "#3B3c45",
                my: 1,
              }}
            >
              Consultoría
            </Typography>
            <Box
              sx={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                Asesoría en la creación de prototipos y construcción de hoja de
                ruta y arquitectura empresarial.
              </Typography>
            </Box>
          </GuideBox>
        </GuidesBox>
      </Box>
    </section>
  );
};

export default Solutions;
