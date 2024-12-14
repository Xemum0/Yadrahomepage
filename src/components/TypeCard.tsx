import '../assets/styles/typecard.css';

interface TypeCardProps {
  type_title: string;
  ima: string;
}

function TypeCard({ type_title, ima }: TypeCardProps) {
  return (
    <div className='cardtype'>
      <img src={ima} alt={type_title} /> {/* Use the type_title as alt text for accessibility */}
      <p>{type_title}</p> {/* Correct rendering of type_title */}
    </div>
  );
}

export default TypeCard;
