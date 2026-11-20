import { Link } from "react-router";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function NotFound() {
  return (
    <section className="hero hero--page">
      <Reveal as="span" className="pill">404</Reveal>
      <Split as="h1" className="h-page" parts={[["This page doesn't exist"]]} />
      <Reveal as="p" className="lead hero__sub" delay={150}>
        The link may be old or mistyped. Start again from the home page.
      </Reveal>
      <Reveal className="hero__cta" delay={220}>
        <Link className="btn btn--white btn--md" to="/">Back to home</Link>
      </Reveal>
    </section>
  );
}
