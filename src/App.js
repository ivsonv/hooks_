import React, { useState, useEffect, useMemo } from 'react';

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

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {
          tech.map(t => (
            <li key={t}>{t}</li>
          ))
        }
      </ul>
      <strong>tecs {techSize}</strong>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={add}>add</button>
    </>
  );
}

export default App;