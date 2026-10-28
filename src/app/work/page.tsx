import { InnerPage } from "@/components/inner-page";
import { caseStudies, featuredClients } from "@/lib/content";

export default function WorkPage() {
  return (
    <InnerPage
      eyebrow="Work / Featured clients"
      title={
        <>
          Work shaped by <em>real businesses.</em>
        </>
      }
      intro="Explore businesses we work with and learn about what they do. Detailed case studies and verified outcomes are published only when approved."
    >
      <section className="section shell">
        <div className="industry-grid">
          {featuredClients.map((client) => <article className="industry-card work-case-card" key={client.name}><span>{client.industry}</span><h2>{client.name}</h2><p>{client.description}</p><a href={client.website} target="_blank" rel="noopener noreferrer">Visit website <i>-&gt;</i></a></article>)}
          {caseStudies.length === 0 && featuredClients.length === 0 ? <article className="industry-card work-empty-card">
            <span>PROJECT LIBRARY / IN PROGRESS</span>
            <h2>Useful work deserves useful evidence.</h2>
            <p>Public case studies are published after a project is complete and the client has approved what can be shared. Until then, we keep the conversation grounded in your context rather than borrowed claims.</p>
            <p>Every future study will cover the starting point, decisions made, implementation, tools used and outcomes that can be verified.</p>
            <i>Evidence-led by design</i>
          </article> : null}
          {caseStudies.map((study, index) => <article className="industry-card work-case-card" key={`${study.client}-${index}`}><span>{study.industry}</span><h2>{study.client}</h2><p>{study.challenge}</p><p>{study.results}</p><i>Case study</i></article>)}
        </div>
      </section>
    </InnerPage>
  );
}
