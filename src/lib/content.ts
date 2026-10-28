export type CaseStudy = {
  client: string;
  industry: string;
  location: string;
  challenge: string;
  objectives: string[];
  strategy: string;
  services: string[];
  implementation: string;
  results: string;
  metrics: string[];
  testimonial: string;
  images: string[];
  technologies: string[];
  date: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  author: string;
  date: string;
  category: string;
  featuredImage: string;
  summary: string;
  readingTime: string;
  callToAction?: { label: string; href: string };
  sections: Array<{ heading: string; paragraphs: string[] }>;
};

export const caseStudies: CaseStudy[] = [];

export const featuredClients = [
  {
    name: "Stark Heaters",
    industry: "Industrial heating",
    description:
      "Customized heating solutions for rubber molding and temperature-controlled industrial processes, matched to equipment, process and installation conditions.",
    website: "https://www.starkheaters.in/",
  },
];

export const testimonials: Array<{ quote: string; name: string; company: string }> = [];

export const socialLinks = {
  instagram: "",
  linkedin: "",
  facebook: "",
  youtube: "",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "commercial-growth-system",
    title: "Why channel performance falls apart without a commercial system",
    seoTitle: "Why Channel Performance Needs a Commercial Growth System",
    metaDescription: "A practical view of how marketing, sales and delivery lose efficiency when the operating model is disconnected.",
    author: "FERRAX",
    date: "2026-08-18",
    category: "Digital Marketing",
    featuredImage: "",
    summary: "A practical view of how marketing, sales and delivery lose efficiency when the operating model is disconnected.",
    readingTime: "6 min read",
    sections: [
      { heading: "The hidden cost of disconnected channels", paragraphs: ["A business can be active on search, social, email and a website and still have a weak growth system. The problem is usually not effort. It is that each channel is optimized for its own output instead of the customer decision.", "When campaign language does not match the landing page, or when a form submission does not create a clear sales task, attention leaks before it becomes useful demand."] },
      { heading: "Start with the commercial journey", paragraphs: ["Map the route from first discovery to conversation, purchase and repeat business. Mark where a customer needs proof, where the team needs context and where a handoff can fail.", "This simple map gives strategy a practical job: connect the promise, the page, the enquiry, the response and the measurement into one operating loop."] },
      { heading: "Build the feedback loop", paragraphs: ["A commercial system does not need every tool on day one. It needs clear ownership, useful events and a regular review of what is creating qualified movement.", "The strongest next step is often small: a better offer, a clearer landing page, a lead-routing rule or a reporting view that lets the team act sooner."] },
    ],
  },
  {
    slug: "seo-decision-clarity",
    title: "SEO is not content volume. It is decision clarity at scale",
    seoTitle: "SEO Is Decision Clarity at Scale",
    metaDescription: "The strongest search systems solve the right customer questions with usable, structured digital experiences.",
    author: "FERRAX",
    date: "2026-08-11",
    category: "SEO",
    featuredImage: "",
    summary: "The strongest search systems solve the right customer questions with useful, better-structured digital experiences.",
    readingTime: "5 min read",
    sections: [
      { heading: "Search intent is a business question", paragraphs: ["People rarely search for content in the abstract. They search because they are comparing options, checking risk, looking for a local provider or trying to understand the next step.", "SEO becomes more valuable when those questions are connected to a useful page and a clear action, not when a site simply produces more words."] },
      { heading: "Make the page do real work", paragraphs: ["A strong search page gives a visitor enough context to decide whether the business understands their problem. It explains the offer plainly, answers the objections that matter and makes the next action easy to find.", "Technical foundations still matter: crawlable structure, descriptive metadata, fast delivery, internal links and accessible content make the experience easier for both people and search engines."] },
      { heading: "Measure qualified discovery", paragraphs: ["Traffic is an early signal, not the finish line. Review which queries create engaged visits, enquiries, calls, store visits or other meaningful actions.", "The goal is not maximum visibility. It is useful visibility in the moments where a customer is ready to decide."] },
    ],
  },
  {
    slug: "crm-automation-interest-to-action",
    title: "CRM automation works best when it shortens the time between interest and action",
    seoTitle: "CRM Automation From Interest to Action",
    metaDescription: "The value of CRM automation is reducing the gap between a valid enquiry and a useful response.",
    author: "FERRAX",
    date: "2026-08-04",
    category: "CRM",
    featuredImage: "",
    summary: "The real value is not in sending more messages; it is in reducing the gap between a valid enquiry and a proper reply.",
    readingTime: "6 min read",
    sections: [
      { heading: "Speed is only part of the problem", paragraphs: ["A fast reply is not automatically a useful reply. Teams lose momentum when the message lacks context, arrives with no owner or asks the customer to repeat information they already supplied.", "Automation should protect the quality of the handoff as well as the time it takes. That starts with capturing the details a person needs to decide what happens next."] },
      { heading: "Design the first response", paragraphs: ["A practical workflow can acknowledge the enquiry, summarize the request, assign an owner and create a clear task with a due time. Different enquiry types can follow different routes without making the customer learn the internal process.", "Use templates for consistency, but leave room for a human response when the question is complex, sensitive or commercially important."] },
      { heading: "Keep the workflow observable", paragraphs: ["Review response time, contact rate, qualification quality and the reasons enquiries stall. These signals show whether automation is removing friction or simply moving it somewhere less visible.", "Start with the few fields and rules that improve a real decision, then expand carefully."] },
    ],
  },
  {
    slug: "free-website-foundation-pack-offer",
    title: "Get a free website when you choose the FERRAX Foundation Pack",
    seoTitle: "Free Website with Foundation Pack | Ends Nov 8",
    metaDescription: "Choose FERRAX's Foundation Pack by November 8, 2026, and get a website included at no extra charge. Explore the offer and what to confirm.",
    author: "FERRAX",
    date: "2026-10-28",
    category: "Digital Marketing",
    featuredImage: "",
    summary: "For a limited time, choose the FERRAX Foundation Pack by November 8, 2026, and get a website included at no extra charge.",
    readingTime: "5 min read",
    callToAction: { label: "Discuss the Foundation Pack offer", href: "/contact" },
    sections: [
      {
        heading: "A stronger online foundation for your business",
        paragraphs: [
          "A website gives prospective customers a clear place to understand your business, explore your services and decide how to get in touch. For a small business building its online presence, it works best when it connects naturally with search, social media and a consistent brand message.",
          "Choose the FERRAX Foundation Pack by November 8, 2026, and get a website included at no extra charge. The limited-time offer pairs a website with a practical starting point for building your digital presence.",
        ],
      },
      {
        heading: "What the Foundation Pack supports",
        paragraphs: [
          "The Foundation Pack is designed for businesses that need a clear, consistent digital starting point. Its published scope includes digital strategy, competitor analysis, Google Business optimization, social media, 12 posts, 4 Reels, basic local SEO, analytics and monthly reporting.",
          "Adding a website gives customers another useful way to learn about your business and find the next step. It can support your local visibility and give your social and search activity a clear destination.",
        ],
      },
      {
        heading: "Who should consider this website offer?",
        paragraphs: [
          "This offer may suit a local business that is starting out online, relying mainly on social profiles, or ready to make its services easier to find and understand. It can also be a fit if your current website no longer reflects what you offer or makes it difficult for customers to contact you.",
          "Before choosing a package, consider the pages your customers need, the services or locations you want to highlight, and the action you want visitors to take. Clear goals help make the website and marketing activity work together.",
        ],
      },
      {
        heading: "Confirm the website scope before you begin",
        paragraphs: [
          "A website project has practical details worth agreeing in advance. During your consultation, confirm the included pages and features, content and image requirements, delivery timeline, domain and hosting arrangements, and any ongoing costs. Ask for the agreed website scope and offer eligibility in writing.",
          "This makes it easier to understand exactly what is included in the promotion and how it fits your business needs. The Foundation Pack has an indicative starting price; final pricing and scope depend on the requirements agreed with FERRAX.",
        ],
      },
      {
        heading: "How to claim the offer",
        paragraphs: [
          "Contact FERRAX before November 8, 2026, to discuss your goals and confirm that your Foundation Pack engagement qualifies for the free website offer. Share your business type, location and the pages or features you need so the scope can be discussed clearly.",
          "If you are looking for a digital marketing package for a small business that brings strategy, local SEO and social media together with a website, start the conversation before the offer deadline.",
        ],
      },
    ],
  },
  {
    slug: "b2b-lead-generation-more-clients",
    title: "Want More B2B Clients for Your Business?",
    seoTitle: "B2B Lead Generation & Appointment Setting | FERRAX",
    metaDescription: "FERRAX helps businesses generate qualified B2B leads, connect with potential clients, book meetings and build a stronger sales pipeline.",
    author: "FERRAX",
    date: "2026-10-28",
    category: "B2B Lead Generation",
    featuredImage: "/b2b.png",
    summary: "Find a more connected way to reach potential business clients with B2B lead generation, appointment setting, website development and digital growth strategy.",
    readingTime: "5 min read",
    callToAction: { label: "Discuss B2B growth with FERRAX", href: "/contact" },
    sections: [
      {
        heading: "Build a more consistent B2B sales pipeline",
        paragraphs: [
          "Finding new business clients takes more than collecting names. You need to reach the right decision-makers, start relevant conversations and create a clear next step for qualified prospects. A focused B2B lead generation approach can help connect those activities and give your sales team a stronger pipeline to work with.",
          "FERRAX helps businesses generate qualified B2B leads, connect with potential clients, book meetings and build a stronger sales pipeline. The approach is shaped around your audience, offer and sales process rather than activity for activity's sake.",
        ],
      },
      {
        heading: "B2B lead generation that starts with your ideal client",
        paragraphs: [
          "Effective B2B lead generation begins with clarity: which industries, company types, roles and business needs are a strong fit for your offer? Defining that audience helps keep outreach relevant and gives your team a consistent way to assess potential opportunities.",
          "A practical process brings targeting, messaging and follow-up together. It helps your business focus on meaningful conversations and qualified interest instead of treating every contact as an equally likely customer.",
        ],
      },
      {
        heading: "Appointment setting that moves conversations forward",
        paragraphs: [
          "Once a potential client shows interest, timely and clear follow-up can make it easier to agree on a useful next step. Appointment setting supports that process by helping turn relevant conversations into scheduled meetings with the right context.",
          "The goal is not simply to fill a calendar. It is to arrange conversations that make sense for both sides, so your sales team can spend more time understanding genuine needs and discussing whether there is a fit.",
        ],
      },
      {
        heading: "A professional website supports B2B trust",
        paragraphs: [
          "Potential business clients often review a company online before replying to outreach or booking a meeting. A professional website can explain what you do, who you help and why a prospect should take the next step.",
          "Website development works best when the message, service information and contact journey support your business goals. A clear site can give lead-generation activity a consistent destination and make it easier for prospects to learn about your company.",
        ],
      },
      {
        heading: "Connect lead generation with a digital growth strategy",
        paragraphs: [
          "B2B growth is stronger when lead generation, appointment setting and your website work as parts of one system. A digital growth strategy helps align those pieces with your positioning, target market and sales priorities.",
          "FERRAX offers B2B lead generation, appointment setting, website development and digital growth strategy to help businesses reach potential clients and strengthen their pipeline. The right mix depends on your goals, audience and current sales process.",
        ],
      },
      {
        heading: "Looking for new clients or a professional website?",
        paragraphs: [
          "If your business is looking for new B2B clients, more qualified conversations or a professional website to support growth, start with a conversation about what you need. Share your audience, services and current challenges so the next steps can be discussed around your business.",
          "Visit FERRAX online or contact the team to discuss how B2B lead generation and digital growth services could support your business.",
        ],
      },
    ],
  },
];
