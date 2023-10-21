import React, { useEffect, useState } from "react";
import "./style/LocationGrid.css";
import "./style/LocationForm.css";

const LocationForm = ({ onAddLocation, initialData }) => {
  // Initialize state variables using useState
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [error, setError] = useState("");
  // Load initial data into the form fields when editing
  useEffect(() => {
    setName(initialData?.name);
    setNotes(initialData?.notes);
    setLat(initialData?.lng);
    setLng(initialData?.lat);
  }, []);

  // Handle adding or editing a location
  const handleAddLocation = () => {
    //add validation to check all fields not empty
    if (!name || !notes || !lat || !lng) {
      setError("Please fill in all fields.");
    } else {
      const newLocation = {
        id: initialData.id,
        name,
        notes,
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      };
      onAddLocation(newLocation);
      setName("");
      setNotes("");
      setLat("");
      setLng("");
      setError("");
    }
  };

  return (
    <div className="location-form">
      <h3>Add Location</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input"
      />
      <input
        type="text"
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="input"
      />
      <input
        type="number"
        placeholder="Latitude"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        className="input"
      />
      <input
        type="number"
        placeholder="Longitude"
        value={lng}
        onChange={(e) => setLng(e.target.value)}
        className="input"
      />
      <button className="btn" onClick={handleAddLocation}>
        {initialData ? "Edit" : "Add"}
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default LocationForm;
