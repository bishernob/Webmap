import React, { useState } from "react";
import "./style/LocationGrid.css";
import downArrow from "../icons/down-filled-triangular-arrow.png";
import upArrow from "../icons/caret-arrow-up.png";

const LocationTable = ({
  locations,
  setIsFormOpen,
  setIsEditFormOpen,
  setFocusedCoordinates,
}) => {
  // State variables for sorting
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(1);

  // Function to handle sorting by a column
  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(-sortOrder);
    } else {
      setSortBy(column);
      setSortOrder(1);
    }
  };

  // Function to handle clicking on a row to set focus coordinates
  const handleRowClick = (lat, lng) => {
    setFocusedCoordinates({ lat, lng });
  };
  // Sort locations based on the selected column and order
  const sortedLocations = [...locations].sort((a, b) => {
    if (sortBy === "name") {
      return sortOrder * a.name.localeCompare(b.name);
    } else if (sortBy === "lng") {
      return sortOrder * (a.lng - b.lng);
    } else if (sortBy === "lat") {
      return sortOrder * (a.lat - b.lat);
    } else if (sortBy === "notes") {
      return sortOrder * a.notes.localeCompare(b.notes);
    }
    return 0;
  });
  // Function to render a sortable column header
  const renderHeader = (column, label) => (
    <th onClick={() => handleSort(column)}>
      {label}
      {sortBy === column && sortOrder === 1 ? (
        <img src={downArrow} alt="down" className="sort-icon" />
      ) : (
        <img src={upArrow} alt="up" className="sort-icon" />
      )}
    </th>
  );
  return (
    <div className="table-container">
      <div className="btn-container">
        <button className="btn" onClick={() => setIsFormOpen(true)}>
          Add Location
        </button>
      </div>
      <table>
        <thead>
          <tr>
            {renderHeader("name", "Name")}
            {renderHeader("notes", "Notes")}
            {renderHeader("lat", "Latitude")}
            {renderHeader("lng", "Longitude")}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedLocations.map((row, index) => (
            <tr
              className="clickable-row"
              key={index}
              onClick={() => handleRowClick(row.lat, row.lng)}
            >
              <td>{row.name}</td>
              <td>{row.notes}</td>
              <td>{row.lat}</td>
              <td>{row.lng}</td>
              <td className="edit" onClick={() => setIsEditFormOpen(row)}>
                Edit
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LocationTable;
