import aboutImage from '../asserts/restaurant.jpg';

import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <h2>Notre Histoire</h2>
      <div className="about-content">
        <img src={aboutImage} alt="Intérieur du restaurant" />
        <div className="about-text">
          <p>Fondé en 2010, Le Petit Citron propose une cuisine méditerranéenne authentique...</p>
        </div>
      </div>
    </div>
  );
}

export default About;