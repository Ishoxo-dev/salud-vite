
import { useState } from 'react';

const cards = [
  {
    text: 'Trage Person X Lippenstift auf – aber ohne deine Hände zu benutzen.',
    shots: 3,
    level: 'frech',
  },
  {
    text: 'Tausche ein Kleidungsstück mit Person X.',
    shots: 4,
    level: 'wild',
  },
  {
    text: 'Küsse Person X.',
    shots: 3,
    level: 'frech',
  },
  {
    text: 'Massiere Person X für 30 Sekunden.',
    shots: 2,
    level: 'soft',
  },
  {
    text: 'Streichel den Nippel deines linken Nachbarn.',
    shots: 5,
    level: 'wild',
  },
];

export default function SaludGame() {
  const [currentCard, setCurrentCard] = useState(null);

  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setCurrentCard(cards[randomIndex]);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#2e1065',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#ff7f7f' }}>Salud</h1>
      <p style={{ marginBottom: '1rem', color: '#ffa9a9' }}>Zieh ’ne Karte. Trink. Oder trau dich.</p>
      <button onClick={drawCard} style={{
        backgroundColor: '#ff7f7f',
        color: 'black',
        fontWeight: 'bold',
        padding: '1rem 2rem',
        borderRadius: '1rem',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
      }}>
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
          boxShadow: '0 6px 12px rgba(0,0,0,0.3)'
        }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{currentCard.text}</p>
          <div style={{ fontSize: '1.5rem' }}>{'🥃'.repeat(currentCard.shots)}</div>
          <p style={{ marginTop: '0.5rem', color: '#ffa9a9' }}>Stufe: {currentCard.level}</p>
        </div>
      )}
    </div>
  );
}
