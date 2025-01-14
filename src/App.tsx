import './App.css';

interface RaceResult {
  position: number;
  driver: string;
  group: number;
  avgLap: string;
  laps: number;
  bestLap: string
  points: number;
}

function App() {
  const raceResults: RaceResult[] = [
    { position: 1, driver: "John Doe", group:1, avgLap: "1:02.345", laps: 12, bestLap: "1:01.234", points: 9  },
    { position: 2, driver: "Jane Smith", group: 2, avgLap: "1:02.678", laps: 12, bestLap: "1:01.567", points: 9  },
    { position: 3, driver: "Mike Johnson", group:3, avgLap: "1:03.123", laps: 12, bestLap: "1:02.111", points: 9  },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>University of Liverpool Scouse Cup Championship</h1>
      </header>
      <main className="leaderboard-container">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Driver</th>
              <th>Group</th>
              <th>Lap Time</th>
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
                <td>{result.avgLap}</td>
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
