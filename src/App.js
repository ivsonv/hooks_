import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState(['react', 'react-js']);
  const [newTech, setNewTech] = useState('');

  function add() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  return (
    <>
      <ul>
        {
          tech.map(t => (
            <li key={t}>{t}</li>
          ))
        }
      </ul>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={add}>add</button>
    </>
  );
}

export default App;