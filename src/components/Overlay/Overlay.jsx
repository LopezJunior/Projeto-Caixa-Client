import "./Overlay.css";

function Overlay({ children, overlayClick }) {
  return (
    <div className="Overlay" onClick={() => overlayClick()}>
      {children}
    </div>
  );
}

export default Overlay;
