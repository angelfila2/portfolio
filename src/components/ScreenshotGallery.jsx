import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ScreenshotGallery({ slides }) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const move = (step) => setIndex((current) => (current + step + slides.length) % slides.length);

  return (
    <section className="screenshot-gallery" aria-label="Project screenshots" aria-roledescription="carousel" onKeyDown={(event) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
      if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
    }}>
      <div className="gallery-toolbar"><span><i /> PRODUCT WALKTHROUGH</span><span>{String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span></div>
      <figure className="gallery-frame">
        <img src={slide.image} alt={slide.title} width="1265" height="714" decoding="async" />
      </figure>
      <div className="gallery-caption">
        <div aria-live="polite" aria-atomic="true"><h3>{slide.title}</h3><p>{slide.caption}</p></div>
        <div className="gallery-arrows"><button type="button" onClick={() => move(-1)} aria-label="Previous screenshot"><ArrowLeft size={18} /></button><button type="button" onClick={() => move(1)} aria-label="Next screenshot"><ArrowRight size={18} /></button></div>
      </div>
      <div className="gallery-thumbnails" aria-label="Choose a screenshot">{slides.map((item, number) => <button key={item.image} type="button" onClick={() => setIndex(number)} aria-label={`Show screenshot ${number + 1}: ${item.title}`} aria-pressed={number === index}><img src={item.image} alt="" loading="lazy" /><span>{String(number + 1).padStart(2, "0")}<span>{item.title}</span></span></button>)}</div>
      <p className="gallery-hint">Use the arrows, thumbnails or your keyboard’s left and right keys. Select an image link below to view it at full size.</p>
      <a className="gallery-full-size" href={slide.image} target="_blank" rel="noopener noreferrer">Open current screenshot at full size ↗</a>
    </section>
  );
}
