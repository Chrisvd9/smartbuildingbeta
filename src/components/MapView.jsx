import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import React from "react";

const MapView = ({ style }) => {
  const position = [51.505, -0.09];

  return (
    <div className="map-wrap">
      <Map center={position} zoom={13} scrollWheelZoom={true} style={style}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default MapView;
