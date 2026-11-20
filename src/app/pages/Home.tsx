import { app, appFeatures, steps, tagline } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function Home() {
  return (
    <>
      {/* S01 Hero */}
      <section className="hero hero--home">
        <div className="glow glow--hero" aria-hidden="true" />
        <Reveal className="badge">
          <span className="badge__tag"><i />Video</span>
          {tagline}
        </Reveal>
        <Split as="h1" className="h-hero" parts={[["Your idea,"], ["\n"], ["on screen"]]} />
        <Reveal as="p" className="lead hero__sub" delay={150}>
          Describe a video in a few words, pick a style and let Sora generate it on your iPhone.
        </Reveal>
        <Reveal className="hero__cta" delay={220}>
          <Btn href={app.url}>Download on the App Store</Btn>
          <span className="muted small">For iPhone</span>
        </Reveal>
      </section>

      {/* S02 Mockup — clean screen from the app's Home tab */}
      <section className="mockup" aria-label="The app on iPhone">
        <img src={img("/images/phone-home.png")} alt="Sora app Home screen with the For you feed" width={402} height={874} />
      </section>

      {/* S03 Features */}
      <section className="section">
        <div className="container">
          <div className="heading">
            <Reveal as="span" className="pill">Features</Reveal>
            <Split as="h2" className="h2" parts={[["Write it, style it, keep it."]]} />
          </div>
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

      {/* S04 Screens from the Create flow */}
      <section className="section section--tight">
        <div className="container">
          <div className="shots">
            <Reveal className="shots__item"><img src={img("/images/phone-detail.png")} alt="A video with its prompt and model label" loading="lazy" /></Reveal>
            <Reveal className="shots__item" delay={80}><img src={img("/images/phone-generating.png")} alt="Create video screen while the video is generating" loading="lazy" /></Reveal>
            <Reveal className="shots__item" delay={160}><img src={img("/images/phone-actions.png")} alt="New video screen with Save, Regenerate and more actions" loading="lazy" /></Reveal>
          </div>
        </div>
      </section>

      {/* S05 How to start */}
      <section className="section">
        <div className="container">
          <div className="heading">
            <Reveal as="span" className="pill">How it works</Reveal>
            <Split as="h2" className="h2" parts={[["Three steps to a video"]]} />
          </div>
          <div className="steps">
            {steps.map((s, i) => (
              <Reveal className="step card" key={s.n} delay={i * 60}>
                <span className="muted small">{s.n}</span>
                <h3 className="h4">{s.title}</h3>
                <p className="muted">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
