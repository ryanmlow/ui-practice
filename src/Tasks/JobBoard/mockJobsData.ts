const mockJobsData = [
  {
    by: "varuntandon",
    id: 43860368,
    score: 1,
    time: 1746118845,
    title: "Waypoint Transit (YC W25) is hiring a software engineer",
    type: "job",
    url: "https://www.workatastartup.com/jobs/75517",
  },
  {
    by: "darpank",
    id: 43852548,
    score: 1,
    time: 1746061262,
    title: "GroMo (YC W21) Is Hiring",
    type: "job",
    url: "https://www.ycombinator.com/companies/gromo/jobs/aP4JS9K-product-tech-business-ai-enthusiasts",
  },
  {
    by: "huntaub",
    id: 43848007,
    score: 1,
    text: 'I’m Hunter, the founder of Archil (recently rebranded from Regatta Storage). We’re building the new, active data layer for the cloud, and we’re starting by transforming S3 (or compatible!) buckets into infinite, high-speed, local[1] file systems. Our early customers are using Archil’s performance to power CI&#x2F;CD pipelines, build stateless Jupyter notebooks for AI researchers, run training jobs, and build out storage defaults for the new set of AI clouds. You may know us from our Hacker News launch last Fall (<a href="https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=42174204">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=42174204</a>), and you can see a demo of our product here (<a href="https:&#x2F;&#x2F;archil.com&#x2F;">https:&#x2F;&#x2F;archil.com&#x2F;</a>).<p>Now, we’re looking to grow the team to keep up with customer demand! We’re looking for a Distributed Systems Engineer, who will be focused on helping us build scalable, distributed systems in the cloud. Notably, you don’t need prior experience in the storage space, just experience (~2-5 years) building, scaling, and operating backend software. Ideally, you’ve worked at a high-growth startup in the past. Most importantly, you’re someone who understands how computers work from the ground up (from CPUs, to the Linux kernel, to the TCP stack, to distributed consensus). Our stack is primarily written in Rust (for the stuff that’s important), Go (for the stuff that needs to be written fast), and React&#x2F;Next.js (for the small number of things that people look at).<p>We raised a successful round after YC, we’re here to stay, and we think that there’s immense opportunity in this space (that’s only growing with large AI models, data sets, and agents taking over). We’re a team of 4 today, with backgrounds in storage infra (at AWS) and AI. If you’re a builder who’s looking to build the next foundation of cloud computing, we’d love to have you join us. Send us a note if you’re interested here: <a href="https:&#x2F;&#x2F;www.ycombinator.com&#x2F;companies&#x2F;archil&#x2F;jobs&#x2F;svfkDVv-founding-distributed-systems-engineer">https:&#x2F;&#x2F;www.ycombinator.com&#x2F;companies&#x2F;archil&#x2F;jobs&#x2F;svfkDVv-fo...</a><p>[1] Local to your cloud instances, that is, not your laptop.',
    time: 1746032465,
    title:
      "Archil (YC F24) Is Hiring a Distributed Systems Engineer (In-Person, SF)",
    type: "job",
  },
  {
    by: "greenfish6",
    id: 43837996,
    score: 1,
    time: 1745960405,
    title: "Modern Realty (YC S24) Is Hiring",
    type: "job",
    url: "https://www.workatastartup.com/jobs/66546",
  },
  {
    by: "sohrabhaghighat",
    id: 43835216,
    score: 1,
    time: 1745946075,
    title:
      "Hestus, Inc. (YC S24) Is Hiring an ML Engineer to Revolutionize CAD",
    type: "job",
    url: "https://www.ycombinator.com/companies/hestus-inc/jobs/WQVdwX8-machine-learning-engineer",
  },
  {
    by: "davidbuniat",
    id: 43823580,
    score: 1,
    time: 1745859680,
    title:
      "Activeloop (YC S18) is hiring a VP of Engineering in Mountain View (on-site)",
    type: "job",
    url: "https://careers.activeloop.ai/",
  },
  {
    by: "beyondd",
    id: 43820408,
    score: 1,
    time: 1745841616,
    title:
      "Optery (YC W22) – Engineering Team Lead and Engineers with Node.js (U.S., Latam)",
    type: "job",
    url: "https://jobs.ashbyhq.com/optery",
  },
  {
    by: "kbyatnal",
    id: 43813336,
    score: 1,
    time: 1745773246,
    title:
      "Extend (YC W23) is hiring engineers to build LLM document processing",
    type: "job",
    url: "https://jobs.ashbyhq.com/extend/9d4d8974-bd9b-432d-84ec-8268e5a8ed37",
  },
  {
    by: "wilson090",
    id: 43807753,
    score: 1,
    time: 1745706244,
    title:
      "Parity (YC S24) is hiring founding engineers to build an AI SRE (in-person, SF)",
    type: "job",
    url: "https://www.ycombinator.com/companies/parity/jobs",
  },
  {
    by: "malisper",
    id: 43802839,
    score: 1,
    text: 'What we do:\nFreshpaint bridges the gap between patient privacy and digital marketing by ensuring sensitive data is never shared with tools that aren’t HIPAA-compliant. Freshpaint bridges the gap between patient privacy and digital marketing by ensuring sensitive data is never shared with tools that aren’t HIPAA-compliant. We&#x27;re a small, senior team building real-time data pipelines and and privacy-safe systems.<p>Tech stack: Go, Postgres, AWS, TypeScript, React.<p>We&#x27;re looking for:<p>Backend Engineers: Experience with backend systems, APIs, distributed architectures, and product-focused engineering.\nApply here: <a href="https:&#x2F;&#x2F;tinyurl.com&#x2F;4nbv7wde" rel="nofollow">https:&#x2F;&#x2F;tinyurl.com&#x2F;4nbv7wde</a><p>Frontend Engineers: Experience with React, TypeScript, and owning UI development in collaborative environments.\nApply here: <a href="https:&#x2F;&#x2F;tinyurl.com&#x2F;wfud7ppv" rel="nofollow">https:&#x2F;&#x2F;tinyurl.com&#x2F;wfud7ppv</a><p>Experience at high growth, early stage startups is a must.<p>Fully remote (US). Competitive salary and equity.<p>Follow the URL&#x27;s above to apply or email our recruiter at shannan@freshpaint.io',
    time: 1745668838,
    title:
      "Freshpaint (YC S19) is hiring back end and front end engineers (Remote, US only)",
    type: "job",
  },
];

export default mockJobsData;
