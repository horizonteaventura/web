export default function VideoGrid({ items = [] }) {
  return (
    <div className="grid grid-2">
      {items.map((v) => (
        <div key={v.src} className="card">
          <div className="frame video-frame">
            <video src={v.src} controls preload="metadata" playsInline />
          </div>
          <div style={{ marginTop: 10, color: "var(--muted)" }}>{v.title}</div>
        </div>
      ))}
    </div>
  );
}
