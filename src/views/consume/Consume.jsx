import { Box } from "@mui/material";
import Areachart from "../../components/Areachart";
import Header from "../../components/Header";

const Consume = () => {
  return (
    <Box m="20px">
      <Header title="Consumo" subtitle="Consumo de agua" />
      <Box height="75vh">
        <Areachart />
      </Box>
    </Box>
  );
};

export default Consume;
