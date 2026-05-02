export default function Card({ children, ...props }) {
  return (
    <div className="card" {...props}>
      {children}
    </div>
  );
}
