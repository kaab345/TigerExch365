import React, { useState } from 'react';
import './Block_markets.css';

const Blockmarket = () => {
  const [games, setGames] = useState([
    { id: 1, name: 'Soccer', status: true, url: '/blockmarket1/1' },
    { id: 2, name: 'Tennis', status: true, url: '/blockmarket1/2' },
    { id: 4, name: 'Cricket', status: true, url: '/blockmarket1/4' },
    { id: 8, name: 'Casino', status: true, url: null },
    { id: 7, name: 'Lotus Casino', status: true, url: null },
    { id: 9, name: 'Int. Casino', status: true, url: null }
  ]);

  const handleToggle = (id) => {
    setGames(games.map(game => 
      game.id === id ? { ...game, status: !game.status } : game
    ));
  };

  return (
    <section className="scrollable padder">
      <ul className="breadcrumb">
        <h2>Block Market</h2>
        <li><a href="/AdminDashboard">Dashboard</a></li>
        <li className="active">Block Market</li>
      </ul>
      
      <section className="panel">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th className="column-sno">S.NO.</th>
                <th className="column-name">Name</th>
                <th className="column-status">Status</th>
                <th className="column-action">Action</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game, index) => (
                <tr key={game.id}>
                  <td>{index + 1}</td>
                  <td>
                    {game.url ? (
                      <a href={game.url}>{game.name}</a>
                    ) : (
                      <span>{game.name}</span>
                    )}
                  </td>
                  <td className="status-cell">
                    {game.name} <span id={`game${game.id}status`}>is {game.status ? 'ON' : 'OFF'}</span>
                  </td>
                  <td>
                    <label className="switch">
                      <input 
                        type="checkbox" 
                        checked={game.status} 
                        id={`game${game.id}`} 
                        onChange={() => handleToggle(game.id)} 
                      />
                      <span className="slider round"></span>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default Blockmarket;