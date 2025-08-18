import '../styles/ReservationForm.css';

function ReservationForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    date: '',
    time: '19:00',
    guests: 2,
    occasion: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Réservation confirmée pour ${formData.name} !`);
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <label>
        Nom complet
        <input 
          type="text" 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
      </label>
      
      <label>
        Date
        <input 
          type="date" 
          value={formData.date}
          onChange={(e) => setFormData({...formData, date: e.target.value})}
          required
        />
      </label>

      <button type="submit">Réserver</button>
    </form>
  );
}

export default ReservationForm;