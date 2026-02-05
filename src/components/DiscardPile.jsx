import { useTable } from "../context/TableContext";
import "./DiscardPile.css";
import card1 from "../assets/1.png";
import card2 from "../assets/2.png";
import card3 from "../assets/3.png";
import card4 from "../assets/4.png";

const cardImages = {
    1: card1,
    2: card2,
    3: card3,
    4: card4,
};

export default function DiscardPile() {
    const { discardPile } = useTable();

    // Generate random position and rotation for each card
    const getCardStyle = (index) => {
        // Use index as seed for consistent positioning per card
        const seed = index * 123.456;
        const angle = Math.sin(seed) * 25; // -25 to 25 degrees
        const x = Math.cos(seed * 1.7) * 100; // Random X within smaller range
        const y = Math.sin(seed * 2.3) * 100; // Random Y within smaller range

        return {
            transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
            zIndex: index,
        };
    };

    if (!discardPile.length) return null;

    return (
        <div className="discard-pile">
            {discardPile.map((card, index) => (
                <div
                    key={`${card.id}-${index}`}
                    className="discarded-card"
                    style={{
                        ...getCardStyle(index),
                        backgroundImage: `url(${cardImages[card.level]})`,
                    }}
                >
                    <div className="discarded-card-content">
                        <p className="discarded-text">{card.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
