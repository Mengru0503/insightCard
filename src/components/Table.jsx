import CardStack from "./CardStack";

export default function Table() {
  return (
    <div className="card-stacks-row">
      <CardStack level="one" />
      <CardStack level="two" />
      <CardStack level="three" />
      <CardStack level="four" />
    </div>
  );
}