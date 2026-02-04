export default function Gallery({ images = [] }) {
  return (
    <div className="grid grid-3">
      {images.map((img) => (
        <div key={img.src} className="card gallery-item">
          <div className="frame" style={{ height: 210 }}>
            <img className="cover" src={img.src} alt={img.alt} loading="lazy" />
          </div>
          <div className="gallery-cap">{img.alt}</div>
        </div>
      ))}
    </div>
  );
}
