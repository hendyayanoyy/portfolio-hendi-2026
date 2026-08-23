import { notFound } from "next/navigation";
import { projectCapture, projects } from "../../projects";

export function generateStaticParams(){return projects.map(({slug})=>({slug}))}

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const project=projects.find(item=>item.slug===slug);
  if(!project)notFound();
  const index=projects.findIndex(item=>item.slug===slug);
  const next=projects[(index+1)%projects.length];
  return <main className="case-study">
    <header className="case-nav"><a href="/#experience">← All projects</a><a href="/" className="case-mark"><span>Hendi</span> Saputra</a><a href={project.url} target="_blank" rel="noreferrer">Visit live ↗</a></header>
    <section className="case-hero">
      <div className="case-kicker"><span>{String(index+1).padStart(2,"0")}</span><p>Selected project · {project.period}</p></div>
      <div className="case-heading"><h1>{project.name}</h1><p>{project.intro}</p></div>
      <div className="case-meta"><div><span>Role</span><strong>{project.role}</strong></div><div><span>Stack</span><strong>{project.tech}</strong></div></div>
    </section>
    <section className="case-gallery" aria-label={`${project.name} interface gallery`}>
      {project.visuals.map((visual,i)=><figure className={i===0?"case-visual case-visual--wide":"case-visual"} key={`${visual.url}-${visual.label}`}>
        <div><img src={projectCapture(visual)} style={{objectPosition:visual.position||"top"}} alt={`${project.name} — ${visual.label}`} loading={i===0?"eager":"lazy"}/></div>
        <figcaption><span>{String(i+1).padStart(2,"0")}</span><p>{visual.label}</p><em>Live website capture</em></figcaption>
      </figure>)}
    </section>
    <section className="case-contribution"><p>Contribution</p><div><h2>From requirements to a working product.</h2><ul>{project.contribution.map(item=><li key={item}>{item}</li>)}</ul></div></section>
    <a className="case-next" href={`/projects/${next.slug}`}><span>Next project</span><strong>{next.name}</strong><i>↗</i></a>
  </main>
}
