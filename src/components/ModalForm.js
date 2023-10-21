import React from "react";
import LocationForm from "./LocationForm";

const ModalForm = ({ onAddLocation, setIsFormOpen, locationData }) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="close-button" onClick={() => setIsFormOpen(false)}>
          X
        </div>
        <div className="modal-content">
          <LocationForm
            onAddLocation={onAddLocation}
            initialData={locationData}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
