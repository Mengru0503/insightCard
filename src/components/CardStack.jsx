import "./CardStack.css";
import { useTable } from "../context/TableContext";
import card1 from "../assets/1.png";
import card2 from "../assets/2.png";
import card3 from "../assets/3.png";
import card4 from "../assets/4.png";

const cardImages = {
  one: card1,
  two: card2,
  three: card3,
  four: card4,
};

const levelInfo = {
  one: { stars: "⭐", name: "破冰" },
  two: { stars: "⭐⭐", name: "認識" },
  three: { stars: "⭐⭐⭐", name: "熟識" },
  four: { stars: "⭐⭐⭐⭐", name: "談心" },
};

export default function CardStack({ level }) {
  const { decks, drawCard } = useTable();
  const remainingCards = decks[level]?.length || 0;

  const handleClick = () => {
    if (remainingCards > 0) {
      drawCard(level);
    }
  };

  return (
    <div
      className={`card-stack level-${level} ${remainingCards === 0 ? "disabled" : ""}`}
      style={{
        backgroundImage: `url(${cardImages[level]})`,
      }}
      onClick={handleClick}
    >
      <div className="card-header">
        <div className="card-stars">{levelInfo[level].stars}</div>
        <div className="card-level-name">{levelInfo[level].name}</div>
      </div>
      <div className="card-count">{remainingCards}</div>
    </div>
  );
}