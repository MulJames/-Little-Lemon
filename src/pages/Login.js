import React from 'react';

function Login() {
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: ''
  });

  const handleLogin = () => {
    // Simulation d'authentification
    if (credentials.email && credentials.password.length >= 6) {
      alert('Connecté !');
    }
  };

  return (
    <div className="login-form">
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setCredentials({...credentials, email: e.target.value})}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        onChange={(e) => setCredentials({...credentials, password: e.target.value})}
      />
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
}

export default Login;