export default function Section({ id, kicker, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        {kicker && <div className="kicker">{kicker}</div>}
        {title && <h2 className="title">{title}</h2>}
        {subtitle && <p className="subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
