import { useState } from 'react';

const cards = [
  { text: 'Gib Person X eine Fußmassage.', shots: 5 },
  { text: 'Tausche ein Kleidungsstück mit Person X.', shots: 4 },
  { text: 'Massiere Person X für 30 Sekunden.', shots: 2 },
  { text: 'Trage Person X Lippenstift auf – aber ohne deine Hände zu benutzen.', shots: 3 },
  { text: 'Küsse Person X auf den Mund.', shots: 3 },
  { text: 'Erzähle ein Geheimnis, das niemand kennt – Person X hört zu.', shots: 2 },
  { text: 'Tanz mit Person X, als wärst du auf einer Hochzeit.', shots: 4 },
  { text: 'Zieh ein Kleidungsstück aus.', shots: 3 },
  { text: 'Lass Person X dir ein Getränk mixen, das du trinken musst.', shots: 3 },
  { text: 'Lass Person X entscheiden, ob du einen Shot trinkst oder eine Strafe machst.', shots: 3 },
  { text: 'Mach eine peinliche Pose für 30 Sekunden und lass Person X ein Foto machen.', shots: 3 },
  { text: 'Sing ein Lied deiner Wahl und lass Person X mitmachen.', shots: 3 },
  { text: 'Stell dich auf einen Stuhl und sing ein Karaoke-Lied für Person X.', shots: 4 },
  { text: 'Tanze wie ein Affe für 1 Minute und lass Person X zuschauen.', shots: 2 },
  { text: 'Krieche 5 Meter, während Person X zuschaut.', shots: 2 },
  { text: 'Mache eine Grimasse für 10 Sekunden, während Person X zuschaut.', shots: 1 },
  { text: 'Lass dir ein Outfit von den anderen Teilnehmern zusammenstellen.', shots: 4 },
  { text: 'Küsse Person X auf die Wange.', shots: 1 },

export default function SaludGame() {
  const [currentCard, setCurrentCard] = useState(null);
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const addPlayer = () => {
    if (playerName && !players.includes(playerName)) {
      setPlayers([...players, playerName]);
      setPlayerName('');
    }
  };

  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const randomCard = cards[randomIndex];

    // Feste Person (primär) bleibt immer der aktuelle Spieler
    const currentPlayer = players[currentPlayerIndex];

    // Zufällige Person für "Person X"
    const randomPerson = players[Math.floor(Math.random() * players.length)];

    // Text der Karte anpassen, sodass "Person X" durch zufällige Person ersetzt wird
    const updatedCard = {
      ...randomCard,
      text: randomCard.text.replace('Person X', randomPerson),
    };

    setCurrentCard(updatedCard);

    // Nächsten Spieler für die nächste Runde
    const nextPlayerIndex = (currentPlayerIndex + 1) % players.length;
    setCurrentPlayerIndex(nextPlayerIndex);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#2e1065', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#ff7f7f' }}>Salud</h1>
      {!gameStarted ? (
        <div>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Spielername hinzufügen"
            style={{ marginBottom: '1rem', padding: '0.5rem', borderRadius: '0.5rem', border: 'none' }}
          />
          <button
            onClick={addPlayer}
            style={{
              backgroundColor: '#ff7f7f',
              color: 'black',
              fontWeight: 'bold',
              padding: '1rem 2rem',
              borderRadius: '1rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
            }}
          >
            Spieler hinzufügen
          </button>
          <div style={{ marginTop: '1rem', color: '#ffa9a9' }}>
            <p>Spieler: {players.join(', ')}</p>
          </div>
          <button
            onClick={() => setGameStarted(true)}
            style={{
              backgroundColor: '#ff7f7f',
              color: 'black',
              fontWeight: 'bold',
              padding: '1rem 2rem',
              borderRadius: '1rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
              marginTop: '1rem',
            }}
          >
            Spiel starten
          </button>
        </div>
      ) : (
        <div>
          <p style={{ marginBottom: '1rem', color: '#ffa9a9' }}>Zieh ’ne Karte. Trink. Oder trau dich.</p>
          <button
            onClick={drawCard}
            style={{
              backgroundColor: '#ff7f7f',
              color: 'black',
              fontWeight: 'bold',
              padding: '1rem 2rem',
              borderRadius: '1rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
            }}
          >
            Karte ziehen
          </button>

          {currentCard && (
            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              backgroundColor: '#4c1d95',
              borderRadius: '1rem',
              maxWidth: '400px',
              textAlign: 'center',
              boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
            }}>
              <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{`Es ist die Runde von: ${players[currentPlayerIndex]}`}</p>
              <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{currentCard.text}</p>
              <div style={{ fontSize: '1.5rem' }}>{'🥃'.repeat(currentCard.shots)}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
