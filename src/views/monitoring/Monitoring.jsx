import { Box, useTheme, Typography } from "@mui/material";
import Areachart from "../../components/Areachart";
import Barchart from "../../components/Barchart";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Monitoring = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Bienvenido a tu dashboard" />
      </Box>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        textAlign="center"
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
            Gráfico1
          </Typography>
          <Box height="250px" width="500px" mt="10px">
            <Areachart />
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
            Gráfico 2
          </Typography>
          <Box height="250px" width="500px" mt="10px">
            <Barchart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Monitoring;
