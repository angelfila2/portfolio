const supportImage = name => `${import.meta.env.BASE_URL}projects/supportflow/${name}`;

// Keep project content here; all cards share one case-study page.
export const projects = [{
  slug: "supportflow",
  description: "SupportFlow is an AI-assisted helpdesk that helps sort incoming support tickets. Users can type a request or upload an email, and the system identifies the issue, assigns a severity and decides whether to suggest a FAQ-based reply or pass it to a person. The helpdesk brings priority badges, deadline dates, AI assessments and human reviews together in one workspace. Staff can record replies, update ticket status with a required note, and follow each change in a timeline. The AI suggests reply text; email delivery is not integrated.",
  title: "SupportFlow",
  category: "AI engineering / Full stack",
  summary: "AI-assisted ticket triage with grounded FAQ replies, critical-incident escalation and a human review workspace.",
  stack: ["Python", "FastAPI", "Ollama", "ChromaDB", "SQLite", "React"],
  repository: "https://github.com/angelfila2/support-triage",
  cover: supportImage("inbox.png"),
  mascot: supportImage("corgi.png"),
  gallery: [{
    image: supportImage("inbox.png"),
    title: "One queue, clear next steps",
    caption: "Search and filter tickets, compare colour-coded priorities and check SLA deadlines. All screenshots show synthetic tickets in an isolated demo database."
  }, {
    image: supportImage("intake.png"),
    title: "From request to AI triage",
    caption: "Type a single-issue request or upload an email, then submit it through the same triage pipeline."
  }, {
    image: supportImage("assessment.png"),
    title: "A decision you can inspect",
    caption: "Inspect the expandable AI assessment, copy the suggested reply and review the classification before recording a helpdesk update."
  }, {
    image: supportImage("workflow.png"),
    title: "Keep every update in context",
    caption: "Move tickets from Open to Responded states with a required note. The timeline keeps triage, review, response and status activity together."
  }, {
    image: supportImage("insights.png"),
    title: "See the whole queue",
    caption: "Switch between bar and pie charts for category and routing breakdowns. Reports cover the full ticket database, with synthetic demo values shown here."
  }],
  features: [["Grounded reply suggestions", "Retrieve relevant FAQ guidance and suggest replies that a helpdesk user can copy."], ["Context-aware incident assessment", "Assess impact scope, availability and incident status with structured AI output, then apply severity and escalation rules."], ["Priorities and deadlines", "Distinguish SEV1 to SEV5 with colour-coded badges and see each ticket's SLA deadline."], ["Manual and email entry", "Type a single-issue request or upload an email through the same triage pipeline."], ["Review and response workflow", "Review AI classifications and record Responded statuses with a required update note."], ["Activity timeline", "Follow ticket creation, triage attempts, reviews and helpdesk status changes without losing earlier notes."], ["Flexible analytics", "Choose bar or pie charts for classification and routing breakdowns across saved tickets."]],
  workflow: ["Save the request", "Retrieve FAQ context", "Assess incident facts", "Apply severity and routing rules", "Suggest a reply or escalate", "Record helpdesk updates"]
}, {
  slug: "room-booking",
  description: "A room booking application inspired by the difficulties of managing reservations in a shared spreadsheet. It provides a structured way to manage room bookings, with backend validation to check for overlapping time slots and PostgreSQL to store reservation records.",
  title: "Room Booking MVP",
  category: "Backend engineering",
  summary: "A room reservation service inspired by the scheduling conflicts I encountered when bookings were managed in a shared spreadsheet.",
  stack: ["React", "Node.js", "Express", "Prisma", "PostgreSQL"],
  repository: "https://github.com/angelfila2/room-booking",
  features: [["Reservation APIs", "Create and manage bookings through a RESTful backend."], ["Conflict detection", "Check overlapping time slots as part of booking validation."], ["Persistent records", "Store bookings in PostgreSQL using Prisma for database access."], ["Service-layer rules", "Keep booking decisions separate from HTTP request handling."]],
  workflow: ["Choose a room and time", "Validate the request", "Check for overlaps", "Store the reservation"]
}, {
  slug: "lms-guardian",
  description: "LMS Guardian is a team-based undergraduate final-year project for reviewing external links in learning-management content. It combines URL validation, threat-intelligence APIs, content analysis and reporting to help course teams inspect potentially unsafe resources. I worked as the lead software developer and primary contributor.",
  title: "LMS Guardian",
  category: "Security / Backend engineering",
  summary: "A team-based final-year project combining URL analysis, security API integrations and organised reporting for learning-management content.",
  stack: ["Python", "FastAPI", "PostgreSQL", "Security APIs"],
  repository: "https://github.com/angelfila2/LMSGuardian",
  features: [["URL inspection", "Clean and validate external links before analysis."], ["Security integrations", "Combine threat-intelligence providers and content-analysis services."], ["Organised persistence", "Keep course, session and analysis information in a structured database."], ["Readable reports", "Generate Word reports that group findings for course review."]],
  workflow: ["Collect external links", "Validate URLs", "Analyse security/content", "Store findings", "Generate a report"]
}, {
  slug: "shopmore",
  description: "ShopMore is an e-commerce project built with Java, Spring and PostgreSQL. It brings together user authentication, product browsing, cart operations and order management to explore the backend flows behind an online store.",
  title: "ShopMore",
  category: "Backend engineering",
  summary: "An e-commerce project covering user authentication, product browsing, cart operations and order management.",
  stack: ["Java", "Spring", "PostgreSQL"],
  features: [["Accounts", "User authentication for the shopping workflow."], ["Product browsing", "A catalogue of products customers can explore."], ["Cart operations", "Manage the items selected before ordering."], ["Order management", "Connect the cart workflow to persisted orders."]],
  workflow: ["Sign in", "Browse products", "Manage the cart", "Create an order"]
}];
export const findProject = slug => projects.find(project => project.slug === slug);
