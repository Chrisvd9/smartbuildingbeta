import { Box } from "@mui/material";
import Barchart from "../../components/Barchart";
import Header from "../../components/Header";

const Graphics = () => {
  return (
    <Box m="20px">
      <Header title="Gráficos" subtitle="Gráficos de los días" />
      <Box height="75vh">
        <Barchart />
      </Box>
    </Box>
  );
};

export default Graphics;
