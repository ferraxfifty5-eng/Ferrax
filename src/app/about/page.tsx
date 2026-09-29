import Link from "next/link";
import { InnerPage } from "@/components/inner-page";

const capabilities = [
	{ number: "01", title: "Digital growth", items: "Digital marketing / SEO / Local SEO / Social media / Content / Performance / Lead generation" },
	{ number: "02", title: "Technology & automation", items: "Websites / E-commerce / Software / APIs / CRM / WhatsApp / Email / Workflows / AI agents" },
	{ number: "03", title: "Creative & branding", items: "Branding / Graphic design / Video / Reels / Ad creatives / Copywriting" },
];

const reasons = [
	["01", "One partner. Multiple capabilities.", "Marketing, technology, automation and creative work in one integrated operating view."],
	["02", "Built for growth.", "We build systems that support visibility, leads, conversions, efficiency and the next stage of the business."],
	["03", "Technology-driven.", "AI agents, APIs, CRM and automated workflows reduce manual work and create room for better decisions."],
	["04", "Strategy first.", "We understand the business, audience, challenge and goal before choosing the channel or technology."],
];

export default function AboutPage() {
	return (
		<InnerPage
			eyebrow="About FERRAX / Digital growth + technology + automation"
			title={<>We build the systems that make <em>growth feel possible.</em></>}
			intro="FERRAX is a digital growth, technology and automation company helping ambitious businesses move from simply being online to building a digital ecosystem that works for them."
		>
			<section className="about-intro shell">
				<div className="about-intro-copy">
					<p className="eyebrow"><span className="pulse" /> A connected point of view</p>
					<h2>Businesses do not need more disconnected digital activity.</h2>
					<p>They need a clear system: one that attracts the right audience, turns attention into opportunity, and keeps improving after launch.</p>
				</div>
				<div className="about-intro-mark" aria-label="Strategy, technology, automation, growth">
					<span>01 / Strategy</span><span>02 / Technology</span><span>03 / Automation</span><strong>04 / Growth</strong>
				</div>
			</section>

			<section className="section about-section about-who">
				<div className="shell about-who-grid">
					<div className="section-heading"><p className="eyebrow">Who we are</p><h2>Great strategy needs the <em>right infrastructure.</em></h2></div>
					<div className="about-body-copy"><p>Businesses today need more than a website or social media presence. They need connected systems that attract the right audience, generate leads, automate repetitive processes, and turn opportunities into measurable growth.</p><p>That is where we come in. FERRAX brings digital marketing, SEO, web development, AI agents, CRM, workflow automation, branding and creative solutions together under one roof.</p></div>
				</div>
			</section>

			<section className="section about-section about-capabilities">
				<div className="shell"><div className="section-heading"><p className="eyebrow">What we do</p><h2>One connected team for the <em>full growth picture.</em></h2></div><div className="about-capability-grid">{capabilities.map((capability) => <article className="about-capability" key={capability.number}><span>{capability.number}</span><h3>{capability.title}</h3><p>{capability.items}</p><i aria-hidden="true">-&gt;</i></article>)}</div></div>
			</section>

			<section className="section about-philosophy"><div className="shell about-philosophy-grid"><div><p className="eyebrow">Our philosophy</p><h2>Ideas.<br /><em>Strategy.</em><br />Impact.</h2></div><div className="about-flow"><p>Every successful digital journey starts with an idea. But an idea alone is not enough.</p><div className="about-flow-list"><span><b>01</b> Strategy gives it direction.</span><span><b>02</b> Technology gives it capability.</span><span><b>03</b> Automation gives it scale.</span><span><b>04</b> Execution turns it into impact.</span></div></div></div></section>

			<section className="section about-section about-reasons"><div className="shell"><div className="section-heading"><p className="eyebrow">Why FERRAX</p><h2>Built to turn complexity into <em>forward motion.</em></h2></div><div className="about-reasons-grid">{reasons.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

			<section className="section about-section about-purpose"><div className="shell about-purpose-grid"><article><p className="eyebrow">Our vision</p><h2>To build smarter businesses through <em>digital growth, technology & automation.</em></h2><p>We envision a future where businesses combine human creativity with intelligent technology to operate more efficiently, reach more customers, and scale without unnecessary complexity.</p></article><article><p className="eyebrow">Our mission</p><h2>Make advanced digital capability more <em>practical and valuable.</em></h2><p>We help businesses grow through intelligent digital solutions that combine strategy, technology, creativity and automation.</p></article></div></section>

			<section className="section shell about-founder"><div className="about-founder-kicker"><span>FERRAX / PEOPLE</span><span>01 — 01</span></div><div className="about-founder-grid"><div className="about-founder-profile"><p className="eyebrow"><span className="pulse" /> Meet the founder</p><h2 className="about-founder-name">Parthi <em>Krishna.</em></h2><p className="about-founder-role">Founder & Digital Growth Strategist</p></div><div><p>Parthi Krishna founded FERRAX with a focus on bringing digital growth, technology, branding and automation together into one unified business solution.</p><p>With a strategy-led approach, the goal is to help businesses identify opportunities, build stronger digital foundations, and use technology to create more efficient paths to growth.</p><blockquote>“Ideas without execution remain ideas. Strategy turns them into impact.”</blockquote></div></div></section>

			<section className="about-end-band"><div className="shell"><p className="eyebrow">FERRAX / Where growth meets technology</p><h2>We do not just build digital solutions.<br /><em>We build systems designed for growth.</em></h2><Link className="button" href="/free-growth-audit">Start a conversation <i>-&gt;</i></Link></div></section>
		</InnerPage>
	);
}
