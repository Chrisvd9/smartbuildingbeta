import { Box } from "@mui/material";
import Header from "../../components/Header";
import MapView from "../../components/MapView";

const Devices = () => {
  return (
    <Box m="20px">
      <Header title="Dispositivos" subtitle="Dispositivos en mapa" />
      <Box height="75vh">
        <MapView style={{minHeight: "70vh", minWidth: "50vw"}}/>
      </Box>
    </Box>
  );
};

export default Devices;
