// LocationGrid.js
import React, { useState, useEffect } from "react";
import "./style/LocationGrid.css";
import Map from "./Maps";
import LocationTable from "./LocationTable";
import { postRequest, putRequest, getRequest } from "../helper/ApiRequests";
import ModalForm from "./ModalForm";
import config from "../config/config";

const LocationGrid = () => {
  // Initialize state variables using useState
  const [locations, setLocations] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editLocation, setEditLocation] = useState(null);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [focusedCoordinates, setFocusedCoordinates] = useState(null);
  const url = config.apiUrl;

  // Function to update the locations state
  const updateLocations = (data) => {
    setLocations(data);
  };
  // Fetch data when the component mounts
  useEffect(() => {
    (async () => {
      const data = await getRequest(url);
      setLocations(data);
    })();
  }, []);
  // Fetch data every 15 seconds
  useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 15000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Fetch data from the API
  const fetchData = async () => {
    const data = await getRequest(url);
    updateLocations(data);
  };

  // Handle adding a new location
  const handleAddLocation = async (newLocation) => {
    await postRequest(url, newLocation);
    setLocations([...locations, newLocation]);
    setIsFormOpen(false);
    getRequest(url);
  };

  // Function to open the edit form
  const openEditForm = (location) => {
    setEditLocation(location);
    setIsEditFormOpen(true);
  };

  // Handle editing a location
  const handleEditLocation = async (newLocation) => {
    console.log(locations);

    const index = locations.findIndex((element, index) => {
      if (element.id === newLocation.id) {
        return true;
      }
    });
    locations[index] = newLocation;
    setLocations(locations);
    await putRequest(url / `${newLocation.id}`, newLocation);
    setIsEditFormOpen(false);
    getRequest(url);
  };

  return (
    <div className="container">
      <div className="left">
        <Map focusedCoordinates={focusedCoordinates} locaions={locations} />
      </div>
      <div className="right">
        <LocationTable
          locations={locations}
          setFocusedCoordinates={setFocusedCoordinates}
          setIsFormOpen={setIsFormOpen}
          setIsEditFormOpen={openEditForm}
        />
      </div>
      {isFormOpen && (
        <ModalForm
          onAddLocation={handleAddLocation}
          setIsFormOpen={setIsFormOpen}
        />
      )}
      {isEditFormOpen && (
        <ModalForm
          locationData={editLocation}
          onAddLocation={handleEditLocation}
          setIsFormOpen={setIsEditFormOpen}
        />
      )}
    </div>
  );
};

export default LocationGrid;
