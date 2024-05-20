import React from 'react';

const AssignPersonDropdown = ({ selectedPerson, onChange }) => {
  const persons = ['Alice', 'Bob', 'Charlie', 'Diana']; // Example persons list

  return (
    <div className="assign-person-dropdown">
      <label>Assign Person</label>
      <select
        value={selectedPerson}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select a person</option>
        {persons.map((person) => (
          <option key={person} value={person}>
            {person}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AssignPersonDropdown;
