import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface RaceResult {
  position: number;
  driver: string;
  group: number;
  bestLap: string;
  points: number;
}

function App() {
  const raceResults: RaceResult[] = [
    // Group 2
    { position: 1, driver: "Keiran Mullock", group: 2, bestLap: "31.056", points: 11 },
    { position: 2, driver: "Edwin Varghese", group: 2, bestLap: "31.182", points: 9 },
    { position: 3, driver: "Sam Alvarez Caswell", group: 2, bestLap: "32.193", points: 8 },
    { position: 4, driver: "Hakmed Olarinde", group: 2, bestLap: "32.290", points: 7 },
    { position: 5, driver: "AMR", group: 2, bestLap: "32.061", points: 6 },
    { position: 6, driver: "Victor Cheung", group: 2, bestLap: "32.703", points: 5 },
    { position: 7, driver: "Jamie Newton", group: 2, bestLap: "32.275", points: 4 },
    { position: 8, driver: "Usef", group: 2, bestLap: "32.744", points: 3 },
    { position: 9, driver: "Majoorann Manisekaran", group: 2, bestLap: "33.059", points: 2 },
    // Group 1
    { position: 1, driver: "Boba Fett", group: 1, bestLap: "28.899", points: 10 },
    { position: 2, driver: "B_Løvēēē™", group: 1, bestLap: "29.100", points: 10 },
    { position: 3, driver: "Tom Roberts", group: 1, bestLap: "29.208", points: 8 },
    { position: 4, driver: "Jason Zhang", group: 1, bestLap: "29.340", points: 7 },
    { position: 5, driver: "George Lunt", group: 1, bestLap: "29.271", points: 6 },
    { position: 6, driver: "Dr Roundabout", group: 1, bestLap: "29.302", points: 5 },
    { position: 7, driver: "Jonnie Pinder", group: 1, bestLap: "29.315", points: 4 },
    { position: 8, driver: "Tanzim", group: 1, bestLap: "29.776", points: 3 },
    { position: 9, driver: "Ben McEwan", group: 1, bestLap: "29.558", points: 2 },
    // Group 3
    { position: 1, driver: "Max Ryans", group: 3, bestLap: "31.987", points: 10 + 1 }, // Extra point for pole position
    { position: 2, driver: "Joel", group: 3, bestLap: "32.160", points: 9 },
    { position: 3, driver: "Anas Murad", group: 3, bestLap: "32.226", points: 8 },
    { position: 4, driver: "Benjamin Juice", group: 3, bestLap: "32.233", points: 7 },
    { position: 5, driver: "Cameron Macmillan", group: 3, bestLap: "32.316", points: 6 },
    { position: 6, driver: "Jacob Hicks", group: 3, bestLap: "32.971", points: 5 },
    { position: 7, driver: "Raf", group: 3, bestLap: "33.371", points: 4 },
    { position: 8, driver: "David Bates", group: 3, bestLap: "33.830", points: 3 },
    { position: 9, driver: "Eli", group: 3, bestLap: "33.843", points: 2 },
    { position: 10, driver: "Super Racer Mansoor", group: 3, bestLap: "34.831", points: 1 }
  ];

  // Sort the results by points in descending order
  const sortedResults = [...raceResults].sort((a, b) => b.points - a.points);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          University of Liverpool Scouse Cup Championship
        </h1>
        <button className="icon-button" onClick={() => console.log("Menu clicked")}>
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
              <th>Best Lap</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {sortedResults.map((result, index) => (
              <tr key={`${result.driver}-${result.group}`}>
                <td>{index + 1}</td>
                <td>{result.driver}</td>
                <td>{result.group}</td>
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
