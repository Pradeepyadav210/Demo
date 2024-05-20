import React, { useState } from 'react';
import EventDetailsModal from './Components/EventDetailsModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [event, setEvent] = useState({
    title: 'Sample Event',
    description: 'This is a sample event description.',
    assignedPerson: 'Alice',
    isCompleted: false,
    comments: ['Great event!', 'Looking forward to it.'],
  });

  const handleSave = (updatedEvent) => {
    setEvent(updatedEvent);
  };

  return (
    <div className="app">
      <button onClick={() => setIsModalOpen(true)}>Edit Event</button>
      {isModalOpen && (
        <EventDetailsModal
          event={event}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default App;
