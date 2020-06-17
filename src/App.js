import React, { useState, useEffect } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  function add() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  useEffect(() => {
    const storetech = localStorage.getItem('tech-list');

    if (storetech) {
      setTech(JSON.parse(storetech));
    }

    // return () => {
    //   document.removeEventListener
    //  };
  }, []);

  useEffect(() => {
    localStorage.setItem('tech-list', JSON.stringify(tech))
  }, [tech]);

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