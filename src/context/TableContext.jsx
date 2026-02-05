import { createContext, useContext, useState } from "react";
import questions from "../data/questions";

const TableContext = createContext();

// Fisher-Yates shuffle algorithm for randomizing array
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function TableProvider({ children }) {
  const [activeCard, setActiveCard] = useState(null);
  const [discardPile, setDiscardPile] = useState([]);
  const [decks, setDecks] = useState({
    one: shuffleArray(questions.one),
    two: shuffleArray(questions.two),
    three: shuffleArray(questions.three),
    four: shuffleArray(questions.four),
  });

  const drawCard = (level) => {
    const deck = decks[level];
    if (!deck.length) return;

    const card = deck[0];
    setActiveCard(card);

    setDecks((prev) => ({
      ...prev,
      [level]: prev[level].slice(1),
    }));
  };

  const discardCard = () => {
    if (!activeCard) return;
    setDiscardPile((prev) => [...prev, activeCard]);
    setActiveCard(null);
  };

  return (
    <TableContext.Provider
      value={{
        decks,
        activeCard,
        discardPile,
        drawCard,
        discardCard,
      }}
    >
      {children}
    </TableContext.Provider>
  );
}

export const useTable = () => useContext(TableContext);