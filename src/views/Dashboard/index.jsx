import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import Areachart from "../../components/Areachart";
import Barchart from "../../components/Barchart";
import Header from "../../components/Header";
import MapView from "../../components/MapView";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Bienvenido a tu dashboard" />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            padding="20px"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Gráficos
          </Typography>
          <Box height="250px" mt="10px">
            <Areachart/>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            padding="20px"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Gráficos
          </Typography>
          <Box height="250px" mt="10px">
            <Barchart />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Mapa de dispositivos
          </Typography>
          <Box height="200px">
            <MapView style={{ minHeight: "30vh", minWidth: "10vw" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
