import React, { useState } from 'react';

const EditableField = ({ label, value, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleSave = () => {
    onChange(inputValue);
    setIsEditing(false);
  };

  return (
    <div className="editable-field">
      <label>{label}</label>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div onClick={() => setIsEditing(true)}>
          {value}
        </div>
      )}
    </div>
  );
};

export default EditableField;
