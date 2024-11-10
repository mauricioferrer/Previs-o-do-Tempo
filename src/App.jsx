import React, { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const apiKey = '4232ad481c2901bf77fbd40e4d47d8bc';

  // Função para lidar com a mudança no input
  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  // Função para buscar a previsão do tempo
  const fetchWeather = async (event) => {
    event.preventDefault();
    setError('');
    setWeather(null);

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Cidade não encontrada');
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>Previsão do Tempo</h1>
      <form onSubmit={fetchWeather}>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Digite o nome da cidade"
        />
        <button type="submit">Buscar</button>
      </form>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <div className="Description">
            <p><span className="label">Temperatura:</span> <span className="value">{weather.main.temp}°C</span></p>
            <p><span className="label">Umidade:</span> <span className="value">{weather.main.humidity}%</span></p>
            <p><span className="label">Descrição:</span> <span className="value">{weather.weather[0].description}</span></p>

            {/* Imagem do ícone do tempo */}
            <div className="weather-icon">
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt={weather.weather[0].description}
                className="icon"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
