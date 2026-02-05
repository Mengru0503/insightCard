import { useTable } from "../context/TableContext";
import "./ActiveCard.css";
import { motion } from "framer-motion";
import card1 from "../assets/1.png";
import card2 from "../assets/2.png";
import card3 from "../assets/3.png";
import card4 from "../assets/4.png";

const levelNames = {
  1: "⭐ 破冰",
  2: "⭐⭐ 認識",
  3: "⭐⭐⭐ 熟識",
  4: "⭐⭐⭐⭐ 談心",
};

const cardImages = {
  1: card1,
  2: card2,
  3: card3,
  4: card4,
};

export default function ActiveCard({ canClose, card }) {
  const { discardCard } = useTable();
  const effectiveCard = card;

  if (!effectiveCard) return null;



  return (
    <motion.div
      className="active-card-overlay"
      onClick={canClose ? discardCard : undefined}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="active-card"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.5, y: -50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <div
          className="active-card-image"
          style={{ backgroundImage: `url(${cardImages[effectiveCard.level]})` }}
        >
          <div className="active-card-content">
            <div className="card-level">{levelNames[effectiveCard.level]}</div>

            <div className="card-category">{effectiveCard.category}</div>

            <p className="card-text">{effectiveCard.text}</p>

            {effectiveCard.warning && (
              <p className="card-warning">💭 {effectiveCard.warning}</p>
            )}

            {canClose && (
              <button className="close-button" onClick={discardCard}>
                放回桌上
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}