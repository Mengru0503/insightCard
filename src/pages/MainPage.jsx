import "./MainPage.css";
import Table from "../components/Table";
import ActiveCard from "../components/ActiveCard";
import DiscardPile from "../components/DiscardPile";
import { AnimatePresence } from "framer-motion";
import { useTable } from "../context/TableContext";

export default function MainPage() {
  const { activeCard } = useTable();
  return (
    <>
      <header>
        <h1>～認識遊戲～</h1>
        <Table />
      </header>

      <main>
        <div className="table-surface">
          <DiscardPile />
        </div>
        <AnimatePresence>
          {activeCard && <ActiveCard key="active-card" card={activeCard} canClose={true} />}
        </AnimatePresence>
      </main>
    </>
  );
}
// Force HMR update