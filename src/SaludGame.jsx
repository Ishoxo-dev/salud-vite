import { useState } from 'react';

const cards = [
  { text: 'Trage Person X Lippenstift auf – aber ohne deine Hände zu benutzen.', shots: 3 },
  { text: 'Tausche ein Kleidungsstück mit Person X.', shots: 4 },
  { text: 'Küsse Person X.', shots: 3 },
  { text: 'Massiere Person X für 30 Sekunden.', shots: 2 },
  { text: 'Streichel den Nippel deines linken Nachbarn.', shots: 5 },
  { text: 'Erzähle ein peinliches Geheimnis von dir.', shots: 2 },
  { text: 'Tanzt zusammen für 30 Sekunden.', shots: 1 },
  { text: 'Stelle dich auf einem Bein und singe „Ich bin ein dicker, dicker Bär“ laut.', shots: 3 },
  { text: 'Trage eine Jacke von Person X für den Rest des Spiels.', shots: 2 },
  { text: 'Finde 3 Dinge, die Person X nicht mag und erzähle sie.', shots: 3 },
  { text: 'Ziehe dir ein T-Shirt von Person X an.', shots: 3 },
  { text: 'Erzähle ein lustiges Witz.', shots: 1 },
  { text: 'Gib Person X eine Umarmung für 10 Sekunden.', shots: 1 },
  { text: 'Zieh deine Socken aus und zieh sie auf den Kopf.', shots: 2 },
  { text: 'Mache 10 Liegestütze.', shots: 1 },
  { text: 'Schreibe „Ich liebe dich“ in den Staub auf dem Tisch.', shots: 1 },
  { text: 'Küss die Hand von Person X.', shots: 2 },
  { text: 'Tanze auf dem Tisch für 10 Sekunden.', shots: 4 },
  { text: 'Zieh dich komplett aus, bis auf Unterwäsche.', shots: 5 },
  { text: 'Lass dir von Person X eine Frisur verpassen.', shots: 3 },
  { text: 'Imitiere einen Hund für 1 Minute.', shots: 2 },
  { text: 'Verwende Lippenstift und male einen Herz auf deine Wange.', shots: 2 },
  { text: 'Erzähle einen Witz und mache die schlechteste Pointe aller Zeiten.', shots: 1 },
  { text: 'Stelle dich in die Mitte des Raumes und singe „Let it Go“ aus Frozen.', shots: 4 },
  { text: 'Setze dich auf den Boden und versuche 5 Mal, deine Füße zu berühren.', shots: 1 },
  { text: 'Mache 20 Kniebeugen.', shots: 2 },
  { text: 'Verkünde laut, dass du ein Einhorn bist.', shots: 2 },
  { text: 'Lache 30 Sekunden lang wie ein Pirat.', shots: 1 },
  { text: 'Schreibe mit dem Finger „Ich bin der König“ auf die Wand.', shots: 3 },
  { text: 'Finde den nächsten Song, der dir gefällt, und singe ihn laut.', shots: 2 },
  { text: 'Lass dir ein Geschenk aus einem anderen Raum holen.', shots: 3 },
  { text: 'Iss einen Löffel Senf.', shots: 2 }
];

export default function SaludGame() {
  const [currentCard, setCurrentCard] = useState(null);
  const [remainingCards, setRemainingCards] = useState(cards);

  const drawCard = () => {
    if (remainingCards.length === 0) {
      alert("Alle Karten wurden gezogen. Das Spiel wird neu gestartet.");
      setRemainingCards(cards); // Karten neu mischen, wenn keine mehr übrig sind
    }

    const randomIndex = Math.floor(Math.random() * remainingCards.length);
    const newCard = remainingCards[randomIndex];

    setCurrentCard(newCard);
    setRemainingCards(remainingCards.filter((_, index) => index !== randomIndex));
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
        </div>
      )}
    </div>
  );
}
