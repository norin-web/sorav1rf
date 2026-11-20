import { app, appFeatures, specs } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

const phones = [
  { src: "/images/mock-create.webp", alt: "Create video screen with a style picker and a prompt" },
  { src: "/images/mock-new.webp", alt: "New video screen with the prompt and Save button" },
  { src: "/images/mock-play.webp", alt: "A generated video playing full screen" },
];

export default function OurApp() {
  return (
    <>
      <section className="hero hero--page">
        <div className="glow glow--hero" aria-hidden="true" />
        <Reveal as="span" className="pill">The app</Reveal>
        <Split as="h1" className="h-page" parts={[["Create a video"], ["\n"], ["from one line"]]} />
        <Reveal as="p" className="lead hero__sub" delay={150}>
          Prompt, style, generate. Everything happens in one app, and your creations stay on your device.
        </Reveal>
        <Reveal className="hero__cta" delay={220}>
          <Btn href={app.url}>Download on the App Store</Btn>
        </Reveal>
      </section>

      <section className="reel" aria-label="App screenshots">
        {phones.map((p, i) => (
          <div key={p.src} className={`reel__phone reel__phone--${i}`}>
            <img src={img(p.src)} alt={p.alt} />
          </div>
        ))}
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="grid2">
            {appFeatures.map((f, i) => (
              <Reveal className="card fbox" key={f.title} delay={(i % 2) * 60}>
                <span className="tag">{f.tag}</span>
                <h3 className="h4">{f.title}</h3>
                <p className="muted">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <Split as="h2" className="h2 center" parts={[["Details"]]} />
          <Reveal as="dl" className="specs">
            {specs.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
