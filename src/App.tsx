import React, { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface RaceResult {
  position: number;
  driver: string;
  group: number;
  laps: number;
  bestLap: string
  points: number;
}

function App() {
  const raceResults: RaceResult[] = [
    { position: 1, driver: "AMR", group:3, avgLap: "X:XX.XXX", laps: 0, bestLap: "X:XX.XXX", points:0  },
    { position: 2, driver: "Boba Fett", group:1, avgLap: "X:XX.XXX", laps: 0, bestLap: "X:XX.XXX", points:0  },
    { position: 3, driver: "Mike Oxlong", group:2, avgLap: "X:XX.XXX", laps: 0, bestLap: "X:XX.XXX", points:0  },
  ];

  return (
    <div className="App">
      <header className="App-header flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">
          University of Liverpool Scouse Cup Championship
        </h1>
        <button className="flex items-center justify-center bg-yourColorCode rounded p-2 icon-button" onClick={() => console.log("Menu clicked")}>
          <FontAwesomeIcon icon={faBars} transform="grow-15" inverse /> 
        </button>
      </header>
      <main className="leaderboard-container">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Driver</th>
              <th>Group</th>
              <th>Laps</th>
              <th>Best Lap</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {raceResults.map((result) => (
              <tr key={result.position}>
                <td>{result.position}</td>
                <td>{result.driver}</td>
                <td>{result.group}</td>
                <td>{result.laps}</td>
                <td>{result.bestLap}</td>
                <td>{result.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
