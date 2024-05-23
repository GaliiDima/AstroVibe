import "./Insight.scss";

interface InsightProps {
  text: string;
  image: string;
  reversed: boolean;
}

const Insight: React.FC<InsightProps> = ({ text, image, reversed }) => {
  return (
    <article className={reversed ? "insight insight_reversed" : "insight"}>
      <div className="insight__title">{text}</div>
      <img src={image} className="insight__image" alt="insight" />
    </article>
  );
};

export default Insight;
