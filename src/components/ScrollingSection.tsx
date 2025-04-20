import "../styles/SmoothScrollShowcase.css";

interface SmoothScrollShowcaseProps {
  items: React.ReactNode[];
}

export default function SmoothScrollShowcase({ items }: SmoothScrollShowcaseProps) {
  return (
    <div className="scroll-showcase-container">
      <div className="scroll-showcase-track">
        {[...items, ...items].map((item, i) => (
          <div className="scroll-showcase-item" key={i}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
