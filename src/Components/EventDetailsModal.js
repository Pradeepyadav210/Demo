import React, { useState } from 'react';
import CommentSection from './Comments';
import EditableField from './EditableField';
import AssignPersonDropdown from './Assi';
import EventStatusToggle from './Eve';
import './EventDetails.css'

const EventDetailsModal = ({ event, onClose, onSave }) => {
  const [description, setDescription] = useState(event.description);
  const [assignedPerson, setAssignedPerson] = useState(event.assignedPerson);
  const [isCompleted, setIsCompleted] = useState(event.isCompleted);
  const [comments, setComments] = useState(event.comments);

  const handleSave = () => {
    const updatedEvent = {
      ...event,
      description,
      assignedPerson,
      isCompleted,
      comments,
    };
    onSave(updatedEvent);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={onClose}>×</button>
        <h2>Flower Arrangement|</h2>
        <h2>{Date}</h2>
        
        <EditableField label="Description" value={description} onChange={setDescription} />
        <AssignPersonDropdown selectedPerson={assignedPerson} onChange={setAssignedPerson} />
        <EventStatusToggle isCompleted={isCompleted} onChange={setIsCompleted} />
        <CommentSection comments={comments} onChange={setComments} />
        <button className="save-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default EventDetailsModal;
