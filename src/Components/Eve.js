import React from 'react';

const EventStatusToggle = ({ isCompleted, onChange }) => {
  return (
    <div className="event-status-toggle">
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => onChange(e.target.checked)}
        />
        Mark as Complete
      </label>
    </div>
  );
};

export default EventStatusToggle;
