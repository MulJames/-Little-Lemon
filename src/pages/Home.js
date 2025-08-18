import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Bienvenue au Petit Citron</h1>
        <button>Réserver une table</button>
      </section>
      <section className="specials">
        <h2>Nos Spécialités</h2>
        {/* Cartes de plats avec images */}
      </section>
    </div>
  );
}

export default Home;