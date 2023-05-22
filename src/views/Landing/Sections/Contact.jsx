import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import heroImg from "../../../assets/IOT-MARCA2-removebg.png";
import CustomButton from "../../../components/CustomButton";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section data-aos="fade-down" id="contact">
      <Grid
        container
        sx={{ height: "100vh", backgroundColor: "#E6F0FF" }}
        mt="90px"
        mx="auto"
      >
        <Grid item xs={12} sm={8} md={5} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>
              <img
                src={heroImg}
                alt="heroImg"
                style={{ maxWidth: "100%", marginBottom: "2rem" }}
              />
            </Box>
            <Typography component="h1" variant="h5">
              Avenida Las Lomas #10 Oficina 100
            </Typography>
            <Typography component="h1" variant="h5">
              admin@tuempresaiot.com
            </Typography>
            <Typography component="h1" variant="h5">
              +56 945962141
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Box
            sx={{
              my: 8,
              mx: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h1" sx={{ color: "#0F54A1" }}>
              Déjanos un mensaje
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="Nombre"
                label="Nombre"
                name="name"
                autoComplete="name"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="phone"
                label="Teléfono"
                id="phone"
              />
              <TextField
                margin="normal"
                fullWidth
                name="enterprise"
                label="Empresa"
                id="enterprise"
              />
              <TextField
                label="Mensaje"
                placeholder="Mensaje"
                multiline
                rows={5}
                sx={{ width: "100%", mb: "10px" }}
              />
              <CustomButton
                backgroundColor="#15B9F0"
                color="#fff"
                buttonText="Enviar"
                guideBtn={true}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default Contact;
