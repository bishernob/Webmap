import "./style/map.css";
import React, { useRef, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";

export default function Map({ locaions, focusedCoordinates }) {
  // Create a reference to the map
  const mapRef = useRef(null);

  // Create a custom icon for markers

  const customIcon = new Icon({
    iconUrl: require("../icons/location.png"),
    iconSize: [38, 38],
  });

  // Create a custom icon for marker clusters
  const createCustomClustorIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };

  // Use useEffect to change the map view when focusedCoordinates change
  useEffect(() => {
    if (focusedCoordinates) {
      const { lat, lng } = focusedCoordinates;
      // Set the map view to the focused coordinates
      mapRef.current.setView([lat, lng], 13);
    }
  }, [focusedCoordinates]);

  return (
    <MapContainer center={[24.0, 45.0]} zoom={6} ref={mapRef}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></TileLayer>
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClustorIcon}
      >
        {locaions?.map((marker) => (
          <Marker position={[marker.lat, marker.lng]} icon={customIcon}>
            <Popup> {marker.name}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
