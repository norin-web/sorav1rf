import { site } from "../content/site";
import MailForm from "../components/MailForm";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function Contact() {
  return (
    <section className="hero hero--left contact">
      <div className="glow glow--left" aria-hidden="true" />
      <div className="container contact__grid">
        <div className="contact__left">
          <Reveal as="span" className="pill">Contact</Reveal>
          <Split as="h1" className="h-page" parts={[["Write to us"]]} />
          <Reveal as="p" className="lead" delay={150}>
            Questions, feedback or a problem with a generation — send it over and we will reply by email.
          </Reveal>
          <Reveal className="contact__mail" delay={200}>
            <span className="muted small">Email</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </Reveal>
        </div>
        <Reveal className="card contact__form" delay={200}>
          <MailForm
            subject={`${site.brand} — message`}
            submit="Send message"
            fields={[
              { name: "name", label: "Name", required: true, auto: "name" },
              { name: "email", label: "Email", type: "email", required: true, auto: "email" },
              { name: "message", label: "Message", textarea: true, required: true },
            ]}
          />
        </Reveal>
      </div>
    </section>
  );
}
