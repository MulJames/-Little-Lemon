import React from 'react';

function Reservations() {
  const [formData, setFormData] = React.useState({
    date: '',
    guests: 2
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Réservation confirmée pour ${formData.guests} personnes !`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date :
        <input 
          type="date" 
          value={formData.date}
          onChange={(e) => setFormData({...formData, date: e.target.value})}
          required
        />
      </label>
      <button type="submit">Confirmer</button>
    </form>
  );
}

export default Reservations;