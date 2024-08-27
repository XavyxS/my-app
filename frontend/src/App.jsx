import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const backendUrl = import.meta.env.VITE_API_URL;

    fetch(backendUrl)
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className='saludo'>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
