/* ═══════════════════════════════════════════════════
  DATA
═══════════════════════════════════════════════════ */
const DIMENSIONS = [
 "Data & Reporting Infrastructure",
 "Compliance & Risk",
 "Environmental Impact",
 "Social & Stakeholder Intelligence",
 "Governance & Investment"
];

const MATURITY_OPTIONS = [
 { score: 1, label: "Ad hoc", desc: "Manual, fragmented, undocumented, or no AI-enabled process." },
 { score: 2, label: "Initial", desc: "Basic tooling exists, but work is siloed and inconsistently applied." },
 { score: 3, label: "Defined", desc: "Repeatable standards and ownership are in place for the core process." },
 { score: 4, label: "Managed", desc: "Controls, analytics, and AI-assisted workflows are actively managed." },
 { score: 5, label: "Leading", desc: "Integrated, real-time, audit-ready, and continuously improved capability." }
];

function scaleOptions(labels) {
 return MATURITY_OPTIONS.map((base, i) => ({ ...base, label: labels[i] || base.label }));
}

const QUESTIONS = [
 {
   id: 1,
   dimension: "Data & Reporting Infrastructure",
   dimIndex: 0,
   weight: 8,
   tier: "Primary KPI / Anchor",
   text: "How mature is your ESG data aggregation and system integration?",
   subtext: "Rate how consistently ESG data is pulled from teams, systems, sites, and suppliers into one usable reporting flow.",
   research: "Methodology v2: primary KPI for Data & Reporting Infrastructure. Anchored in EFRAG/CSRD, IFRS S1, GRI reporting expectations, and data-maturity literature.",
   focus: "ESG data aggregation and system integration",
   options: scaleOptions(["Fragmented", "Basic collection", "Defined flow", "Managed system", "Integrated platform"])
 },
 {
   id: 2,
   dimension: "Data & Reporting Infrastructure",
   dimIndex: 0,
   weight: 8,
   tier: "Primary KPI / Anchor",
   text: "How strong are your ESG data quality controls, lineage, and evidence?",
   subtext: "Rate whether ESG numbers can be traced, checked, explained, and supported during assurance or internal review.",
   research: "Methodology v2: primary KPI for data quality, lineage, and evidence. Uses IFRS S1 faithful representation, COSO internal control guidance, and assurance-readiness principles.",
   focus: "Data quality controls, lineage, and evidence",
   options: scaleOptions(["Unverified", "Limited checks", "Documented checks", "Controlled", "Audit-ready"])
 },
 {
   id: 3,
   dimension: "Data & Reporting Infrastructure",
   dimIndex: 0,
   weight: 7,
   tier: "Secondary KPI / Supporting",
   text: "How automated and audit-ready is your sustainability reporting process?",
   subtext: "Rate how much reporting still depends on manual copy-paste work versus traceable, repeatable workflows.",
   research: "Methodology v2: supporting KPI for reporting automation and audit trail readiness. Draws on CSRD assurance expectations and KPMG ESG assurance maturity references.",
   focus: "Reporting automation and audit trail readiness",
   options: scaleOptions(["Manual", "Template-based", "Repeatable", "Automated controls", "Continuous audit trail"])
 },
 {
   id: 4,
   dimension: "Compliance & Risk",
   dimIndex: 1,
   weight: 8,
   tier: "Primary KPI / Anchor",
   text: "How well have you mapped ESG obligations across ESRS, ISSB, GRI, and internal requirements?",
   subtext: "Rate whether your organization knows which standards apply and where each required datapoint is owned.",
   research: "Methodology v2: primary KPI for regulatory mapping to ESRS, ISSB, GRI, and internal obligations. Based on CSRD/EFRAG, IFRS S1/S2, and GRI disclosure structures.",
   focus: "Regulatory mapping to ESRS, ISSB, GRI, and internal obligations",
   options: scaleOptions(["Not mapped", "Aware", "Gap assessed", "Mostly mapped", "Fully mapped"])
 },
 {
   id: 5,
   dimension: "Compliance & Risk",
   dimIndex: 1,
   weight: 8,
   tier: "Primary KPI / Anchor",
   text: "How mature are your assurance controls and sustainability reporting internal controls?",
   subtext: "Rate whether ESG reporting has the same discipline as financial reporting: owners, approvals, evidence, and review.",
   research: "Methodology v2: primary KPI for assurance controls and sustainability reporting internal control. Informed by COSO ICSR, CSRD limited assurance, and audit-readiness research.",
   focus: "Assurance controls and sustainability reporting internal control",
   options: scaleOptions(["No controls", "Informal review", "Defined controls", "Tested controls", "Assurance-ready"])
 },
 {
   id: 6,
   dimension: "Compliance & Risk",
   dimIndex: 1,
   weight: 7,
   tier: "Secondary KPI / Supporting",
   text: "How clear is your AI governance, model oversight, and risk ownership for ESG work?",
   subtext: "Rate whether AI tools used for ESG have owners, acceptable-use rules, risk checks, and review processes.",
   research: "Methodology v2: supporting KPI for AI governance, model oversight, and risk ownership. Grounded in NIST AI RMF, OECD AI Principles, and emerging AI governance expectations.",
   focus: "AI governance, model oversight, and risk ownership",
   options: scaleOptions(["No oversight", "Informal rules", "Defined owner", "Managed controls", "Governed lifecycle"])
 },
 {
   id: 7,
   dimension: "Environmental Impact",
   dimIndex: 2,
   weight: 8,
   tier: "Primary KPI / Anchor",
   text: "How mature is your carbon accounting for Scope 1, Scope 2, and Scope 3 emissions?",
   subtext: "Rate whether emissions data is complete, method-based, supplier-aware, and ready for disclosure or assurance.",
   research: "Methodology v2: primary KPI for carbon accounting maturity across Scope 1, 2, and 3. Based on the GHG Protocol Scope 3 Standard, CDP reporting practice, and climate disclosure expectations.",
   focus: "Carbon accounting maturity for Scope 1, 2, and 3",
   options: scaleOptions(["Not calculated", "Basic estimates", "Defined methods", "Managed inventory", "Assurance-ready"])
 },
 {
   id: 8,
   dimension: "Environmental Impact",
   dimIndex: 2,
   weight: 7,
   tier: "Secondary KPI / Supporting",
   text: "How integrated is supplier and value-chain ESG data into your reporting?",
   subtext: "Rate how well supplier data, Scope 3 inputs, and value-chain risks flow into your ESG management process.",
   research: "Methodology v2: supporting KPI for supplier and value-chain ESG data integration. Anchored in EFRAG value-chain guidance, GHG Protocol Scope 3, and CSRD value-chain disclosure needs.",
   focus: "Supplier and value-chain ESG data integration",
   options: scaleOptions(["No visibility", "Limited requests", "Partial dataset", "Managed suppliers", "Integrated value chain"])
 },
 {
   id: 9,
   dimension: "Environmental Impact",
   dimIndex: 2,
   weight: 7,
   tier: "Secondary KPI / Supporting",
   text: "How mature are your environmental risk analytics for climate, water, biodiversity, and land use?",
   subtext: "Rate whether environmental risks are tracked as static disclosures or analyzed for decisions, scenarios, and mitigation.",
   research: "Methodology v2: supporting KPI for environmental risk analytics across climate, water, biodiversity, and land use. Informed by ESRS environmental standards and climate-risk analytics practice.",
   focus: "Environmental risk analytics for climate, water, biodiversity, and land use",
   options: scaleOptions(["Not assessed", "Basic tracking", "Defined indicators", "Managed analytics", "Scenario-ready"])
 },
 {
   id: 10,
   dimension: "Social & Stakeholder Intelligence",
   dimIndex: 3,
   weight: 8,
   tier: "Primary KPI / Anchor",
   text: "How reliable are your workforce, safety, diversity, and social metrics?",
   subtext: "Rate whether social data is complete, consistently defined, and trusted across HR, operations, and sustainability reporting.",
   research: "Methodology v2: primary KPI for workforce, safety, diversity, and social-metric reliability. Based on GRI social disclosures, ESRS social standards, and stakeholder-materiality research.",
   focus: "Workforce, safety, diversity, and social-metric reliability",
   options: scaleOptions(["Unreliable", "Basic records", "Defined metrics", "Managed dashboard", "Decision-grade"])
 },
 {
   id: 11,
   dimension: "Social & Stakeholder Intelligence",
   dimIndex: 3,
   weight: 7,
   tier: "Secondary KPI / Supporting",
   text: "How well do you monitor stakeholder sentiment, grievances, controversies, and human-rights risks?",
   subtext: "Rate whether stakeholder signals are captured early enough to manage social and reputational risk.",
   research: "Methodology v2: supporting KPI for stakeholder sentiment, grievance, controversy, and human-rights monitoring. Informed by GRI, ESRS S standards, and stakeholder theory.",
   focus: "Stakeholder sentiment, grievance, controversy, and human-rights monitoring",
   options: scaleOptions(["Reactive", "Ad hoc tracking", "Defined channels", "Managed monitoring", "Predictive insight"])
 },
 {
   id: 12,
   dimension: "Governance & Investment",
   dimIndex: 4,
   weight: 8,
   tier: "Primary KPI / Anchor",
   text: "How clearly are executive ownership, accountability, and AI/ESG governance cadence established?",
   subtext: "Rate whether leaders regularly review ESG and AI risks, assign ownership, and act on the results.",
   research: "Methodology v2: primary KPI for executive ownership, accountability, and AI/ESG governance cadence. Based on IFRS governance disclosures, NIST AI RMF governance, and CMMI maturity logic.",
   focus: "Executive ownership, accountability, and AI/ESG governance cadence",
   options: scaleOptions(["No owner", "Informal owner", "Defined cadence", "Managed oversight", "Board-level rhythm"])
 },
 {
   id: 13,
   dimension: "Governance & Investment",
   dimIndex: 4,
   weight: 7,
   tier: "Secondary KPI / Supporting",
   text: "How often do ESG and AI insights influence investment, procurement, and strategy decisions?",
   subtext: "Rate whether ESG and AI insights are just reported or actively used in capital allocation, procurement, and planning.",
   research: "Methodology v2: supporting KPI for using ESG and AI insights in investment, procurement, and strategy decisions. Draws on strategic ESG integration, responsible procurement, and decision-usefulness principles.",
   focus: "Use of ESG and AI insights in investment, procurement, and strategy decisions",
   options: scaleOptions(["Not used", "Occasional reference", "Defined inputs", "Managed decisions", "Embedded in strategy"])
 }
];
QUESTIONS.sort((a, b) => a.dimIndex - b.dimIndex || a.id - b.id);
 
/* ═══════════════════════════════════════════════════
  STATE
═══════════════════════════════════════════════════ */
let currentQ = 0;
let answers = new Array(QUESTIONS.length).fill(null);
let userData = {};
let followupAnswer = null;

const SCALE_LABELS = [
 "Not at all",
 "Started",
 "Partial",
 "Mostly",
 "Fully implemented"
];

const DIM_SHORT_LABELS = [
 "Data",
 "Compliance",
 "Environmental",
 "Social",
 "Governance"
];

function answerToPct(score) {
 return (score / 5) * 100;
}

function answerToPoints(score, weight) {
 return (answerToPct(score) / 100) * weight;
}
 
/* ═══════════════════════════════════════════════════
  SCREEN CONTROL
═══════════════════════════════════════════════════ */
function showScreen(id) {
 document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
 document.getElementById(id).classList.add('active');
 window.scrollTo(0, 0);
}
 
function goHome() {
 // Reset state
 currentQ = 0;
 answers = new Array(QUESTIONS.length).fill(null);
 userData = {};
 followupAnswer = null;
 showScreen('screen-landing');
}
 
/* ═══════════════════════════════════════════════════
  QUIZ
═══════════════════════════════════════════════════ */
function startQuiz() {
 currentQ = 0;
 answers = new Array(QUESTIONS.length).fill(null);
 renderQuestion();
 showScreen('screen-quiz');
}
 
function renderQuestion() {
 const q = QUESTIONS[currentQ];
 const prev = currentQ > 0 ? QUESTIONS[currentQ - 1] : null;
 const isNewDim = !prev || prev.dimIndex !== q.dimIndex;
 
 document.getElementById('q-dimension-label').textContent = q.dimension;
 document.getElementById('q-counter').textContent = `${currentQ + 1} / ${QUESTIONS.length}`;
 const remaining = QUESTIONS.length - currentQ;
 const timeEl = document.getElementById('q-time-left');
 if (timeEl) {
   const min = Math.max(1, Math.ceil((remaining * 30) / 60));
   timeEl.textContent = currentQ === QUESTIONS.length - 1 ? 'Final question' : `${min} min left`;
 }
 document.getElementById('progress-fill').style.width = `${((currentQ + 1) / QUESTIONS.length) * 100}%`;
 document.getElementById('q-dimension').textContent = q.dimension;
 document.getElementById('q-text').textContent = q.text;
 document.getElementById('q-subtext').textContent = q.subtext;
 
 
 // Dimension transition banner
 const dimBanner = document.getElementById('dim-transition');
 const dimCount = QUESTIONS.filter(x => x.dimIndex === q.dimIndex).length;
 const dimNum = q.dimIndex + 1;
 if (isNewDim && currentQ > 0) {
   document.getElementById('dim-transition-text').textContent =
     `Moving into Dimension ${dimNum} of 5: ${q.dimension} · ${dimCount} question${dimCount > 1 ? 's' : ''}`;
   dimBanner.classList.add('visible');
 } else {
   dimBanner.classList.remove('visible');
 }
 
 const list = document.getElementById('options-list');
 const sliderValue = answers[currentQ] || 3;
 const selectedOpt = q.options.find(opt => opt.score === sliderValue);
 list.innerHTML = `
   <div class="slider-answer">
     <div class="slider-answer-top">
       <div>
         <div class="slider-current-label" id="slider-current-label">${selectedOpt.label}</div>
         <div class="slider-current-desc" id="slider-current-desc">${selectedOpt.desc}</div>
       </div>
       <div class="slider-value" id="slider-value">${sliderValue}</div>
     </div>
     <input class="scale-slider" id="question-slider" type="range" min="1" max="5" step="1" value="${sliderValue}" aria-label="Answer from 1 to 5">
     <div class="slider-ticks">
       ${SCALE_LABELS.map((label, i) => `<div class="slider-tick" style="left:${i * 25}%"><strong>${i + 1}</strong>${label}</div>`).join('')}
     </div>
   </div>`;
 const slider = document.getElementById('question-slider');
 slider.addEventListener('input', e => selectOption(parseInt(e.target.value, 10)));
 
 // Research citation
 let cite = document.getElementById('q-research-cite');
 if (!cite) {
   cite = document.createElement('div');
   cite.id = 'q-research-cite';
   cite.className = 'q-research-cite';
   list.parentNode.insertBefore(cite, list.nextSibling);
 }
 cite.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 3h8M2 6h6M2 9h4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg> <span>${q.research}</span>`;
 
 const nextBtn = document.getElementById('btn-next');
 nextBtn.textContent = currentQ === QUESTIONS.length - 1 ? 'View Results' : 'Next';
 nextBtn.innerHTML += `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
 nextBtn.classList.toggle('ready', answers[currentQ] !== null);
 document.getElementById('btn-back').style.visibility = currentQ === 0 ? 'hidden' : 'visible';
 
 // re-trigger animation
 const card = document.getElementById('quiz-card');
 card.style.animation = 'none';
 requestAnimationFrame(() => { card.style.animation = ''; });
}
 
function selectOption(score) {
 answers[currentQ] = score;
 const q = QUESTIONS[currentQ];
 const opt = q.options.find(item => item.score === score);
 const valueEl = document.getElementById('slider-value');
 const labelEl = document.getElementById('slider-current-label');
 const descEl = document.getElementById('slider-current-desc');
 if (valueEl) valueEl.textContent = score;
 if (labelEl && opt) labelEl.textContent = opt.label;
 if (descEl && opt) descEl.textContent = opt.desc;
 document.getElementById('btn-next').classList.add('ready');
}
 
function goNext() {
 if (answers[currentQ] === null) return;
 if (currentQ < QUESTIONS.length - 1) {
   currentQ++;
   renderQuestion();
 } else {
   showScreen('screen-gate');
 }
}
 
function goBack() {
 if (currentQ > 0) { currentQ--; renderQuestion(); }
 else showScreen('screen-landing');
}
 
/* ═══════════════════════════════════════════════════
  GATE
═══════════════════════════════════════════════════ */
function submitGate() {
 const first  = document.getElementById('f-first').value.trim();
 const last   = document.getElementById('f-last').value.trim();
 const email  = document.getElementById('f-email').value.trim();
 const org    = document.getElementById('f-org').value.trim();
 const err    = document.getElementById('form-error');
 const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
 
 if (!first || !last || !email || !validEmail || !org) {
   err.textContent = 'Please complete all required fields with a valid work email.';
   err.classList.add('visible');
   return;
 }
 err.classList.remove('visible');
 
 userData = {
   first, last, email, org, sector: 'other',
   title: document.getElementById('f-title').value.trim(),
   size:  document.getElementById('f-size').value
 };
 buildResults();
 showScreen('screen-results');

 // ── GOOGLE SHEETS INTEGRATION ──
 const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyW3CvEDbjggQq7xAXxD4UHdge58CdTuceA_3SHi1cvPoCQdnBjM1PGrUeN3AHJh7VX/exec';
 const totalScore = calcScore();
 const submissionPayload = {
   date:       new Date().toLocaleDateString('en-GB'),
   firstName:  first,
   lastName:   last,
   email:      email,
   company:    org,
   totalScore: totalScore,
   ...Object.fromEntries(QUESTIONS.map((_, i) => [`q${i + 1}`, answers[i] || 0])),
 };

 fetch(APPS_SCRIPT_URL, {
   method: 'POST',
   mode: 'no-cors',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify(submissionPayload)
 }).catch(err => console.error('Sheet error:', err));

 fetch('/.netlify/functions/submit-diagnostic', {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify(submissionPayload)
 }).catch(() => {
   // Local static server will not have Netlify Functions; Google Sheets/local report still work.
 });
}
 
/* ═══════════════════════════════════════════════════
  SCORING
═══════════════════════════════════════════════════ */
function calcScore() {
 let total = 0;
 let max = 0;
 QUESTIONS.forEach((q, i) => {
   const s = answers[i] || 1;
   total += answerToPoints(s, q.weight);
   max += q.weight;
 });
 return Math.round((total / max) * 100);
}
 
function calcDimScores() {
 const dims = DIMENSIONS.map(() => ({ earned: 0, max: 0 }));
 QUESTIONS.forEach((q, i) => {
   const s = answers[i] || 1;
   dims[q.dimIndex].earned += answerToPoints(s, q.weight);
   dims[q.dimIndex].max    += q.weight;
 });
 return dims.map(d => ({ pct: Math.round((d.earned / d.max) * 100), max: d.max }));
}
 
function getLevel(score) {
 if (score >= 85) return {
   label: 'High Readiness', desc: 'Strong ESG data, governance, reporting, and AI readiness foundation.',
   cls: 'bg-green-pale', stroke: 'stroke-green', fill: 'fill-green'
 };
 if (score >= 65) return {
   label: 'Moderate Readiness', desc: 'Genuine development exists, but identifiable gaps remain across key readiness areas.',
   cls: 'bg-gold-pale', stroke: 'stroke-gold', fill: 'fill-gold'
 };
 if (score >= 40) return {
   label: 'Limited Readiness', desc: 'Foundational capabilities are developing, but material prerequisites remain weak.',
   cls: 'bg-orange-pale', stroke: 'stroke-orange', fill: 'fill-orange'
 };
 return {
   label: 'Critical Gaps', desc: 'Foundational prerequisites are absent; AI deployment would likely amplify errors.',
   cls: 'bg-red-pale', stroke: 'stroke-red', fill: 'fill-red'
 };
}
 
function getDimColor(pct) {
 if (pct >= 85) return '#0D7FBC';
 if (pct >= 65) return '#E9A97C';
 if (pct >= 40) return '#C05F3D';
 return '#c0392b';
}
 
/* ═══════════════════════════════════════════════════
  DIMENSION NARRATIVES
═══════════════════════════════════════════════════ */
const DIM_ICONS = [
 `<svg viewBox="0 0 20 20" fill="none"><rect x="2" y="5" width="16" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M6 9h8M6 12h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
 `<svg viewBox="0 0 20 20" fill="none"><path d="M5 3h10l2 3-7 11L3 6l2-3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M10 8v4M10 14v.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
 `<svg viewBox="0 0 20 20" fill="none"><path d="M3 15c4-1 4-9 9-10 2.5-.5 4 1 5 2-1 5-4 9-9 9-2 0-3.5-.4-5-1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M6 13c2-3 4.5-5 8-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
 `<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="3" stroke="currentColor" stroke-width="1.5"/><path d="M4 17c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
 `<svg viewBox="0 0 20 20" fill="none"><path d="M3 17l4-4 4 2 6-8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="16" cy="4" r="2" stroke="currentColor" stroke-width="1.5"/></svg>`
];
 
const DIM_NARRATIVES = [
 [
   "Your data and reporting infrastructure is highly manual. Start by inventorying ESG datapoints, owners, evidence, and reporting handoffs before adding more tools.",
   "You have useful data foundations, but controls and automation are still uneven. Focus on lineage, validation, and reducing manual reporting work.",
   "Your reporting infrastructure is becoming dependable. Strengthen audit trails, automate recurring reporting steps, and close evidence gaps before assurance pressure increases.",
   "Your data infrastructure is strong. The next advantage comes from continuous controls, system integrations, and real-time reporting intelligence."
 ],
 [
   "Compliance and risk ownership is underdeveloped. Map applicable ESRS, ISSB, GRI, internal, and AI-governance obligations before reporting deadlines become reactive work.",
   "You have started compliance preparation, but assurance controls and AI oversight need clearer ownership. Prioritize control testing and risk accountability.",
   "Compliance readiness is credible, with targeted gaps left to close. Formalize assurance evidence and AI model oversight so risk management scales with reporting complexity.",
   "Compliance and risk processes are mature. Keep governance current as standards evolve and use assurance evidence to support investor-grade disclosures."
 ],
 [
   "Environmental data is not yet decision-grade. Build the carbon inventory first, then expand into supplier, climate, water, biodiversity, and land-use analytics.",
   "Environmental measurement is underway but incomplete. Focus on Scope 3, supplier data, and a defensible methodology for environmental risk categories.",
   "Environmental impact management is developing well. Improve supplier integration, scenario analysis, and assurance evidence for the most material environmental risks.",
   "Environmental impact capabilities are advanced. Move toward predictive analytics, supplier collaboration, and board-ready environmental risk intelligence."
 ],
 [
   "Social and stakeholder intelligence is mostly reactive. Define core workforce, safety, diversity, grievance, controversy, and human-rights indicators with clear ownership.",
   "Social metrics exist, but reliability and stakeholder monitoring need structure. Standardize definitions and create a repeatable issue-escalation process.",
   "Social and stakeholder intelligence is useful but can be sharper. Connect sentiment, grievance, and workforce signals to risk review and management action.",
   "Social intelligence is strong. Use it proactively to detect emerging risks, improve stakeholder trust, and support transparent social disclosure."
 ],
 [
   "Governance and investment linkage is weak. Assign executive ownership and create a regular cadence for reviewing ESG and AI risks before using insights in decisions.",
   "Governance exists but is not yet embedded in investment or procurement decisions. Define decision rights, escalation routes, and leadership review rhythms.",
   "Governance is maturing. The next step is making ESG and AI insights standard inputs into capital allocation, procurement, and strategy decisions.",
   "Governance and investment integration is strong. Continue refining board-level insight, accountable ownership, and decision-use evidence."
 ]
];
 
const NEXT_STEPS_DB = {
 0: {
   low:  { action: "Create one ESG data inventory and evidence map", detail: "List every reported datapoint, owner, source system, evidence file, and reporting handoff. This makes integration and assurance work concrete." },
   mid:  { action: "Add lineage, validation, and version control", detail: "Turn the inventory into a controlled workflow with checks for completeness, calculation logic, approvals, and audit trail evidence." },
   high: { action: "Automate recurring reporting and control checks", detail: "Use system integrations and controlled workflows to reduce manual reporting work and make recurring assurance evidence easier to produce." }
 },
 1: {
   low:  { action: "Map obligations and risk owners", detail: "Create a crosswalk for ESRS, ISSB, GRI, internal policies, and AI governance expectations. Assign an owner for each material requirement." },
   mid:  { action: "Test sustainability reporting controls", detail: "Review approval gates, evidence standards, access rights, and change logs using the same discipline expected in financial reporting controls." },
   high: { action: "Formalize AI model oversight for ESG use cases", detail: "Define acceptable use, review cadence, risk scoring, and accountable owners for AI tools used in ESG analysis or disclosure support." }
 },
 2: {
   low:  { action: "Stabilize carbon accounting methodology", detail: "Document Scope 1, 2, and 3 boundaries, emission factors, assumptions, calculation owners, and evidence requirements." },
   mid:  { action: "Improve supplier and value-chain data coverage", detail: "Prioritize high-impact categories, request standardized data, and track supplier response quality, estimates, and verification status." },
   high: { action: "Build environmental risk analytics", detail: "Connect climate, water, biodiversity, and land-use indicators to scenarios, risk reviews, and mitigation decisions." }
 },
 3: {
   low:  { action: "Define core social and stakeholder metrics", detail: "Standardize workforce, safety, diversity, grievance, controversy, and human-rights indicators before expanding dashboard complexity." },
   mid:  { action: "Create a stakeholder issue escalation process", detail: "Set a repeatable workflow for capturing, classifying, escalating, and resolving stakeholder signals and controversies." },
   high: { action: "Use social signals as early risk indicators", detail: "Connect sentiment, grievance, and workforce metrics to management reviews so the data informs prevention, not just disclosure." }
 },
 4: {
   low:  { action: "Assign executive ESG and AI accountability", detail: "Name accountable leaders, decision rights, review cadence, and escalation paths for ESG performance and AI-enabled ESG workflows." },
   mid:  { action: "Embed ESG and AI insights into investment and procurement", detail: "Add material ESG and AI-risk indicators to capital allocation, supplier selection, and strategic planning templates." },
   high: { action: "Document decision-use evidence", detail: "Show how ESG and AI insights changed an investment, procurement, risk, or strategy decision. This proves the system is used, not just reported." }
 }
};
 
/* ═══════════════════════════════════════════════════
  RADAR CHART
═══════════════════════════════════════════════════ */
function buildRadar(dims) {
 const svg = document.getElementById('radar-svg');
 // Larger viewBox so labels never clip
 svg.setAttribute('viewBox','0 0 280 260');
 svg.setAttribute('width','280');
 svg.setAttribute('height','260');
 
 const cx = 140, cy = 122, r = 68;
 const n = 5;
 const labels = ['Data', 'Governance', 'Regulatory', 'Strategy', 'Technology'];
 const angleFor = i => (i * 2 * Math.PI / n) - Math.PI / 2;
 const point = (i, pct) => {
   const a = angleFor(i);
   const dist = (pct / 100) * r;
   return [cx + dist * Math.cos(a), cy + dist * Math.sin(a)];
 };
 
 let html = '';
 
 // Grid rings with subtle value labels at top axis
 [20,40,60,80,100].forEach(v => {
   const pts = Array.from({length:n}, (_,i) => point(i,v).join(',')).join(' ');
   html += `<polygon points="${pts}" fill="none" stroke="#dedbd2" stroke-width="1"/>`;
 });
 
 // Axes
 for (let i = 0; i < n; i++) {
   const [x,y] = point(i, 100);
   html += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#dedbd2" stroke-width="1"/>`;
 }
 
 
 
 // Score polygon
 const scorePts = Array.from({length:n}, (_,i) => point(i, dims[i].pct).join(',')).join(' ');
 html += `<polygon points="${scorePts}" fill="rgba(26,159,168,0.13)" stroke="url(#ring-grad)" stroke-width="2.5"/>`;
 
 // Score dots + pct labels placed OUTSIDE dot along the axis direction
 for (let i = 0; i < n; i++) {
   const pct = dims[i].pct;
   const [x,y] = point(i, pct);
   html += `<circle cx="${x}" cy="${y}" r="4.5" fill="url(#ring-grad)" stroke="white" stroke-width="2"/>`;
 
   // Place pct label 18px further along same axis direction, away from centre
   if (pct > 0) {
     const a = angleFor(i);
     const labelDist = Math.max((pct / 100) * r + 12, 28);
     const lx = cx + labelDist * Math.cos(a);
     const ly = cy + labelDist * Math.sin(a);
     // anchor: left side → end, right side → start, top/bottom → middle
     const anchor = Math.cos(a) < -0.3 ? 'end' : Math.cos(a) > 0.3 ? 'start' : 'middle';
     html += `<text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="${anchor}" dominant-baseline="middle"
       font-family="Montserrat,Avenir Next,Avenir,sans-serif" font-size="8.5" font-weight="700" fill="#004656">${pct}%</text>`;
   }
 }
 
 // Axis labels — placed far enough out to never overlap the pct values
 for (let i = 0; i < n; i++) {
   const a = angleFor(i);
   const labelR = r + 46;
   const lx = cx + labelR * Math.cos(a);
   const ly = cy + labelR * Math.sin(a);
   const anchor = Math.cos(a) < -0.3 ? 'end' : Math.cos(a) > 0.3 ? 'start' : 'middle';
   html += `<text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="${anchor}" dominant-baseline="middle"
     font-family="Montserrat,Avenir Next,Avenir,sans-serif" font-size="10.5" font-weight="600" fill="#7c8585">${labels[i]}</text>`;
 }
 
 
 
 svg.innerHTML = html;
}

function buildMaturityBandChart(score) {
 const el = document.getElementById('maturity-band-chart');
 if (!el) return;
 const level = getLevel(score);
 el.innerHTML = `
   <div class="next-steps-header">
     <span class="next-steps-title">Current Maturity: ${level.label}</span>
     <span style="font-size:12px;color:var(--ink-muted)">${score}/100</span>
   </div>
   <div class="band-meter">
     <div class="band-meter-track">
       <div class="band-meter-segment segment-critical"></div>
       <div class="band-meter-segment segment-limited"></div>
       <div class="band-meter-segment segment-moderate"></div>
       <div class="band-meter-segment segment-high"></div>
       <div class="band-meter-marker" style="left:${Math.max(0, Math.min(100, score))}%"></div>
     </div>
     <div class="band-meter-labels">
       <div class="band-meter-label" style="left:20%"><strong>Critical Gaps</strong>0-39</div>
       <div class="band-meter-label" style="left:52.5%"><strong>Limited</strong>40-64</div>
       <div class="band-meter-label" style="left:75%"><strong>Moderate</strong>65-84</div>
       <div class="band-meter-label" style="left:92.5%"><strong>High</strong>85-100</div>
     </div>
   </div>`;
}

function buildDimensionBarChart(dims) {
 const el = document.getElementById('dimension-bar-chart');
 if (!el) return;
 el.innerHTML = `
   <div class="next-steps-header">
     <span class="next-steps-title">Five-Dimension Score Profile</span>
     <span style="font-size:12px;color:var(--ink-muted)">Weighted diagnostic framework</span>
   </div>
   <div class="dimension-chart">
     ${DIMENSIONS.map((name, i) => {
       const pct = dims[i].pct;
       const col = getDimColor(pct);
       return `
       <div class="dimension-chart-row">
         <div class="dimension-chart-name">${name}</div>
         <div class="dimension-chart-track"><div class="dimension-chart-fill" style="background:${col}" data-width="${pct}"></div></div>
         <div class="dimension-chart-score" style="color:${col}">${pct}%</div>
       </div>`;
     }).join('')}
   </div>`;
 setTimeout(() => {
   document.querySelectorAll('.dimension-chart-fill').forEach(el => {
     el.style.width = el.dataset.width + '%';
   });
 }, 350);
}

function buildValueSnapshot(score, dims) {
 const el = document.getElementById('value-snapshot');
 if (!el) return;
 const weakest = dims.map((d, i) => ({ name: DIMENSIONS[i], pct: d.pct })).sort((a, b) => a.pct - b.pct)[0];
 const strongest = dims.map((d, i) => ({ name: DIMENSIONS[i], pct: d.pct })).sort((a, b) => b.pct - a.pct)[0];
 const audit = auditScore();
 const level = getLevel(score);
 el.innerHTML = `
   <div class="next-steps-header">
     <span class="next-steps-title">Dashboard Snapshot</span>
     <span style="font-size:12px;color:var(--ink-muted)">Full details are in the report download</span>
   </div>
   <div class="visual-kpi-grid">
     <div class="visual-kpi-card primary">
       <span>Overall</span>
       <strong>${score}</strong>
       <em>${level.label}</em>
       <div class="mini-meter"><i style="width:${score}%"></i></div>
     </div>
     <div class="visual-kpi-card">
       <span>Strongest Area</span>
       <strong>${strongest.pct}%</strong>
       <em>${strongest.name}</em>
       <div class="mini-meter"><i style="width:${strongest.pct}%"></i></div>
     </div>
     <div class="visual-kpi-card">
       <span>Lowest Area</span>
       <strong>${weakest.pct}%</strong>
       <em>${weakest.name}</em>
       <div class="mini-meter warm"><i style="width:${weakest.pct}%"></i></div>
     </div>
     <div class="visual-kpi-card">
       <span>Audit Readiness</span>
       <strong>${audit}</strong>
       <em>Evidence confidence</em>
       <div class="mini-meter"><i style="width:${audit}%"></i></div>
     </div>
   </div>`;
}

function getDimensionRankings(dims) {
 return dims.map((d, i) => ({ i, pct: d.pct, name: DIMENSIONS[i] }))
   .sort((a, b) => a.pct - b.pct);
}

function buildExecutiveSummary(score, dims) {
 const el = document.getElementById('executive-summary');
 if (!el) return;
 const level = getLevel(score);
 const ranked = getDimensionRankings(dims);
 const risks = ranked.slice(0, 2);
 const strengths = ranked.slice(-2).reverse();
 const primary = risks[0];
 const primaryStep = NEXT_STEPS_DB[primary.i][primary.pct < 65 ? 'low' : primary.pct < 85 ? 'mid' : 'high'];

 el.innerHTML = `
   <div class="summary-grid">
     <div class="summary-main">
       <div class="summary-kicker">Visual Readout</div>
       <h3>${level.label}: ${score}/100</h3>
       <div class="summary-score-bars">
         ${ranked.map(item => `<div>
           <span>${item.name}</span>
           <strong>${item.pct}%</strong>
           <i><b style="width:${item.pct}%;background:${getDimColor(item.pct)}"></b></i>
         </div>`).join('')}
       </div>
       <div class="summary-action">
         <span>Recommended next action</span>
         <strong>${primaryStep.action}</strong>
       </div>
     </div>
     <div class="summary-side">
       <div class="summary-list">
         <span class="summary-list-title">Top strengths</span>
         ${strengths.map(item => `<div class="summary-pill good"><strong>${item.pct}%</strong>${item.name}</div>`).join('')}
       </div>
       <div class="summary-list">
         <span class="summary-list-title">Main risks</span>
         ${risks.map(item => `<div class="summary-pill risk"><strong>${item.pct}%</strong>${item.name}</div>`).join('')}
       </div>
     </div>
   </div>`;
}

function buildPriorityMap(dims) {
 const el = document.getElementById('priority-map');
 if (!el) return;
 const ranked = getDimensionRankings(dims);
 const maxWeightByDim = DIMENSIONS.map((_, i) => QUESTIONS.filter(q => q.dimIndex === i).reduce((sum, q) => sum + q.weight, 0));
 const maxWeight = Math.max(...maxWeightByDim);
 const cards = ranked.map(item => {
   const importance = Math.round((maxWeightByDim[item.i] / maxWeight) * 100);
   const urgency = 100 - item.pct;
   const priority = Math.round((urgency * 0.65) + (importance * 0.35));
   const label = priority >= 70 ? 'Immediate focus' : priority >= 50 ? 'Next wave' : 'Maintain';
   const cls = priority >= 70 ? 'high' : priority >= 50 ? 'mid' : 'low';
   return `
     <div class="priority-card ${cls}">
       <div class="priority-card-top">
         <span>${label}</span>
         <strong>${priority}</strong>
       </div>
       <div class="priority-name">${item.name}</div>
       <div class="priority-bars">
         <div><span>Readiness</span><div><i style="width:${item.pct}%"></i></div></div>
         <div><span>Method weight</span><div><i style="width:${importance}%"></i></div></div>
       </div>
     </div>`;
 }).join('');
 el.innerHTML = `
   <div class="next-steps-header">
     <span class="next-steps-title">Risk vs. Readiness Priority Map</span>
     <span style="font-size:12px;color:var(--ink-muted)">Higher score means act sooner</span>
   </div>
   <div class="priority-grid">${cards}</div>`;
}

function buildRoadmapTimeline(dims) {
 const el = document.getElementById('roadmap-timeline');
 if (!el) return;
 const ranked = getDimensionRankings(dims);
 const first = ranked[0];
 const second = ranked[1];
 const third = ranked[2];
 const items = [
   { phase: 'Days 1-30', title: 'Validate the baseline', copy: `Review evidence for ${first.name}, confirm owners, and document where the self-assessment is unsupported.` },
   { phase: 'Days 31-60', title: 'Close control gaps', copy: `Build or tighten controls across ${first.name} and ${second.name}, including evidence, approvals, and escalation paths.` },
   { phase: 'Days 61-90', title: 'Turn insight into decisions', copy: `Use the improved data to create a leadership-ready roadmap for ${third.name}, procurement, investment, and AI-enabled ESG workflows.` }
 ];
 el.innerHTML = `
   <div class="timeline-grid">
     ${items.map((item, i) => `
       <div class="timeline-item">
         <div class="timeline-index">${i + 1}</div>
         <div class="timeline-phase">${item.phase}</div>
         <div class="timeline-title">${item.title}</div>
         <p>${item.copy}</p>
       </div>`).join('')}
   </div>`;
}

function buildMethodologySummary() {
 const el = document.getElementById('methodology-summary');
 if (!el) return;
 const rawMax = QUESTIONS.reduce((sum, q) => sum + q.weight, 0);
 const primary = QUESTIONS.filter(q => q.weight === 8).length;
 const supporting = QUESTIONS.length - primary;
 el.innerHTML = `
   <div class="method-summary-grid">
     <div class="method-stat"><strong>${QUESTIONS.length}</strong><span>Questions</span></div>
     <div class="method-stat"><strong>${DIMENSIONS.length}</strong><span>Dimensions</span></div>
     <div class="method-stat"><strong>${rawMax}</strong><span>Raw weighted points</span></div>
     <div class="method-stat"><strong>100</strong><span>Normalized score</span></div>
   </div>
   <div class="method-summary-copy">
     <p>The diagnostic uses ${primary} primary anchor KPIs at 8 points and ${supporting} supporting KPIs at 7 points. Each answer is scored as <strong>(answer / 5) x question weight</strong>, then normalized using <strong>(weighted total / ${rawMax}) x 100</strong>.</p>
     <a href="Mareva_Etiko_Methodology_Note.pdf" target="_blank" rel="noopener">View the scientific and methodology foundation note</a>
   </div>`;
}

const AUDIT_CONTROL_ITEMS = [
 { label: 'Evidence exists', min: 3 },
 { label: 'Owner assigned', min: 3 },
 { label: 'Control documented', min: 4 },
 { label: 'Review cadence defined', min: 4 },
 { label: 'Audit trail available', min: 5 }
];

const EVIDENCE_LIBRARY = {
 0: ['ESG data inventory', 'Source-system map', 'Datapoint owner register', 'Evidence folder index', 'Reporting workflow and version-control log'],
 1: ['Regulatory applicability matrix', 'Sustainability reporting control matrix', 'Assurance preparation plan', 'AI acceptable-use policy', 'Model and tool risk register'],
 2: ['Scope 1, 2, and 3 calculation files', 'Emission factor methodology', 'Supplier ESG data request template', 'Value-chain data quality log', 'Environmental risk register'],
 3: ['Workforce metric definitions', 'Safety and diversity source files', 'Grievance and controversy register', 'Human-rights monitoring process', 'Stakeholder escalation log'],
 4: ['ESG governance charter', 'Board or leadership ESG minutes', 'AI/ESG accountability matrix', 'Investment or procurement decision templates', 'Strategy review materials using ESG insights']
};

const AUDITOR_QUESTION_LIBRARY = {
 0: ['Where did this datapoint originate?', 'Who approved the value before reporting?', 'Can you show the source evidence and version history?'],
 1: ['Which standards apply to this disclosure?', 'What control prevents a material reporting error?', 'Who owns AI oversight for ESG analysis?'],
 2: ['How were Scope 3 estimates calculated?', 'Which supplier data is actual versus estimated?', 'How are environmental risks reviewed by management?'],
 3: ['Are workforce and safety definitions consistent across locations?', 'How are grievances escalated and resolved?', 'What human-rights signals are monitored?'],
 4: ['Which executive owns this readiness area?', 'How often does leadership review ESG and AI risk?', 'Where did ESG insight change an investment or procurement decision?']
};

const QUESTION_AUDIT_GUIDANCE = {
 1: { implication: 'Data aggregation may be difficult to reproduce across teams or periods.', evidence: 'System map, data owner list, collection calendar.', control: 'Create a controlled ESG data inventory with named owners and source systems.' },
 2: { implication: 'Reported values may lack traceability, validation, or evidence for assurance.', evidence: 'Lineage log, validation checks, evidence samples.', control: 'Define completeness and accuracy checks with retained reviewer evidence.' },
 3: { implication: 'Reporting may rely on manual copy-paste work without a stable audit trail.', evidence: 'Reporting workflow, change log, version history.', control: 'Introduce version control, approval gates, and automated audit trail retention.' },
 4: { implication: 'Disclosure obligations may be missed or assigned to the wrong owner.', evidence: 'ESRS/ISSB/GRI applicability matrix.', control: 'Map requirements to owners, datapoints, evidence, and reporting deadlines.' },
 5: { implication: 'Sustainability reporting controls may not withstand assurance review.', evidence: 'Control matrix, test results, exception log.', control: 'Design and test sustainability reporting controls before external assurance.' },
 6: { implication: 'AI outputs used in ESG work may be difficult to govern or defend.', evidence: 'AI use register, model risk owner, acceptable-use policy.', control: 'Assign AI oversight and document review rules for ESG-related AI outputs.' },
 7: { implication: 'Carbon reporting may be incomplete, inconsistent, or estimation-heavy.', evidence: 'Scope 1/2/3 files, emission factors, methodology memo.', control: 'Document boundaries, assumptions, emission factors, and calculation review.' },
 8: { implication: 'Supplier and value-chain disclosures may be unsupported or incomplete.', evidence: 'Supplier requests, response tracker, estimate methodology.', control: 'Standardize supplier data collection and flag actual versus estimated values.' },
 9: { implication: 'Environmental risks may not be connected to management review or mitigation.', evidence: 'Climate, water, biodiversity, and land-use risk register.', control: 'Create an environmental risk review cadence and escalation criteria.' },
 10: { implication: 'Social metrics may be inconsistent across HR, operations, or sites.', evidence: 'Metric definitions, source files, HR/safety reconciliation.', control: 'Standardize social metric definitions and retain reconciliation evidence.' },
 11: { implication: 'Stakeholder issues may be identified too late for risk mitigation.', evidence: 'Grievance log, controversy tracker, human-rights monitoring records.', control: 'Define issue intake, severity scoring, escalation, and closure evidence.' },
 12: { implication: 'Leadership accountability may be unclear during audit or board review.', evidence: 'Governance charter, committee minutes, accountability matrix.', control: 'Set executive cadence, decision rights, and board-level evidence retention.' },
 13: { implication: 'ESG and AI insights may be reported but not used in decisions.', evidence: 'Investment/procurement templates, decision logs, strategy materials.', control: 'Add ESG and AI-readiness criteria to procurement, investment, and strategy gates.' }
};

function auditScore() {
 const auditIds = [2, 3, 5, 6, 12];
 const auditQuestions = QUESTIONS.map((q, i) => ({ q, i })).filter(item => auditIds.includes(item.q.id));
 const raw = auditQuestions.reduce((sum, item) => sum + answerToPoints(answers[item.i] || 1, item.q.weight), 0);
 const max = auditQuestions.reduce((sum, item) => sum + item.q.weight, 0);
 return Math.round((raw / max) * 100);
}

function buildAuditReadiness(dims) {
 const el = document.getElementById('audit-readiness');
 if (!el) return;
 const score = auditScore();
 const label = score >= 85 ? 'Low assurance risk' : score >= 65 ? 'Moderate assurance risk' : score >= 40 ? 'High assurance risk' : 'Critical assurance risk';
 const circumference = 251.2;
 const offset = circumference - (circumference * score / 100);
 const rows = DIMENSIONS.map((name, i) => {
   const related = QUESTIONS.map((q, idx) => ({ q, idx })).filter(item => item.q.dimIndex === i);
   const avg = Math.round(related.reduce((sum, item) => sum + (answers[item.idx] || 1), 0) / related.length);
   const passed = AUDIT_CONTROL_ITEMS.filter(item => avg >= item.min);
   return `
     <div class="audit-visual-card">
       <div class="audit-visual-top">
         <span>${name}</span>
         <strong>${passed.length}/5</strong>
       </div>
       <div class="audit-dot-row">
         ${AUDIT_CONTROL_ITEMS.map(item => `<i class="${avg >= item.min ? 'ok' : 'gap'}"></i>`).join('')}
       </div>
       <em>${passed.length >= 4 ? 'Evidence-ready' : passed.length >= 2 ? 'Needs proof' : 'High review risk'}</em>
     </div>`;
 }).join('');
 el.innerHTML = `
   <div class="audit-visual-summary">
     <div>
       <svg class="audit-donut" viewBox="0 0 100 100" aria-hidden="true">
         <circle cx="50" cy="50" r="40"></circle>
         <circle cx="50" cy="50" r="40" style="stroke-dashoffset:${offset}"></circle>
       </svg>
       <strong>${score}</strong>
     </div>
     <section>
       <span class="audit-kicker">Audit readiness</span>
       <h4>${label}</h4>
       <p>Detailed evidence requests, reviewer questions, and control advice are included in the downloadable report card.</p>
     </section>
   </div>
   <div class="audit-visual-grid">${rows}</div>`;
}

function buildEvidenceRequests(dims) {
 const el = document.getElementById('evidence-requests');
 if (!el) return;
 const ranked = getDimensionRankings(dims).slice(0, 3);
 const docs = [...new Set(ranked.flatMap(item => EVIDENCE_LIBRARY[item.i]))].slice(0, 6);
 el.innerHTML = `
   <div class="next-steps-header">
     <span class="next-steps-title">Evidence Preview</span>
     <button class="mini-action-btn" onclick="downloadEvidenceChecklist()">Download CSV Checklist</button>
   </div>
   <div class="evidence-visual-grid">
     ${docs.map((doc, i) => `<div class="evidence-visual-item"><span>${String(i + 1).padStart(2, '0')}</span><strong>${doc}</strong></div>`).join('')}
   </div>`;
}

function getEvidenceChecklistRows() {
 const dims = calcDimScores();
 const ranked = getDimensionRankings(dims).slice(0, 3);
 return [...new Set(ranked.flatMap(item => EVIDENCE_LIBRARY[item.i]))].map((doc, i) => ({
   priority: i < 4 ? 'High' : i < 8 ? 'Medium' : 'Low',
   document: doc,
   owner: '',
   status: 'Not started',
   notes: ''
 }));
}

function downloadEvidenceChecklist() {
 const rows = getEvidenceChecklistRows();
 const header = ['Priority','Document','Owner','Status','Notes'];
 const escapeCsv = value => `"${String(value).replace(/"/g, '""')}"`;
 const csv = [header, ...rows.map(r => [r.priority, r.document, r.owner, r.status, r.notes])]
   .map(row => row.map(escapeCsv).join(','))
   .join('\n');
 const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
 const url = URL.createObjectURL(blob);
 const a = document.createElement('a');
 a.href = url;
 a.download = `Mareva-Etiko-Evidence-Checklist-${(userData.org || 'assessment').replace(/\s+/g, '-')}.csv`;
 document.body.appendChild(a);
 a.click();
 document.body.removeChild(a);
 URL.revokeObjectURL(url);
}

function buildControlGapDiagnosis(dims) {
 const el = document.getElementById('control-gap-diagnosis');
 if (!el) return;
 const weakQuestions = QUESTIONS.map((q, i) => ({ q, i, score: answers[i] || 1 }))
   .filter(item => item.score <= 3)
   .sort((a, b) => a.score - b.score || b.q.weight - a.q.weight)
   .slice(0, 5);
 const fallback = getDimensionRankings(dims).slice(0, 3).map(item => ({
   q: { dimension: item.name, focus: 'Dimension-level control maturity', weight: 0 },
   score: Math.round(item.pct / 20)
 }));
 const items = weakQuestions.length ? weakQuestions : fallback;
 el.innerHTML = `
   <div class="control-grid">
     ${items.map(item => {
       const issue = item.score <= 1 ? 'Process is likely undocumented or ad hoc.' : item.score === 2 ? 'Process exists but is siloed or inconsistently applied.' : 'Process is defined but may lack testing, evidence, or audit trail.';
       const control = item.score <= 2 ? 'Assign an owner, define the evidence source, and document the review control.' : 'Test the control, retain review evidence, and formalize escalation for exceptions.';
       return `<div class="control-card">
         <div class="control-top"><span>${item.q.dimension}</span><strong>${item.score}/5</strong></div>
         <h4>${item.q.focus}</h4>
         <div class="control-mini-meter"><i style="width:${item.score * 20}%"></i></div>
         <div>${item.score <= 3 ? 'Needs evidence and control testing' : control}</div>
       </div>`;
     }).join('')}
   </div>`;
}

function buildAuditorQuestions(dims) {
 const el = document.getElementById('auditor-questions');
 if (!el) return;
 const ranked = getDimensionRankings(dims).slice(0, 3);
 const questions = [...new Set(ranked.flatMap(item => AUDITOR_QUESTION_LIBRARY[item.i]))].slice(0, 6);
 el.innerHTML = `
   <div class="auditor-question-grid">
     ${questions.map(q => `<div class="auditor-question">${q}</div>`).join('')}
   </div>`;
}

function buildQuestionAuditRecommendations() {
 const el = document.getElementById('question-audit-recommendations');
 if (!el) return;
 const items = QUESTIONS.map((q, i) => ({ q, i, score: answers[i] || 1, guide: QUESTION_AUDIT_GUIDANCE[q.id] }))
   .sort((a, b) => a.score - b.score || b.q.weight - a.q.weight)
   .slice(0, 5);
 el.innerHTML = `
   <div class="question-audit-visual-list">
     ${items.map(item => `
       <div class="question-audit-row compact">
         <div class="question-audit-score">Q${item.q.id}<strong>${item.score}/5</strong></div>
         <div>
           <h4>${item.q.focus}</h4>
           <div class="question-audit-meter"><i style="width:${item.score * 20}%"></i></div>
           <p>${item.guide.evidence}</p>
         </div>
       </div>`).join('')}
   </div>`;
}

function buildAuditMethodology() {
 const el = document.getElementById('audit-methodology');
 if (!el) return;
 const auditIds = [2, 3, 5, 6, 12];
 const auditQuestions = auditIds.map(id => QUESTIONS.find(q => q.id === id)).filter(Boolean);
 el.innerHTML = `
   <div class="audit-method-visual">
     <div>
       <span>Selected controls</span>
       <strong>${auditQuestions.length}</strong>
     </div>
     <div>
       <span>Formula</span>
       <strong>(answer / 5) x weight</strong>
     </div>
     <div>
       <span>Normalized to</span>
       <strong>100</strong>
     </div>
   </div>`;
}

function buildDiagnosticExtensions(dims) {
 const el = document.getElementById('diagnostic-extensions');
 if (!el) return;
 const ranked = getDimensionRankings(dims);
 const recs = [
   { dim: 1, title: 'CSRD / ISSB Applicability Diagnostic', copy: 'Map reporting obligations, entity scope, disclosure requirements, and assurance timing.' },
   { dim: 2, title: 'Scope 3 Supplier Data Diagnostic', copy: 'Assess supplier data coverage, estimates, category risk, and value-chain evidence quality.' },
   { dim: 1, title: 'AI Governance Risk Diagnostic', copy: 'Review AI use cases, model oversight, acceptable-use rules, and ESG disclosure risk.' },
   { dim: 0, title: 'Internal Controls Maturity Diagnostic', copy: 'Test data lineage, review controls, audit trail retention, and evidence completeness.' },
   { dim: 4, title: 'Board Governance & Accountability Diagnostic', copy: 'Assess executive ownership, review cadence, decision rights, and board-level reporting.' },
   { dim: 3, title: 'Greenwashing & Stakeholder Risk Diagnostic', copy: 'Review claims, stakeholder signals, grievance processes, and reputational risk controls.' }
 ];
 const ordered = recs
   .map(rec => ({ ...rec, score: dims[rec.dim]?.pct ?? 100 }))
   .sort((a, b) => a.score - b.score)
   .slice(0, 4);
 el.innerHTML = `
   <div class="extension-grid">
     ${ordered.map((rec, i) => `<div class="extension-card">
       <div class="extension-rank">Recommended ${i + 1}</div>
       <h4>${rec.title}</h4>
       <p>${rec.copy}</p>
       <span>Triggered by: ${DIMENSIONS[rec.dim]} (${rec.score}% readiness)</span>
     </div>`).join('')}
   </div>`;
}
 
/* ═══════════════════════════════════════════════════
  BUILD RESULTS
═══════════════════════════════════════════════════ */
function buildResults() {
 const score = calcScore();
 const level = getLevel(score);
 const dims  = calcDimScores();
 
 // ── Header ──
 document.getElementById('r-name').textContent = `${userData.first} ${userData.last}`;
 document.getElementById('r-org').textContent  = userData.org + (userData.size ? ` · ${userData.size}` : '');
 document.getElementById('r-score').textContent = score;
 
 // ── Ring ──
 const ring = document.getElementById('score-ring-fill');
 ring.className = 'score-ring-fill';
 ring.style.stroke = 'url(#ring-grad)';
 const circumference = 2 * Math.PI * 65;
 setTimeout(() => { ring.style.strokeDashoffset = circumference * (1 - score / 100); }, 200);
 
 // ── Level badge ──
 const badge = document.getElementById('r-level-badge');
 badge.textContent = level.label;
 badge.className = `score-level-badge ${level.cls}`;
 document.getElementById('r-level-desc').textContent = level.desc;
 
 // ── Radar chart ──
 setTimeout(() => buildRadar(dims), 100);
 
 // ── Dimension narrative cards ──
 const dimBand = pct => pct >= 85 ? 3 : pct >= 65 ? 2 : pct >= 40 ? 1 : 0;
 const dimColors = ['#0D7FBC','#E9A97C','#C05F3D','#C05F3D'];
 const dimBgColors = ['#E8F5F7','#FFF2E6','#FBE8DA','#F9DED3'];
 const dimTextColors = ['#004656','#C05F3D','#C05F3D','#C05F3D'];
 
 const narrativesEl = document.getElementById('dim-narratives');
 narrativesEl.innerHTML = DIMENSIONS.map((name, i) => {
   const d = dims[i];
   const band = dimBand(d.pct);
   const col = dimColors[band];
   const bg  = dimBgColors[band];
   const tc  = dimTextColors[band];
   const narrative = DIM_NARRATIVES[i][band];
   return `
   <div class="dim-narrative-card">
     <div class="dim-narrative-icon" style="background:${bg}; color:${col}">${DIM_ICONS[i]}</div>
     <div class="dim-narrative-body">
       <div class="dim-narrative-name">${name}</div>
       <div class="dim-narrative-insight">${narrative}</div>
     </div>
     <div class="dim-narrative-score">
       <div class="dim-narrative-pct" style="color:${col}">${d.pct}%</div>
       <div class="dim-narrative-bar-wrap">
         <div class="dim-narrative-bar-track">
           <div class="dim-narrative-bar-fill" style="width:0%;background:${col}" data-width="${d.pct}"></div>
         </div>
       </div>
     </div>
   </div>`;
 }).join('');
 setTimeout(() => {
   document.querySelectorAll('.dim-narrative-bar-fill').forEach(el => {
     el.style.width = el.dataset.width + '%';
   });
 }, 350);
 
 // ── Score heatmap ──
 const DIM_COLORS_MAP = ['#004656','#004656','#2d9e5f','#E9A97C','#C05F3D'];
 const DIM_BG_MAP     = ['#E8F5F7','#E8F5F7','#EAF4EC','#FFF2E6','#FBE8DA'];
 const SCORE_LABELS   = ['','Critical','Weak','Developing','Strong','Excellent'];
 const scoreColor     = s => s >= 4 ? '#0D7FBC' : s === 3 ? '#E9A97C' : '#C05F3D';
 
 const heatmap = document.getElementById('heatmap-card');
 heatmap.innerHTML = `
   <div class="heatmap-header">
     <span class="heatmap-title">Question Score Heatmap</span>
     <div class="heatmap-legend">
       <div class="legend-item"><div class="legend-dot" style="background:#0D7FBC"></div>Strong (4–5)</div>
       <div class="legend-item"><div class="legend-dot" style="background:#E9A97C"></div>Developing (3)</div>
       <div class="legend-item"><div class="legend-dot" style="background:#C05F3D"></div>Weak (1–2)</div>
     </div>
   </div>
   ${QUESTIONS.map((q, i) => {
     const s = answers[i] || 0;
     const col = scoreColor(s);
     const dimCol = DIM_COLORS_MAP[q.dimIndex];
     const dimBg  = DIM_BG_MAP[q.dimIndex];
     const dots = Array.from({length:5}, (_,d) =>
       `<div class="heatmap-dot" style="background:${d < s ? col : 'var(--border)'}"></div>`
     ).join('');
     const shortText = q.text.length > 80 ? q.text.substring(0,78)+'…' : q.text;
     return `
     <div class="heatmap-row">
      <span class="heatmap-dim-tag" style="background:${dimBg};color:${dimCol}">${DIM_SHORT_LABELS[q.dimIndex]}</span>
       <span class="heatmap-q-text">${shortText}</span>
       <div class="heatmap-score-cell">
         <div class="heatmap-dots">${dots}</div>
         <span class="heatmap-score-label" style="color:${col}">${SCORE_LABELS[s]}</span>
       </div>
     </div>`;
   }).join('')}`;
 
 // ── Next steps — 3 lowest-scoring dimensions ──
 const dimsSorted = dims.map((d,i) => ({i, pct: d.pct})).sort((a,b) => a.pct - b.pct);
 const stepColors = ['#C05F3D','#C05F3D','#E9A97C'];
 
 const nextSteps = document.getElementById('next-steps-card');
 nextSteps.innerHTML = `
   <div class="next-steps-header">
     <span class="next-steps-title">Your Top 3 Priority Actions</span>
     <span style="font-size:12px;color:var(--ink-muted)">Based on lowest-scoring dimensions</span>
   </div>
   ${dimsSorted.slice(0,3).map((item, idx) => {
     const band = dimBand(item.pct);
     const stepKey = band <= 1 ? 'low' : band === 2 ? 'mid' : 'high';
     const step = NEXT_STEPS_DB[item.i][stepKey];
     const col = stepColors[idx];
     return `
     <div class="next-step-item">
       <div class="next-step-num" style="background:${col}">${idx+1}</div>
       <div class="next-step-content">
         <div class="next-step-label">${DIMENSIONS[item.i]} · ${item.pct}% readiness</div>
         <div class="next-step-action">${step.action}</div>
         <div class="next-step-detail">${step.detail}</div>
       </div>
     </div>`;
   }).join('')}`;
 
 // ── Top companies benchmark ──
 buildExecutiveSummary(score, dims);
 buildTopCompanies(dims, score);
 buildValueSnapshot(score, dims);
 buildPriorityMap(dims);
 buildMaturityBandChart(score);
 buildDimensionBarChart(dims);
 
 // ── Sector benchmarks ──
 buildSectorBenchmarks(dims, score);
 
 // ── Gap severity flags ──
 buildGapSeverity(dims);
 buildAuditReadiness(dims);
 buildEvidenceRequests(dims);
 buildControlGapDiagnosis(dims);
 buildQuestionAuditRecommendations();
 buildAuditorQuestions(dims);
 buildAuditMethodology();
 
 // ── Maturity roadmap ──
 buildMaturityRoadmap(score);
 buildRoadmapTimeline(dims);
 buildMethodologySummary();
 buildDiagnosticExtensions(dims);
 
 // ── Retake comparison ──
 checkRetakeHistory(score, dims);
 
 // ── Save current result for retake ──
 saveResultHistory(score, dims);
 
 // ── Trigger follow-up for lowest-scoring dim ──
 setTimeout(() => triggerFollowup(dimsSorted[0].i), 800);
}
 
/* ═══════════════════════════════════════════════════
  ILLUSTRATIVE BENCHMARKS
═══════════════════════════════════════════════════ */
const TOP_COMPANIES = [
 { name: "Leading ESG reporters", score: 92, note: "Illustrative range: 85-95" },
 { name: "Mature reporting teams", score: 78, note: "Illustrative range: 70-84" },
 { name: "Developing teams", score: 60, note: "Illustrative range: 50-69" },
 { name: "Spreadsheet-led teams", score: 38, note: "Illustrative range: under 50" }
];
 
function buildTopCompanies(dims, score) {
 const el = document.getElementById('top-companies-bar');
 if (!el) return;
 
 const cards = TOP_COMPANIES.map(co => {
   const isUser = false;
   const col = co.score >= 85 ? '#0D7FBC' : co.score >= 65 ? '#E9A97C' : co.score >= 40 ? '#C05F3D' : '#C05F3D';
   return `
   <div class="top-co-card">
     <div class="top-co-name">${co.name}</div>
     <div class="top-co-score" style="color:${col}">${co.score}</div>
     <div class="top-co-label">${co.note}</div>
     <div class="top-co-bar-track"><div class="top-co-bar-fill" style="width:0%" data-width="${co.score}"></div></div>
   </div>`;
 });
 
 // Add user's score card
 const userCol = getDimColor(score);
 cards.push(`
   <div class="top-co-card" style="border-color:${userCol};border-width:2px">
     <div class="top-co-name" style="color:${userCol}">Your Score</div>
     <div class="top-co-score" style="color:${userCol}">${score}</div>
     <div class="top-co-label">This assessment</div>
     <div class="top-co-bar-track"><div class="top-co-bar-fill" style="width:0%;background:${userCol}" data-width="${score}"></div></div>
   </div>`);
 
 el.innerHTML = `
   <div class="section-label" style="margin-top:0">Illustrative Benchmark Examples</div>
   <div style="font-size:12px;color:var(--ink-muted);margin-bottom:14px;line-height:1.55;">
     These categories are directional examples, not claims about named companies and not statistically validated population averages.
   </div>
   <div class="top-companies-grid">${cards.join('')}</div>`;
 
 setTimeout(() => {
   document.querySelectorAll('.top-co-bar-fill').forEach(el => {
     el.style.width = el.dataset.width + '%';
   });
 }, 400);
}
 
/* ═══════════════════════════════════════════════════
  SECTOR BENCHMARKS
═══════════════════════════════════════════════════ */
const SECTOR_BENCHMARKS = {
 financial:    { label: 'Financial Services', avg: [72,78,80,65,58] },
 manufacturing:{ label: 'Manufacturing',      avg: [55,60,62,50,42] },
 energy:       { label: 'Energy & Utilities', avg: [68,72,75,62,48] },
 retail:       { label: 'Retail',             avg: [50,55,58,48,40] },
 tech:         { label: 'Technology',         avg: [65,68,60,72,75] },
 real_estate:  { label: 'Real Estate',        avg: [48,52,55,45,38] },
 healthcare:   { label: 'Healthcare',         avg: [58,65,68,55,50] },
 professional: { label: 'Professional Services', avg: [62,68,65,60,55] },
 transport:    { label: 'Transport',          avg: [52,56,58,48,40] },
 other:        { label: 'Your Sector',        avg: [58,62,62,55,48] }
};
 
function buildSectorBenchmarks(dims, score) {
 const el = document.getElementById('sector-benchmarks');
 if (!el) return;
 const bench = SECTOR_BENCHMARKS[userData.sector] || SECTOR_BENCHMARKS.other;
 const overallBench = Math.round(bench.avg.reduce((a,b)=>a+b,0)/5);
 
 el.innerHTML = `
   <div class="next-steps-header">
     <span class="next-steps-title">Directional Benchmark Context</span>
     <span style="font-size:12px;color:var(--ink-muted)">Your profile vs. indicative baseline</span>
   </div>
   <div style="background:var(--bg);border-bottom:1px solid var(--border);padding:10px 20px;font-size:11.5px;color:var(--ink-muted);line-height:1.55;">
     <strong style="color:var(--ink-soft)">Methodology note:</strong> Benchmarks are directional baselines based on ESG maturity research and regulatory readiness indicators. They are included to help interpret the report card, not to imply validated sector averages.
   </div>
   <div style="padding:0 20px 4px">
     <div style="display:flex;justify-content:space-between;padding:14px 0;border-bottom:1px solid var(--border-soft);align-items:center">
       <span style="font-size:13px;font-weight:600;color:var(--ink)">Overall Score</span>
       <div style="display:flex;align-items:center;gap:16px">
         <span style="font-size:12px;color:var(--ink-muted)">Baseline: <strong>${overallBench}</strong></span>
         <span style="font-family:'Playfair Display',serif;font-size:22px;color:${score>=overallBench?'#0D7FBC':'#C05F3D'}">${score > overallBench ? '+' : ''}${score - overallBench}</span>
       </div>
     </div>
     ${DIMENSIONS.map((name, i) => {
       const yours = dims[i].pct;
       const avg = bench.avg[i];
       const diff = yours - avg;
       const col = diff >= 0 ? '#0D7FBC' : '#C05F3D';
       const barMax = 100;
       return `
       <div style="padding:12px 0;border-bottom:1px solid var(--border-soft)">
         <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px">
           <span style="font-size:12px;color:var(--ink-soft)">${name}</span>
           <div style="display:flex;align-items:center;gap:10px">
             <span style="font-size:11px;color:var(--ink-muted)">Baseline: ${avg}%</span>
             <span style="font-size:12px;font-weight:700;color:${col}">${diff>=0?'+':''}${diff}%</span>
           </div>
         </div>
         <div style="position:relative;height:6px;background:var(--border);border-radius:3px;overflow:hidden">
           <div style="position:absolute;left:0;top:0;height:100%;width:${avg}%;background:rgba(120,130,150,0.3);border-radius:3px;"></div>
           <div style="position:absolute;left:0;top:0;height:100%;width:${yours}%;background:${col};border-radius:3px;opacity:0.85;transition:width 1s ease"></div>
         </div>
       </div>`;
     }).join('')}
   </div>`;
}
 
/* ═══════════════════════════════════════════════════
  GAP SEVERITY FLAGS
═══════════════════════════════════════════════════ */
// CSRD scope: in-scope companies face highest regulatory risk on Regulatory + Data dims
const SECTOR_CSRD_RISK = {
 financial:'high', manufacturing:'high', energy:'high',
 retail:'medium', tech:'medium', real_estate:'high',
 healthcare:'medium', professional:'low', transport:'high', other:'medium'
};
 
function buildGapSeverity(dims) {
 const el = document.getElementById('gap-severity');
 if (!el) return;
 const csrdRisk = SECTOR_CSRD_RISK[userData.sector] || 'medium';
 
 const flags = [];
 dims.forEach((d, i) => {
   if (d.pct < 40) {
     const isRegRisk = (i === 2 || i === 0) && csrdRisk === 'high';
     flags.push({ dim: DIMENSIONS[i], pct: d.pct, severity: isRegRisk ? 'critical' : 'high', i });
   } else if (d.pct < 65) {
     flags.push({ dim: DIMENSIONS[i], pct: d.pct, severity: 'medium', i });
   }
 });
 
 if (!flags.length) {
   el.innerHTML = `<div style="padding:20px;font-size:14px;color:var(--ink-muted);text-align:center">No critical gaps identified. Focus on maintaining and improving your current readiness.</div>`;
   return;
 }
 
 const sevConfig = {
   critical: { label:'Critical — Immediate Action', bg:'#F9DED3', col:'#C05F3D', border:'#F3CFB5' },
   high:     { label:'High Risk', bg:'#FBE8DA', col:'#C05F3D', border:'#F3CFB5' },
   medium:   { label:'Moderate Gap', bg:'var(--gold-pale)', col:'#C05F3D', border:'#F3CFB5' }
 };
 
 const csrdNote = csrdRisk === 'high'
   ? `<div style="margin:0 20px 4px;background:var(--accent-pale);border:1px solid var(--accent-pale2);border-radius:var(--radius-sm);padding:14px 16px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start">
       <div style="width:36px;height:36px;background:var(--accent);border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
         <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2L2 14h14L9 2z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 8v3M9 13v.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>
       </div>
       <div>
         <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--accent);margin-bottom:3px">CSRD Regulatory Exposure</div>
         <div style="font-size:13px;color:var(--ink-soft);line-height:1.55">Based on your sector, your organisation is likely <strong style="color:var(--accent)">in scope for CSRD reporting</strong>. Gaps in Data & Reporting Infrastructure and Compliance & Risk carry direct audit and compliance risk — these should be treated as the highest priority.</div>
       </div>
     </div>` : csrdRisk === 'medium'
   ? `<div style="margin:0 20px 4px;background:var(--gold-pale);border:1px solid #F3CFB5;border-radius:var(--radius-sm);padding:14px 16px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start">
       <div style="width:36px;height:36px;background:var(--gold);border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
         <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="white" stroke-width="1.5"/><path d="M9 6v4M9 12v.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>
       </div>
       <div>
         <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#C05F3D;margin-bottom:3px">Moderate Regulatory Exposure</div>
         <div style="font-size:13px;color:var(--ink-soft);line-height:1.55">Your sector may be subject to ESG reporting requirements depending on organisation size and jurisdiction. Monitor CSRD and ISSB adoption in your region.</div>
       </div>
     </div>` : '';
 
 el.innerHTML = `
   <div class="next-steps-header">
     <span class="next-steps-title">Gap Severity Analysis</span>
     <span style="font-size:12px;color:var(--ink-muted)">${flags.length} gap${flags.length>1?'s':''} identified</span>
   </div>
   ${csrdNote}
   ${flags.sort((a,b)=>['critical','high','medium'].indexOf(a.severity)-['critical','high','medium'].indexOf(b.severity))
     .map(f => {
       const cfg = sevConfig[f.severity];
       return `
       <div style="padding:14px 20px;border-bottom:1px solid var(--border-soft);display:grid;grid-template-columns:auto 1fr;gap:14px;align-items:start">
         <div style="background:${cfg.bg};border:1px solid ${cfg.border};border-radius:6px;padding:4px 10px;font-size:10px;font-weight:700;letter-spacing:0.07em;text-transform:uppercase;color:${cfg.col};white-space:nowrap">${cfg.label}</div>
         <div>
           <div style="font-size:13px;font-weight:600;color:var(--ink);margin-bottom:2px">${f.dim}</div>
           <div style="font-size:12px;color:var(--ink-muted)">${f.pct}% readiness — ${f.severity === 'critical' ? 'This gap creates direct regulatory or audit exposure and requires immediate resolution.' : f.severity === 'high' ? 'This gap needs structured attention within 90 days to avoid compliance risk.' : 'This gap should be addressed in the next planning cycle.'}</div>
         </div>
       </div>`;
     }).join('')}`;
}
 
/* ═══════════════════════════════════════════════════
  MATURITY ROADMAP
═══════════════════════════════════════════════════ */
function buildMaturityRoadmap(score) {
 const el = document.getElementById('maturity-roadmap');
 if (!el) return;
 
 const stages = [
   { id:0, label:'Critical Gaps', range:'0–39', desc:'Establish basic data collection, assign ESG data ownership, and identify the reporting frameworks that apply.', min:0 },
   { id:1, label:'Limited Readiness', range:'40–64', desc:'Formalise governance, reduce spreadsheet reliance, and build consistent reporting processes.', min:40 },
   { id:2, label:'Moderate Readiness', range:'65–84', desc:'Connect ESG to strategy, close assurance gaps, and pilot AI tools with defined governance.', min:65 },
   { id:3, label:'High Readiness', range:'85–100', desc:'Scale AI-enabled ESG reporting, automate data flows, and maintain responsible AI oversight.', min:85 }
 ];
 
 const current = score < 40 ? 0 : score < 65 ? 1 : score < 85 ? 2 : 3;
 
 el.innerHTML = `
   <div class="next-steps-header">
     <span class="next-steps-title">ESG Maturity Roadmap</span>
     <span style="font-size:12px;color:var(--ink-muted)">You are at Stage ${current+1} of 4</span>
   </div>
     <div style="padding:20px">
     <div style="display:flex;align-items:center;gap:0;margin-bottom:24px;position:relative">
       <div style="position:absolute;top:14px;left:12.5%;right:12.5%;height:3px;background:var(--border);z-index:0"></div>
       <div style="position:absolute;top:14px;left:12.5%;height:3px;width:calc(75% * ${current / (stages.length - 1)});background:var(--grad);z-index:1;transition:width 1.2s ease;border-radius:2px"></div>
       ${stages.map((s,i) => {
         const done = i < current;
         const active = i === current;
         const bg = done ? 'var(--accent-mid)' : active ? 'var(--accent)' : 'var(--border)';
         const col = (done||active) ? '#fff' : 'var(--ink-muted)';
         return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:8px;z-index:2;position:relative">
           <div style="width:28px;height:28px;border-radius:50%;background:${bg};color:${col};display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;border:2px solid ${active?'var(--accent-mid)':'transparent'}">${done?'✓':i+1}</div>
           <span style="font-size:11px;font-weight:${active?'700':'500'};color:${active?'var(--accent)':'var(--ink-muted)'};text-align:center">${s.label}</span>
         </div>`;
       }).join('')}
     </div>
     <div style="background:var(--accent-pale);border:1px solid var(--accent-pale2);border-radius:var(--radius-sm);padding:14px 16px">
       <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--accent);margin-bottom:4px">Current Stage: ${stages[current].label} (${stages[current].range})</div>
       <div style="font-size:13px;color:var(--ink-soft);line-height:1.55">${stages[current].desc}</div>
       ${current < 3 ? `<div style="font-size:12px;color:var(--accent-mid);margin-top:8px;font-weight:600">Next milestone: reach ${stages[current+1].min} points to enter the ${stages[current+1].label} stage</div>` : ''}
     </div>
   </div>`;
}
 
/* ═══════════════════════════════════════════════════
  RETAKE / HISTORY
═══════════════════════════════════════════════════ */
function saveResultHistory(score, dims) {
 try {
   const history = JSON.parse(localStorage.getItem('me_esg_history') || '[]');
   history.push({
     date: new Date().toISOString(),
     score,
     dims: dims.map(d=>d.pct),
     answers: answers.slice(),
     org: userData.org
   });
   localStorage.setItem('me_esg_history', JSON.stringify(history.slice(-5)));
 } catch(e) {
   console.warn('localStorage not available — retake tracking disabled:', e);
 }
}
 
function checkRetakeHistory(score, dims) {
 try {
   const history = JSON.parse(localStorage.getItem('me_esg_history') || '[]');
   if (history.length < 1) return;
   const prev = history[history.length - 1];
   const banner = document.getElementById('retake-banner');
   const textEl = document.getElementById('retake-text');
   if (!banner || !textEl) return;
   const diff = score - prev.score;
   const prevDate = new Date(prev.date).toLocaleDateString('en-GB',{month:'short',year:'numeric'});
   const dimDiffs = dims.map((d, i) => ({
     name: DIMENSIONS[i],
     diff: d.pct - ((prev.dims && prev.dims[i]) || 0)
   })).sort((a, b) => Math.abs(b.diff) - Math.abs(a.diff));
   const answerDiffs = Array.isArray(prev.answers)
     ? answers.reduce((acc, val, i) => {
       const old = prev.answers[i];
       if (old == null || val == null) return acc;
       if (val > old) acc.improved++;
       else if (val < old) acc.declined++;
       else acc.same++;
       return acc;
     }, { improved: 0, declined: 0, same: 0 })
     : null;
   const biggest = dimDiffs[0];
   const answerText = answerDiffs
     ? ` ${answerDiffs.improved} question${answerDiffs.improved === 1 ? '' : 's'} improved, ${answerDiffs.declined} declined, and ${answerDiffs.same} stayed the same.`
     : '';
   textEl.innerHTML = `Compared with your last assessment (${prevDate}), your overall score has <strong style="color:${diff>=0?'#0D7FBC':'#C05F3D'}">${diff>=0?'changed by +'+diff:'changed by '+diff} points</strong> (${prev.score} → ${score}). Biggest dimension movement: <strong style="color:${biggest.diff>=0?'#0D7FBC':'#C05F3D'}">${biggest.name} ${biggest.diff>=0?'+':''}${biggest.diff}%</strong>.${answerText}`;
   banner.style.display = 'block';
 } catch(e) {}
}
 
/* ═══════════════════════════════════════════════════
  FOLLOW-UP QUESTIONS
═══════════════════════════════════════════════════ */
const FOLLOWUP_QUESTIONS = [
 { q: "What is the main barrier to improving your ESG reporting infrastructure?",
   sub: "This helps us tailor our audit recommendations to your specific situation.",
   opts: ["Data is spread across too many systems","Evidence and lineage are hard to prove","Reporting is too manual","No clear data owner","Limited budget or internal expertise"] },
 { q: "What is your biggest compliance or risk-control challenge?",
   sub: "Understanding your barrier helps us focus the audit on the right controls.",
   opts: ["Not sure which standards apply","Controls are not assurance-ready","AI oversight is unclear","Owners are spread across teams","Reporting deadlines are driving reactive work"] },
 { q: "What is the hardest environmental impact area to measure?",
   sub: "This helps us prioritize carbon, supplier, and environmental-risk recommendations.",
   opts: ["Scope 3 emissions","Supplier or value-chain data","Climate risk analytics","Water, biodiversity, or land use","Carbon accounting methodology"] },
 { q: "Where is your social and stakeholder intelligence weakest?",
   sub: "Your answer helps shape the social-risk and stakeholder recommendations.",
   opts: ["Workforce data reliability","Safety metrics","Diversity metrics","Grievance or controversy tracking","Human-rights monitoring"] },
 { q: "What prevents ESG and AI insights from influencing decisions?",
   sub: "This helps us identify how to embed readiness into governance, investment, procurement, and strategy.",
   opts: ["Limited executive cadence","Insights are not linked to investment decisions","Procurement does not use ESG data","AI risks are not owned","No clear decision-use evidence"] }
];
 
function triggerFollowup(dimIndex) {
 const fq = FOLLOWUP_QUESTIONS[dimIndex];
 if (!fq) return;
 const modal = document.getElementById('followup-modal');
 document.getElementById('followup-question').textContent = fq.q;
 document.getElementById('followup-sub').textContent = fq.sub;
 const optsEl = document.getElementById('followup-options');
 optsEl.innerHTML = fq.opts.map((o,i) => `
   <button onclick="selectFollowup(this,'${o.replace(/'/g,"\'")}')"
     style="text-align:left;padding:12px 16px;border:1.5px solid var(--border);border-radius:var(--radius-sm);background:var(--bg);font-family:'Montserrat','Avenir Next',Avenir,sans-serif;font-size:13px;color:var(--ink-soft);cursor:pointer;transition:border-color 0.15s,background 0.15s">
     ${o}
   </button>`).join('');
 modal.style.display = 'block';
}
 
function selectFollowup(btn, value) {
 followupAnswer = value;
 document.querySelectorAll('#followup-options button').forEach(b => {
   b.style.borderColor = 'var(--border)';
   b.style.background = 'var(--bg)';
   b.style.color = 'var(--ink-soft)';
 });
 btn.style.borderColor = 'var(--accent-mid)';
 btn.style.background = 'var(--accent-pale)';
 btn.style.color = 'var(--accent)';
 setTimeout(closeFollowup, 600);
}
 
function closeFollowup() {
 document.getElementById('followup-modal').style.display = 'none';
}

function openEmailCompose(subject, body) {
 const to = 'hello@marevaetiko.com';
 const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1'
   + '&to=' + encodeURIComponent(to)
   + '&su=' + encodeURIComponent(subject || '')
   + '&body=' + encodeURIComponent(body || '');
 const mailtoUrl = 'mailto:' + to
   + '?subject=' + encodeURIComponent(subject || '')
   + '&body=' + encodeURIComponent(body || '');
 const win = window.open(gmailUrl, '_blank', 'noopener');
 if (!win) window.location.href = mailtoUrl;
}
 
function sendDiscoveryEmail() {
 const name = (userData.first && userData.last) ? userData.first + ' ' + userData.last : '';
 const org  = userData.org || '';
 const score = document.getElementById('r-score')?.textContent || '';
 const body =
   'Hi Mareva Etiko,\n\nI have just completed the ESG × AI Readiness Diagnostic' +
   (score ? ' and scored ' + score + '/100' : '') +
   (org ? ' (' + org + ')' : '') +
   '.\n\nI would like to discuss the full audit and next steps.\n\nPlease get in touch.\n\nKind regards' +
   (name ? ',\n' + name : '');
 openEmailCompose('ESG × AI Readiness Audit Enquiry', body);
}
 
function sendEmail() {
 openEmailCompose('ESG × AI Readiness Diagnostic Enquiry', 'Hi Mareva Etiko,\n\nI would like to learn more about the ESG × AI Readiness Audit.\n\nKind regards');
}
 
/* ═══════════════════════════════════════════════════
  DOWNLOAD REPORT
═══════════════════════════════════════════════════ */
function downloadReport() {
 const score = document.getElementById('r-score').textContent;
 const name  = document.getElementById('r-name').textContent;
 const org   = document.getElementById('r-org').textContent;
 const level = document.getElementById('r-level-badge').textContent;
 const desc  = document.getElementById('r-level-desc').textContent;
 const date  = new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
 
 const dimRows = Array.from(document.querySelectorAll('.dim-narrative-card')).map(card => ({
   name:    card.querySelector('.dim-narrative-name')?.textContent || '',
   pct:     card.querySelector('.dim-narrative-pct')?.textContent || '',
   insight: card.querySelector('.dim-narrative-insight')?.textContent || ''
 }));
 
 const steps = Array.from(document.querySelectorAll('.next-step-item')).slice(0,3).map(el => ({
   label:  el.querySelector('.next-step-label')?.textContent || '',
   action: el.querySelector('.next-step-action')?.textContent || '',
   detail: el.querySelector('.next-step-detail')?.textContent || ''
 }));
 const dimRanked = dimRows.map(d => ({ ...d, num: parseInt(d.pct, 10) || 0 })).sort((a,b) => a.num - b.num);
 const reportRisks = dimRanked.slice(0,2);
 const reportStrengths = dimRanked.slice(-2).reverse();
 const primaryAction = steps[0]?.action || 'Validate the lowest-scoring readiness area and assign an accountable owner.';
 const executiveText = parseInt(score, 10) >= 85
   ? 'The assessment indicates a strong readiness base. The next priority is scaling evidence, assurance discipline, and AI governance across recurring ESG workflows.'
   : parseInt(score, 10) >= 65
   ? 'The assessment indicates meaningful readiness, with targeted gaps that should be closed before external assurance or AI-enabled reporting is expanded.'
   : parseInt(score, 10) >= 40
   ? 'The assessment indicates early readiness foundations, but material controls, evidence, or ownership gaps remain across the framework.'
   : 'The assessment indicates foundational readiness gaps. The organization should prioritize ownership, evidence, controls, and reliable reporting before scaling AI-enabled ESG work.';
 const reportAuditScore = auditScore();
 const reportAuditLabel = reportAuditScore >= 85 ? 'Low assurance risk' : reportAuditScore >= 65 ? 'Moderate assurance risk' : reportAuditScore >= 40 ? 'High assurance risk' : 'Critical assurance risk';
 const reportRankedDims = dimRows.map((d, i) => ({ ...d, i, num: parseInt(d.pct, 10) || 0 })).sort((a,b) => a.num - b.num);
 const reportEvidenceDocs = [...new Set(reportRankedDims.slice(0, 3).flatMap(item => EVIDENCE_LIBRARY[item.i]))].slice(0, 12);
 const reportAuditorQuestions = [...new Set(reportRankedDims.slice(0, 3).flatMap(item => AUDITOR_QUESTION_LIBRARY[item.i]))].slice(0, 9);
 const reportQuestionGuidance = QUESTIONS.map((q, i) => ({ q, score: answers[i] || 1, guide: QUESTION_AUDIT_GUIDANCE[q.id] }))
   .sort((a, b) => a.score - b.score || b.q.weight - a.q.weight)
   .slice(0, 7);
 const reportAllQuestionGuidance = QUESTIONS.map((q, i) => ({ q, score: answers[i] || 1, guide: QUESTION_AUDIT_GUIDANCE[q.id] }));
 const responseMeaning = s => s >= 5 ? 'Evidence-backed and repeatable' : s === 4 ? 'Mostly controlled, with proof still needed' : s === 3 ? 'Partially defined but not assurance-ready' : s === 2 ? 'Informal, inconsistent, or siloed' : 'Ad hoc or not yet established';
 const auditRisk = s => s >= 5 ? 'Low' : s === 4 ? 'Moderate-low' : s === 3 ? 'Moderate' : s === 2 ? 'High' : 'Critical';
 const maturityNarrative = pct => pct >= 85
   ? 'This area appears mature enough to support repeatable reporting and management review. The main next step is to retain stronger evidence and test whether the process works consistently over time.'
   : pct >= 65
   ? 'This area has a workable foundation, but it is not yet fully assurance-ready. The priority is closing control gaps, documenting owners, and reducing manual judgment.'
   : pct >= 40
   ? 'This area is developing but exposed. The organization should standardize definitions, assign accountability, and build a basic evidence trail before relying on it for external reporting.'
   : 'This area is a foundational gap. The organization should treat it as a remediation priority before expanding ESG reporting claims or AI-enabled analysis.';
 const dimensionDeepDiveRows = dimRows.map((d, i) => {
   const pct = parseInt(d.pct, 10) || 0;
   const related = QUESTIONS.map((q, idx) => ({ q, idx, score: answers[idx] || 1 })).filter(item => item.q.dimIndex === i);
   const weakestQuestion = related.slice().sort((a, b) => a.score - b.score || b.q.weight - a.q.weight)[0];
   const strongestQuestion = related.slice().sort((a, b) => b.score - a.score || b.q.weight - a.q.weight)[0];
   const docs = EVIDENCE_LIBRARY[i] || [];
   return `<div class="deep-dive-card">
     <div class="deep-dive-top">
       <div>
         <span>Dimension ${i + 1}</span>
         <h3>${d.name}</h3>
       </div>
       <strong>${d.pct}</strong>
     </div>
     <p>${maturityNarrative(pct)}</p>
     <div class="deep-dive-grid">
       <div><span>Strongest signal</span><strong>Q${strongestQuestion.q.id}: ${strongestQuestion.q.focus}</strong><em>${responseMeaning(strongestQuestion.score)}</em></div>
       <div><span>Weakest signal</span><strong>Q${weakestQuestion.q.id}: ${weakestQuestion.q.focus}</strong><em>${responseMeaning(weakestQuestion.score)}</em></div>
       <div><span>Audit risk</span><strong>${auditRisk(weakestQuestion.score)}</strong><em>Based on the weakest response in this dimension.</em></div>
     </div>
     <div class="deep-evidence">
       <span>Priority evidence to prepare</span>
       ${docs.slice(0, 4).map(doc => `<i>${doc}</i>`).join('')}
     </div>
   </div>`;
 }).join('');
 const remediationRows = reportRankedDims.map((d, rank) => {
   const related = QUESTIONS.map((q, idx) => ({ q, idx, score: answers[idx] || 1, guide: QUESTION_AUDIT_GUIDANCE[q.id] })).filter(item => item.q.dimIndex === d.i);
   const lowest = related.slice().sort((a, b) => a.score - b.score || b.q.weight - a.q.weight)[0];
   const phase = rank === 0 ? 'Days 1-30' : rank === 1 ? 'Days 31-60' : rank === 2 ? 'Days 61-90' : rank === 3 ? 'Next quarter' : 'Maintain';
   return `<tr>
     <td>${phase}</td>
     <td>${d.name}</td>
     <td>Q${lowest.q.id}: ${lowest.q.focus}</td>
     <td>${lowest.guide.control}</td>
     <td>${lowest.guide.evidence}</td>
   </tr>`;
 }).join('');
 const auditControlRows = reportAllQuestionGuidance.map(item => `<tr>
   <td>Q${item.q.id}</td>
   <td>${item.q.dimension}</td>
   <td>${item.score}/5</td>
   <td>${auditRisk(item.score)}</td>
   <td>${item.guide.implication}</td>
   <td>${item.guide.control}</td>
 </tr>`).join('');
 let previousReportBlock = `<div class="comparison-baseline">This appears to be the first saved assessment in this browser. Use this report as the baseline for future readiness comparisons.</div>`;
 try {
   const history = JSON.parse(localStorage.getItem('me_esg_history') || '[]');
   const currentScoreNum = parseInt(score, 10) || 0;
   const prior = history.length > 1 ? history[history.length - 2] : null;
   if (prior) {
     const diff = currentScoreNum - prior.score;
     const currentDims = dimRows.map(d => parseInt(d.pct, 10) || 0);
     const dimMoves = currentDims.map((pct, i) => ({
       name: DIMENSIONS[i],
       now: pct,
       before: (prior.dims && prior.dims[i]) || 0,
       diff: pct - ((prior.dims && prior.dims[i]) || 0)
     })).sort((a, b) => Math.abs(b.diff) - Math.abs(a.diff));
     const answerMoves = Array.isArray(prior.answers)
       ? answers.reduce((acc, val, i) => {
         const old = prior.answers[i];
         if (old == null || val == null) return acc;
         if (val > old) acc.improved++;
         else if (val < old) acc.declined++;
         else acc.same++;
         return acc;
       }, { improved: 0, declined: 0, same: 0 })
       : { improved: 0, declined: 0, same: 0 };
     previousReportBlock = `<div class="comparison-grid">
       <div class="comparison-card"><span>Previous score</span><strong>${prior.score}</strong><em>${new Date(prior.date).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}</em></div>
       <div class="comparison-card"><span>Current score</span><strong>${currentScoreNum}</strong><em>${date}</em></div>
       <div class="comparison-card ${diff >= 0 ? 'up' : 'down'}"><span>Score movement</span><strong>${diff >= 0 ? '+' : ''}${diff}</strong><em>${diff >= 0 ? 'Improved or stable trajectory' : 'Readiness declined'}</em></div>
       <div class="comparison-card"><span>Answer movement</span><strong>${answerMoves.improved}/${answerMoves.declined}</strong><em>Improved / declined questions</em></div>
     </div>
     <table class="matrix-table comparison-table">
       <thead><tr><th>Dimension</th><th>Previous</th><th>Current</th><th>Movement</th></tr></thead>
       <tbody>${dimMoves.map(d => `<tr><td>${d.name}</td><td>${d.before}%</td><td>${d.now}%</td><td>${d.diff >= 0 ? '+' : ''}${d.diff}%</td></tr>`).join('')}</tbody>
     </table>`;
   }
 } catch(e) {}
 const keyFindings = [
   `Overall readiness is <strong>${score}/100</strong>, placing the organization in the <strong>${level}</strong> band.`,
   `The strongest current dimension is <strong>${reportStrengths[0]?.name || 'not available'}</strong> at <strong>${reportStrengths[0]?.pct || 'n/a'}</strong>.`,
   `The weakest current dimension is <strong>${reportRisks[0]?.name || 'not available'}</strong> at <strong>${reportRisks[0]?.pct || 'n/a'}</strong>.`,
   `Audit readiness is <strong>${reportAuditScore}/100</strong>, classified as <strong>${reportAuditLabel}</strong>.`,
   `The first 30-day priority is: <strong>${primaryAction}</strong>`,
   `The highest-priority evidence category is <strong>${reportEvidenceDocs[0] || 'evidence register creation'}</strong>.`
 ].map(item => `<li>${item}</li>`).join('');
 const managementInterpretation = `<div class="management-grid">
   <div><h4>Reporting meaning</h4><p>${parseInt(score, 10) >= 65 ? 'The organization has enough structure to build a credible reporting improvement plan, but the report should still be supported by stronger evidence, documented controls, and source-system traceability.' : 'The organization should focus on foundational reporting discipline before increasing disclosure complexity. Manual workarounds, unclear definitions, and weak evidence may create disclosure risk.'}</p></div>
   <div><h4>Assurance meaning</h4><p>${reportAuditScore >= 65 ? 'Assurance preparation should focus on proving repeatability: retained evidence, review sign-offs, exception logs, and documented control ownership.' : 'The current profile suggests a high risk of assurance findings. Priority should be placed on source evidence, control testing, and ownership before external review.'}</p></div>
   <div><h4>AI adoption meaning</h4><p>${parseInt(score, 10) >= 75 ? 'AI can be piloted carefully where data lineage and human review are clear. Governance should still define approved use cases, review thresholds, and accountability.' : 'AI adoption should remain limited until ESG data quality, governance, and review controls improve. Otherwise AI may accelerate unreliable analysis.'}</p></div>
   <div><h4>Leadership meaning</h4><p>Leadership should assign owners to the weakest dimensions, review the evidence gap register, and use the remediation workplan as a management agenda for the next reporting cycle.</p></div>
 </div>`;
 const evidenceGapRows = reportEvidenceDocs.map((doc, i) => {
   const dim = reportRankedDims[i % reportRankedDims.length]?.name || 'Cross-functional';
   const risk = i < 4 ? 'High' : i < 8 ? 'Medium' : 'Low';
   const why = risk === 'High'
     ? 'This evidence is likely to be requested early because it supports the lowest-scoring readiness areas.'
     : risk === 'Medium'
     ? 'This evidence supports control maturity and helps reduce follow-up questions during review.'
     : 'This evidence strengthens completeness and management review discipline.';
   return `<tr><td>${doc}</td><td>${dim}</td><td>${why}</td><td>${risk}</td><td>Assign owner</td></tr>`;
 }).join('');
 const followOnDiagnostics = [
   { title: 'CSRD / ISSB Applicability Diagnostic', when: 'Run when reporting scope, applicable standards, or disclosure ownership is unclear.', why: 'Creates an obligation map that connects legal requirements to owners, datapoints, controls, and evidence.' },
   { title: 'Scope 3 Supplier Data Diagnostic', when: 'Run when supplier data is incomplete, estimated, or inconsistent across procurement and sustainability teams.', why: 'Separates actual supplier evidence from assumptions and identifies the categories that create the highest audit risk.' },
   { title: 'AI Governance Risk Diagnostic', when: 'Run before ESG teams use AI for drafting, analysis, screening, risk scoring, or disclosure support.', why: 'Defines approved AI use cases, human review rules, model-risk ownership, and disclosure safeguards.' },
   { title: 'Internal Controls Maturity Diagnostic', when: 'Run before assurance readiness testing or before implementing a reporting platform.', why: 'Tests whether ESG datapoints have lineage, review controls, exception handling, and retained approval evidence.' },
   { title: 'Board Governance & Accountability Diagnostic', when: 'Run when ownership is unclear or ESG/AI risks are not regularly reviewed by leadership.', why: 'Clarifies decision rights, escalation routes, board materials, and executive accountability cadence.' },
   { title: 'Greenwashing & Stakeholder Risk Diagnostic', when: 'Run before major disclosures, campaigns, sustainability claims, or public ESG commitments.', why: 'Checks whether claims, stakeholder signals, grievances, and controversies are supported by evidence and controls.' }
 ].map((item, i) => `<div class="follow-card"><span>Diagnostic ${i + 1}</span><h4>${item.title}</h4><p><strong>When to run:</strong> ${item.when}</p><p><strong>Why it matters:</strong> ${item.why}</p></div>`).join('');
 
 const levelColor = level.includes('High') ? '#004656' : level.includes('Moderate') ? '#C05F3D' : level.includes('Limited') ? '#C05F3D' : '#C05F3D';
 const levelBg    = level.includes('High') ? '#E8F5F7' : level.includes('Moderate') ? '#FFF2E6' : level.includes('Limited') ? '#FBE8DA' : '#F9DED3';
 const dimVisualRows = dimRows.map(d => {
   const pct = parseInt(d.pct, 10) || 0;
   const col = pct >= 85 ? '#0D7FBC' : pct >= 65 ? '#E9A97C' : pct >= 40 ? '#C05F3D' : '#C05F3D';
   return `<div class="viz-row">
     <div class="viz-label">${d.name}</div>
     <div class="viz-track"><div class="viz-fill" style="width:${pct}%;background:${col}"></div></div>
     <div class="viz-score" style="color:${col}">${pct}%</div>
   </div>`;
 }).join('');
 const bandMarker = Math.max(0, Math.min(100, parseInt(score, 10) || 0));
 const bandVisual = `<div class="band-viz">
   <div class="band-track-dl">
     <div style="width:40%;background:#F9DED3"></div>
     <div style="width:25%;background:#FBE8DA"></div>
     <div style="width:20%;background:#FFF2E6"></div>
     <div style="width:15%;background:#E8F5F7"></div>
     <span class="band-marker-dl" style="left:${bandMarker}%"></span>
   </div>
   <div class="band-labels-dl">
     <span>Critical<br>0-39</span><span>Limited<br>40-64</span><span>Moderate<br>65-84</span><span>High<br>85-100</span>
   </div>
 </div>`;
 
 const heatRows = QUESTIONS.map((q, i) => {
   const s = answers[i] || 0;
   const labels = ['','Critical','Weak','Developing','Strong','Excellent'];
   const col = s >= 4 ? '#0D7FBC' : s === 3 ? '#E9A97C' : '#C05F3D';
   const rowBg = i % 2 === 0 ? '#fff' : '#f5f7f8';
   return `<tr style="background:${rowBg}">
     <td style="padding:10px 14px;font-size:10px;font-weight:700;letter-spacing:0.07em;text-transform:uppercase;color:#004656;background:#E8F5F7;border-radius:4px;white-space:nowrap">${DIM_SHORT_LABELS[q.dimIndex]}</td>
     <td style="padding:10px 14px;font-size:12px;color:#405459;line-height:1.4">${q.text.substring(0,85)}…</td>
     <td style="padding:10px 14px;font-size:12px;font-weight:700;color:${col};text-align:center;white-space:nowrap">${labels[s]}</td>
     <td style="padding:10px 14px;font-size:11px;color:#7c8585;font-style:italic;line-height:1.45">${q.research}</td>
   </tr>`;
 }).join('');
 
 // Weight rows with v2 methodology rationale
 const weightData = QUESTIONS.map(q => ({
   q: `Q${q.id}`,
   dim: q.dimension,
   wt: q.weight,
   tier: q.tier,
   why: `${q.focus}. ${q.weight === 8 ? 'Primary anchor KPI because it carries the highest diagnostic importance inside its dimension.' : 'Supporting KPI because it adds necessary granularity while keeping the diagnostic concise.'}`,
   cite: q.research
 }));
 
 const tierColors = {
   'Primary KPI / Anchor':'#004656',
   'Secondary KPI / Supporting':'#C05F3D'
 };
 const tierBgs = {
   'Primary KPI / Anchor':'#e5f1f0',
   'Secondary KPI / Supporting':'#fbe9de'
 };
 
 const weightRows = weightData.map((w, i) => {
   const tc = tierColors[w.tier]; const tb = tierBgs[w.tier];
   const bg = i % 2 === 0 ? '#fff' : '#f5f7f8';
   const citeLines = w.cite.split('\n').map(l => `<div style="margin-bottom:3px">${l}</div>`).join('');
   return `<tr style="background:${bg}">
     <td style="padding:12px 14px;font-weight:700;color:#0D7FBC;font-size:14px;vertical-align:top">${w.q}</td>
     <td style="padding:12px 14px;vertical-align:top">
       <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:#7c8585;margin-bottom:3px;line-height:1.25">${w.dim}</div>
     </td>
     <td style="padding:12px 14px;text-align:center;vertical-align:top">
       <div style="font-size:22px;font-weight:700;color:#0D7FBC;line-height:1">${w.wt}</div>
     </td>
     <td style="padding:12px 14px;vertical-align:top">
       <span style="display:inline-block;background:${tb};color:${tc};font-size:10px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;padding:4px 8px;border-radius:4px;line-height:1.35">${w.tier}</span>
     </td>
     <td style="padding:12px 14px;font-size:12px;color:#405459;line-height:1.55;vertical-align:top">${w.why}</td>
     <td style="padding:12px 14px;font-size:11px;color:#7c8585;font-style:italic;line-height:1.5;vertical-align:top">${citeLines}</td>
   </tr>`;
 }).join('');
 const weightVisual = weightData.map(w => {
   const col = tierColors[w.tier];
   return `<div class="weight-chip">
     <div class="weight-chip-top"><strong>${w.q}</strong><span>${w.wt} pts</span></div>
     <div class="weight-chip-bar"><div style="width:${w.wt * 8}%;background:${col}"></div></div>
     <div class="weight-chip-dim">${w.dim}</div>
   </div>`;
 }).join('');
 
 const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ESG \u00d7 AI Readiness Full Report \u2014 ${name}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Montserrat:wght@300;400;500;600;700;800;700&display=swap" rel="stylesheet">
<style>
 *{box-sizing:border-box;margin:0;padding:0}
 body{font-family:'Montserrat','Avenir Next',Avenir,sans-serif;color:#102326;background:#fff;max-width:1280px;margin:0 auto}
 /* Cover */
 .cover{background:linear-gradient(135deg,#004656 0%,#0D7FBC 55%,#E9A97C 100%);padding:56px 72px 48px;color:#fff}
 .cover-brand{font-family:'Montserrat','Avenir Next',Avenir,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;opacity:0.75;margin-bottom:14px}
 .cover-title{font-family:'Playfair Display',serif;font-size:42px;line-height:1.1;margin-bottom:8px}
 .cover-sub{font-size:15px;opacity:0.8;margin-bottom:36px;line-height:1.5}
 .cover-meta{display:flex;gap:36px;flex-wrap:wrap;margin-bottom:32px}
 .cover-meta-item{font-size:12px;opacity:0.7}
 .cover-meta-item strong{display:block;font-size:15px;opacity:1;color:#fff;margin-bottom:2px;font-weight:600}
 .score-hero-dl{background:rgba(255,255,255,0.12);border-radius:14px;padding:22px 28px;display:flex;align-items:center;gap:28px}
 .score-big{font-family:'Playfair Display',serif;font-size:68px;color:#fff;line-height:1}
 .score-denom-dl{font-size:14px;opacity:0.7;margin-top:4px}
 .level-badge-dl{display:inline-block;padding:5px 14px;border-radius:20px;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;background:rgba(255,255,255,0.2);color:#fff;margin-bottom:8px}
 .level-desc-dl{font-size:13px;opacity:0.85;line-height:1.55;max-width:440px}
 /* Body */
 .body-wrap{padding:44px 72px}
 .report-section{page-break-inside:auto;margin-bottom:26px}
 .page-break{page-break-before:always}
 .section-hdr{font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#7c8585;margin:36px 0 14px;padding-top:28px;border-top:1px solid #dedbd2}
 .section-hdr:first-child{border-top:none;padding-top:0;margin-top:0}
 .body-text{font-size:13px;color:#405459;line-height:1.65;margin-bottom:12px}
 .toc{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin:16px 0 24px}
 .toc div{border:1px solid #dedbd2;border-radius:10px;padding:12px 14px;background:#fffdfa;font-size:12px;color:#405459}
 .toc span{display:inline-flex;width:24px;height:24px;border-radius:50%;align-items:center;justify-content:center;background:#E8F5F7;color:#004656;font-weight:800;margin-right:8px}
 .key-findings{background:#E8F5F7;border:1px solid #CFE8E7;border-radius:14px;padding:18px 22px;margin:14px 0}
 .key-findings li{font-size:13px;color:#405459;line-height:1.6;margin-left:18px;margin-bottom:6px}
 .disclaimer-box{background:#FBE8DA;border:1px solid #E9A97C;border-radius:12px;padding:14px 16px;margin:16px 0;font-size:12px;color:#405459;line-height:1.6}
 .management-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin:14px 0}
 .management-grid div{border:1px solid #dedbd2;border-radius:12px;background:#fffdfa;padding:15px}
 .management-grid h4{font-size:13px;color:#004656;margin-bottom:7px}
 .management-grid p{font-size:12px;color:#405459;line-height:1.6}
 .comparison-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:14px 0}
 .comparison-card{border:1px solid #dedbd2;border-radius:12px;background:#fffdfa;padding:14px}
 .comparison-card span{display:block;font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#7c8585;margin-bottom:6px}
 .comparison-card strong{display:block;font-family:'Playfair Display',serif;font-size:32px;line-height:1;color:#0D7FBC}
 .comparison-card.down strong{color:#C05F3D}.comparison-card.up strong{color:#004656}
 .comparison-card em{display:block;font-size:10px;color:#7c8585;font-style:normal;margin-top:5px;line-height:1.35}
 .comparison-baseline{background:#fffdfa;border:1px solid #dedbd2;border-radius:12px;padding:16px;font-size:12px;color:#405459;line-height:1.55}
 .comparison-table{margin-top:10px}
 .exec-grid{display:grid;grid-template-columns:1.3fr .9fr;gap:18px;margin:18px 0 6px}
 .exec-main{background:#E8F5F7;border:1px solid #CFE8E7;border-radius:14px;padding:22px}
 .exec-main h3{font-family:'Playfair Display',serif;font-size:24px;color:#004656;margin-bottom:8px}
 .exec-main p{font-size:13px;line-height:1.65;color:#405459;margin-bottom:14px}
 .exec-action{background:#fff;border:1px solid #dedbd2;border-radius:10px;padding:12px 14px;font-size:12px;color:#405459}
 .exec-action strong{display:block;color:#102326;font-size:14px;margin-top:3px}
 .exec-side{display:grid;gap:12px}
 .exec-box{border:1px solid #dedbd2;border-radius:12px;padding:14px;background:#fffdfa}
 .exec-box-title{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#7c8585;margin-bottom:8px}
 .exec-pill{display:flex;justify-content:space-between;gap:12px;font-size:12px;color:#405459;padding:7px 0;border-top:1px solid #ebe7dc}
 .exec-pill strong{color:#0D7FBC}
 .audit-export-grid{display:grid;grid-template-columns:260px 1fr;gap:18px;margin:16px 0}
 .audit-export-score{background:#E8F5F7;border:1px solid #CFE8E7;border-radius:14px;padding:18px}
 .audit-export-score span{display:block;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#004656;margin-bottom:6px}
 .audit-export-score strong{display:block;font-family:'Playfair Display',serif;font-size:42px;color:#004656;line-height:1}
 .audit-export-score p{font-size:12px;color:#405459;line-height:1.5;margin-top:8px}
 .audit-export-list{display:grid;grid-template-columns:1fr 1fr;gap:8px}
 .audit-export-list div{background:#fffdfa;border:1px solid #dedbd2;border-radius:9px;padding:10px;font-size:12px;color:#405459;line-height:1.45}
 .audit-export-list strong{display:block;color:#102326;margin-bottom:3px}
 .evidence-export{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px}
 .evidence-export div{border:1px solid #dedbd2;border-radius:9px;padding:10px;font-size:11px;color:#405459;background:#fffdfa}
 .q-audit-export{display:grid;gap:10px;margin-top:12px}
 .q-audit-export-row{display:grid;grid-template-columns:56px 1fr;gap:12px;border:1px solid #dedbd2;border-radius:10px;padding:12px;background:#fffdfa}
 .q-audit-export-score{font-weight:800;color:#C05F3D;text-align:center}
 .q-audit-export-score strong{display:block;font-family:'Playfair Display',serif;font-size:20px;line-height:1}
 .q-audit-export-row h4{font-size:13px;color:#102326;margin-bottom:5px}
 .q-audit-export-row p{font-size:11px;color:#405459;line-height:1.45;margin-bottom:4px}
 .report-note{background:#fffdfa;border:1px solid #dedbd2;border-left:4px solid #0D7FBC;border-radius:10px;padding:14px 16px;margin:14px 0;font-size:12px;color:#405459;line-height:1.6}
 .deep-dive-stack{display:grid;gap:14px;margin-top:12px}
 .deep-dive-card{border:1px solid #dedbd2;border-radius:14px;background:#fffdfa;padding:18px}
 .deep-dive-top{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;margin-bottom:10px}
 .deep-dive-top span{display:block;font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#7c8585;margin-bottom:4px}
 .deep-dive-top h3{font-family:'Playfair Display',serif;font-size:22px;line-height:1.15;color:#102326}
 .deep-dive-top strong{font-family:'Playfair Display',serif;font-size:34px;line-height:1;color:#0D7FBC}
 .deep-dive-card p{font-size:12px;color:#405459;line-height:1.65;margin-bottom:14px}
 .deep-dive-grid{display:grid;grid-template-columns:1fr 1fr 150px;gap:10px;margin-bottom:12px}
 .deep-dive-grid div{background:#f5f3ed;border:1px solid #ebe7dc;border-radius:10px;padding:11px}
 .deep-dive-grid span,.deep-evidence span{display:block;font-size:9px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#7c8585;margin-bottom:5px}
 .deep-dive-grid strong{display:block;font-size:12px;color:#102326;line-height:1.35;margin-bottom:5px}
 .deep-dive-grid em{display:block;font-size:11px;color:#405459;line-height:1.4;font-style:normal}
 .deep-evidence{display:flex;flex-wrap:wrap;gap:7px;align-items:center}
 .deep-evidence span{width:100%;margin-bottom:0}
 .deep-evidence i{display:inline-flex;background:#E8F5F7;border:1px solid #CFE8E7;border-radius:999px;padding:5px 9px;font-size:10px;color:#004656;font-style:normal;font-weight:700}
 .matrix-table td{padding:11px 12px;font-size:11px;color:#405459;line-height:1.45}
 .matrix-table td:first-child{font-weight:800;color:#0D7FBC;white-space:nowrap}
 .matrix-table td:nth-child(3),.matrix-table td:nth-child(4){font-weight:800;white-space:nowrap}
 .appendix-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:12px}
 .appendix-box{background:#fffdfa;border:1px solid #dedbd2;border-radius:12px;padding:14px}
 .appendix-box h4{font-size:13px;color:#102326;margin-bottom:8px}
 .appendix-box ul{margin-left:18px}
 .appendix-box li{font-size:11px;color:#405459;line-height:1.55;margin-bottom:5px}
 .follow-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:12px}
 .follow-card{border:1px solid #dedbd2;border-radius:12px;background:#fffdfa;padding:15px}
 .follow-card span{display:block;font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#0D7FBC;margin-bottom:6px}
 .follow-card h4{font-size:14px;color:#102326;margin-bottom:8px}
 .follow-card p{font-size:11px;color:#405459;line-height:1.55;margin-bottom:6px}
 .visual-panel{border:1px solid #dedbd2;border-radius:14px;background:#fffdfa;padding:20px;margin-bottom:18px}
 .visual-panel-title{font-family:'Playfair Display',serif;font-size:20px;color:#102326;margin-bottom:14px}
 .viz-row{display:grid;grid-template-columns:260px 1fr 56px;gap:16px;align-items:center;margin-bottom:11px}
 .viz-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#7c8585}
 .viz-track{height:10px;background:#dedbd2;border-radius:999px;overflow:hidden}
 .viz-fill{height:100%;border-radius:999px}
 .viz-score{font-size:12px;font-weight:800;text-align:right}
 .band-viz{margin-top:4px}
 .band-track-dl{height:16px;border-radius:999px;overflow:hidden;display:flex;position:relative;background:#dedbd2}
 .band-track-dl>div{height:100%}
 .band-marker-dl{position:absolute;top:-7px;width:2px;height:30px;background:#102326;border-radius:2px}
 .band-labels-dl{display:flex;justify-content:space-between;font-size:10px;color:#7c8585;text-align:center;line-height:1.3;margin-top:10px}
 .weight-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:18px}
 .weight-chip{border:1px solid #dedbd2;border-radius:10px;padding:10px;background:#fff}
 .weight-chip-top{display:flex;justify-content:space-between;font-size:11px;color:#102326;margin-bottom:7px}
 .weight-chip-bar{height:6px;background:#dedbd2;border-radius:999px;overflow:hidden;margin-bottom:7px}
 .weight-chip-bar div{height:100%;border-radius:999px}
 .weight-chip-dim{font-size:10px;color:#7c8585;text-transform:uppercase;letter-spacing:.04em;line-height:1.35}
 /* Dimension grid */
 .dim-grid-dl{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:8px}
 .dim-card-dl{border:1px solid #dedbd2;border-radius:12px;padding:18px;background:#fffdfa}
 .dim-card-top-dl{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px}
 .dim-name-dl{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:#7c8585}
 .dim-pct-dl{font-family:'Playfair Display',serif;font-size:26px;color:#0D7FBC}
 .dim-insight-dl{font-size:12px;color:#405459;line-height:1.55}
 /* Steps */
 .step-row-dl{display:grid;grid-template-columns:32px 1fr;gap:14px;padding:14px 0;border-bottom:1px solid #ebe7dc;align-items:start}
 .step-num-dl{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:#fff;flex-shrink:0}
 .step-label-dl{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#7c8585;margin-bottom:3px}
 .step-action-dl{font-size:13px;font-weight:700;color:#102326;margin-bottom:4px}
 .step-detail-dl{font-size:12px;color:#7c8585;line-height:1.55}
 /* Tables */
 table{width:100%;border-collapse:collapse}
 thead th{background:#0D7FBC;color:#fff;padding:10px 14px;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;text-align:left}
 tbody td{border-bottom:1px solid #ebe7dc;vertical-align:top}
 /* Method boxes */
 .method-box-dl{background:#E8F5F7;border:1px solid #CFE8E7;border-radius:12px;padding:18px 20px;margin-bottom:14px}
 .method-box-dl h3{font-family:'Playfair Display',serif;font-size:17px;color:#004656;margin-bottom:8px}
 .method-box-dl p{font-size:12px;color:#405459;line-height:1.6}
 /* Scoring bands */
 .band-row td{padding:12px 14px;font-size:12px;color:#405459;line-height:1.55;border-bottom:1px solid #ebe7dc}
 /* Works cited */
 .cite-row-dl{display:grid;grid-template-columns:240px 1fr;gap:20px;padding:12px 0;border-bottom:1px solid #ebe7dc}
 .cite-source-dl{font-size:11px;font-weight:700;color:#004656;line-height:1.4}
 .cite-detail-dl{font-size:12px;color:#405459;line-height:1.55}
 /* CTA */
 .cta-dl{background:linear-gradient(135deg,#E9A97C,#E9A97C,#C05F3D);padding:36px 72px;color:#fff;margin-top:0}
 .cta-dl h3{font-family:'Playfair Display',serif;font-size:26px;margin-bottom:8px;color:#fff}
 .cta-dl p{font-size:13px;opacity:0.9;line-height:1.6;margin-bottom:6px}
 .cta-dl a{color:#fff;font-weight:700}
 .doc-footer-dl{padding:18px 72px;border-top:1px solid #dedbd2;display:flex;justify-content:space-between;font-size:11px;color:#7c8585}
 @media print{body{max-width:none}.body-wrap{padding:34px 42px}.cover,.cta-dl,.doc-footer-dl{padding-left:42px;padding-right:42px}.dim-grid-dl{grid-template-columns:1fr 1fr}.weight-grid{grid-template-columns:repeat(3,1fr)}}
</style>
</head>
<body>
 
<!-- COVER -->
<div class="cover">
 <div class="cover-brand">Mareva Etiko &nbsp;&middot;&nbsp; ESG &times; AI Readiness Diagnostic</div>
 <div class="cover-title">Full Readiness Report</div>
 <div class="cover-sub">Detailed findings, dimension insights, methodology, citations, and recommended actions</div>
 <div class="cover-meta">
   <div class="cover-meta-item"><strong>${name}</strong>Respondent</div>
   <div class="cover-meta-item"><strong>${org}</strong>Organisation</div>
   <div class="cover-meta-item"><strong>${date}</strong>Assessment date</div>
   <div class="cover-meta-item"><strong>13 questions &nbsp;&middot;&nbsp; 5 dimensions</strong>Framework</div>
 </div>
 <div class="score-hero-dl">
   <div>
     <div class="score-big">${score}</div>
     <div class="score-denom-dl">out of 100</div>
   </div>
   <div>
     <div class="level-badge-dl">${level}</div>
     <div class="level-desc-dl">${desc}</div>
   </div>
 </div>
</div>
 
<div class="body-wrap">
 
<!-- ABOUT -->
<div class="report-section">
<div class="section-hdr">Table of Contents</div>
<div class="toc">
  <div><span>1</span>Executive Summary & Key Findings</div>
  <div><span>2</span>Score Profile & Maturity Band</div>
  <div><span>3</span>Audit Readiness & Evidence Gaps</div>
  <div><span>4</span>Question-Level Audit Matrix</div>
  <div><span>5</span>Dimension Deep Dive</div>
  <div><span>6</span>Remediation Workplan</div>
  <div><span>7</span>Methodology & Scoring</div>
  <div><span>8</span>Appendix & Follow-Up Diagnostics</div>
</div>

<div class="section-hdr">About This Report</div>
<p class="body-text">This report was generated by the Mareva Etiko ESG &times; AI Readiness Diagnostic &mdash; a research-backed assessment framework that measures organisational readiness across five dimensions: Data &amp; Reporting Infrastructure, Compliance &amp; Risk, Environmental Impact, Social &amp; Stakeholder Intelligence, and Governance &amp; Investment.</p>
<p class="body-text">Each of the thirteen questions maps to a documented ESG, sustainability reporting, or AI governance capability. The diagnostic uses 7- and 8-point weights across five dimensions for a raw maximum of 98 points, then normalizes the final result to a 100-point score.</p>
<p class="body-text"><strong>Scoring formula:</strong> Points per question = (respondent answer &divide; 5) &times; question weight. Final score = round((sum of weighted points &divide; 98) &times; 100). A respondent scoring 1 on every question receives 20, correctly indicating critical gaps rather than total absence of capability.</p>
<div class="disclaimer-box"><strong>Diagnostic disclaimer:</strong> This report is a self-assessment diagnostic. It is not a certification, assurance opinion, legal advice, regulatory filing review, or substitute for a formal audit. Findings should be validated through evidence review, stakeholder interviews, control testing, and documentation inspection before being relied on for external reporting or assurance.</div>

<div class="exec-grid">
  <div class="exec-main">
    <h3>Executive Summary</h3>
    <p>${executiveText}</p>
    <div class="exec-action">Recommended next action<strong>${primaryAction}</strong></div>
  </div>
  <div class="exec-side">
    <div class="exec-box">
      <div class="exec-box-title">Top strengths</div>
      ${reportStrengths.map(d => `<div class="exec-pill"><span>${d.name}</span><strong>${d.pct}</strong></div>`).join('')}
    </div>
    <div class="exec-box">
      <div class="exec-box-title">Main risks</div>
      ${reportRisks.map(d => `<div class="exec-pill"><span>${d.name}</span><strong style="color:#C05F3D">${d.pct}</strong></div>`).join('')}
    </div>
  </div>
</div>

<div class="section-hdr">Key Findings</div>
<ul class="key-findings">${keyFindings}</ul>

<div class="section-hdr">Management Interpretation</div>
${managementInterpretation}
</div>

<!-- VISUAL SUMMARY -->
<div class="report-section page-break">
<div class="section-hdr">Visual Score Summary</div>
<div class="visual-panel">
  <div class="visual-panel-title">Maturity Band Position</div>
  ${bandVisual}
</div>
<div class="visual-panel">
  <div class="visual-panel-title">Dimension Score Profile</div>
  ${dimVisualRows}
</div>

<div class="section-hdr">Previous Assessment Comparison</div>
${previousReportBlock}
</div>

<!-- AUDIT READINESS -->
<div class="report-section page-break">
<div class="section-hdr">Audit Readiness Preview</div>
<div class="audit-export-grid">
  <div class="audit-export-score">
    <span>Audit readiness score</span>
    <strong>${reportAuditScore}/100</strong>
    <p>${reportAuditLabel}. This score emphasizes data lineage, audit trail, internal controls, AI governance, and executive accountability.</p>
  </div>
  <div class="audit-export-list">
    ${reportAuditorQuestions.slice(0, 6).map((q, i) => `<div><strong>Auditor question ${i + 1}</strong>${q}</div>`).join('')}
  </div>
</div>
<p class="body-text"><strong>Priority evidence requests:</strong></p>
<div class="evidence-export">
  ${reportEvidenceDocs.map(doc => `<div>${doc}</div>`).join('')}
</div>

<div class="section-hdr">Evidence Gap Register</div>
<p class="body-text">The evidence gap register converts likely document requests into an audit-preparation tracker. Owners and status fields are intentionally left as management actions because the diagnostic cannot verify internal responsibility from survey answers alone.</p>
<table class="matrix-table">
 <thead><tr><th>Evidence Item</th><th>Linked Area</th><th>Why It Matters</th><th>Risk</th><th>Status</th></tr></thead>
 <tbody>${evidenceGapRows}</tbody>
</table>

<p class="body-text" style="margin-top:18px"><strong>Question-level audit priorities:</strong></p>
<div class="q-audit-export">
  ${reportQuestionGuidance.map(item => `<div class="q-audit-export-row">
    <div class="q-audit-export-score">Q${item.q.id}<strong>${item.score}/5</strong></div>
    <div>
      <h4>${item.q.focus}</h4>
      <p><strong>Implication:</strong> ${item.guide.implication}</p>
      <p><strong>Evidence:</strong> ${item.guide.evidence}</p>
      <p><strong>Control:</strong> ${item.guide.control}</p>
    </div>
  </div>`).join('')}
</div>

<div class="report-note">
  <strong>Why question-level audit recommendations matter:</strong> the diagnostic score tells you where the organization is mature or exposed, but an auditor or assurance reviewer will ask for proof at the datapoint and control level. These recommendations convert each survey answer into three practical audit outputs: the likely risk implication, the evidence to prepare, and the control improvement that would make the answer easier to defend.
</div>

<!-- FULL AUDIT MATRIX -->
<div class="section-hdr">Full Question-Level Audit Matrix</div>
<p class="body-text">This matrix expands the website’s short audit preview. It shows every diagnostic question, the self-reported maturity score, the likely audit risk, the implication of that response, and the control action that should be prioritized before external assurance, investor review, or AI-enabled ESG reporting.</p>
<table class="matrix-table">
 <thead><tr><th>Q</th><th>Dimension</th><th>Score</th><th>Risk</th><th>Audit Implication</th><th>Control Recommendation</th></tr></thead>
 <tbody>${auditControlRows}</tbody>
</table>
</div>
 
<!-- DIMENSIONS -->
<div class="report-section page-break">
<div class="section-hdr">Readiness by Dimension</div>
<div class="dim-grid-dl">
 ${dimRows.map(d => `
 <div class="dim-card-dl">
   <div class="dim-card-top-dl">
     <div class="dim-name-dl">${d.name}</div>
     <div class="dim-pct-dl">${d.pct}</div>
   </div>
   <div class="dim-insight-dl">${d.insight}</div>
 </div>`).join('')}
</div>

<!-- DIMENSION DEEP DIVE -->
<div class="section-hdr">Dimension-by-Dimension Interpretation</div>
<p class="body-text">The dashboard shows the score profile visually. This section interprets what each dimension means operationally, identifies the strongest and weakest signal inside that dimension, and lists the first evidence items that would typically be requested in a deeper audit.</p>
<div class="deep-dive-stack">
  ${dimensionDeepDiveRows}
</div>

<!-- REMEDIATION PLAN -->
<div class="section-hdr">Remediation Workplan</div>
<p class="body-text">This workplan turns the score into a practical sequence. The earliest phases focus on the lowest-scoring dimensions because weak foundations usually create the largest reporting, assurance, and AI-governance risk.</p>
<table class="matrix-table">
 <thead><tr><th>Phase</th><th>Focus Area</th><th>Primary Finding</th><th>Control Action</th><th>Evidence to Prepare</th></tr></thead>
 <tbody>${remediationRows}</tbody>
</table>
</div>
 
<!-- QUESTION BREAKDOWN -->
<div class="report-section page-break">
<div class="section-hdr">Question-Level Breakdown with Research Citations</div>
<table>
 <thead><tr><th>Dimension</th><th>Question</th><th>Response</th><th>Research Basis</th></tr></thead>
 <tbody>${heatRows}</tbody>
</table>
 
<!-- NEXT STEPS -->
<div class="section-hdr">Top 3 Recommended Actions</div>
${steps.map((s,i) => {
 const cols = ['#C05F3D','#C05F3D','#E9A97C'];
 return `<div class="step-row-dl">
   <div class="step-num-dl" style="background:${cols[i]}">${i+1}</div>
   <div>
     <div class="step-label-dl">${s.label}</div>
     <div class="step-action-dl">${s.action}</div>
     <div class="step-detail-dl">${s.detail}</div>
   </div>
 </div>`;
}).join('')}
 
<!-- SCORING INTERPRETATION -->
<div class="section-hdr">Scoring Interpretation</div>
<p class="body-text">Each score band reflects overall organisational readiness across the weighted framework. The model gives slightly higher influence to foundational controls that enable the rest of the ESG and AI readiness system to function.</p>
<table class="band-row">
 <thead><tr><th style="width:80px">Score</th><th style="width:180px">Level</th><th>Meaning</th></tr></thead>
 <tbody>
   <tr style="background:#E8F5F7"><td style="padding:12px 14px;font-weight:700;color:#004656;font-size:15px">85&ndash;100</td><td style="padding:12px 14px;font-weight:700;color:#004656">High Readiness</td><td style="padding:12px 14px;font-size:12px;color:#405459">Strong ESG data, governance, reporting, and AI readiness foundation. This band requires an average response of at least 4.25 out of 5.</td></tr>
   <tr style="background:#FFF2E6"><td style="padding:12px 14px;font-weight:700;color:#C05F3D;font-size:15px">65&ndash;84</td><td style="padding:12px 14px;font-weight:700;color:#C05F3D">Moderate Readiness</td><td style="padding:12px 14px;font-size:12px;color:#405459">Genuine development exists, but identifiable gaps remain across one or more readiness areas.</td></tr>
   <tr style="background:#FBE8DA"><td style="padding:12px 14px;font-weight:700;color:#C05F3D;font-size:15px">40&ndash;64</td><td style="padding:12px 14px;font-weight:700;color:#C05F3D">Limited Readiness</td><td style="padding:12px 14px;font-size:12px;color:#405459">Foundational capabilities are developing, but material prerequisites remain weak.</td></tr>
   <tr style="background:#F9DED3"><td style="padding:12px 14px;font-weight:700;color:#C05F3D;font-size:15px">0&ndash;39</td><td style="padding:12px 14px;font-weight:700;color:#C05F3D">Critical Gaps</td><td style="padding:12px 14px;font-size:12px;color:#405459">Foundational prerequisites are absent and AI deployment would likely amplify errors rather than improve performance.</td></tr>
 </tbody>
</table>
</div>
 
<!-- METHODOLOGY -->
<div class="report-section page-break">
<div class="section-hdr">Framework Methodology</div>
<div class="method-box-dl">
 <h3>Why this framework was built</h3>
 <p>This diagnostic was designed as a readiness diagnostic, not a generic ESG quiz. Each question tests a capability from the v2 methodology: reporting infrastructure, compliance controls, environmental impact data, social intelligence, governance cadence, and the use of ESG and AI insight in decisions.</p>
</div>
<div class="method-box-dl">
 <h3>Weighting rationale</h3>
 <p>The framework uses 13 questions with 7- and 8-point weights. Primary anchor KPIs receive 8 points and supporting KPIs receive 7 points. The raw maximum is 98 points and the final score is normalized to 100 so the maturity bands remain simple to interpret.</p>
</div>

<div class="section-hdr">Recommended Follow-Up Diagnostics</div>
<p class="body-text">The website shows the follow-up diagnostics briefly. This report expands them into decision-use guidance: when to run each diagnostic and what additional clarity it should produce.</p>
<div class="follow-grid">${followOnDiagnostics}</div>

<div class="section-hdr">How to Use This Report</div>
<div class="appendix-grid">
  <div class="appendix-box">
    <h4>For leadership review</h4>
    <ul>
      <li>Use the maturity band and dimension profile to decide whether ESG reporting is ready for external scrutiny.</li>
      <li>Assign executive owners to the lowest-scoring dimensions before expanding AI-enabled ESG workflows.</li>
      <li>Review whether ESG and AI insights are influencing procurement, investment, risk, and strategy decisions.</li>
    </ul>
  </div>
  <div class="appendix-box">
    <h4>For audit preparation</h4>
    <ul>
      <li>Start with the Full Question-Level Audit Matrix and collect the listed evidence for each low-scoring item.</li>
      <li>Use the remediation workplan to document owners, review cadence, control tests, and unresolved exceptions.</li>
      <li>Treat self-reported 4s and 5s as claims that still need retained evidence and an audit trail.</li>
    </ul>
  </div>
  <div class="appendix-box">
    <h4>For ESG data teams</h4>
    <ul>
      <li>Use the evidence list to build a shared folder structure for source files, calculations, approvals, and version history.</li>
      <li>Standardize definitions for metrics that come from multiple systems, teams, geographies, or suppliers.</li>
      <li>Document which values are actual, estimated, manually adjusted, or AI-assisted.</li>
    </ul>
  </div>
  <div class="appendix-box">
    <h4>For AI readiness</h4>
    <ul>
      <li>Do not use AI outputs for ESG reporting unless data lineage, review controls, and accountability are clear.</li>
      <li>Create an AI use register for ESG analysis, reporting drafts, supplier screening, and risk monitoring.</li>
      <li>Define human review rules before AI-generated ESG insights influence external disclosures or management decisions.</li>
    </ul>
  </div>
</div>
</div>
 
<!-- FULL WEIGHT TABLE WITH REASONING -->
<div class="report-section page-break">
<div class="section-hdr">Question Weights, Reasoning &amp; Citations</div>
<p class="body-text" style="margin-bottom:16px">Questions are listed in diagnostic order. Each row shows the dimension, KPI focus, weight, tier, and source basis used in the v2 methodology.</p>
<div class="weight-grid">${weightVisual}</div>
<table>
 <thead><tr><th style="width:52px">Q</th><th style="width:210px">Dimension</th><th style="width:58px">Wt</th><th style="width:132px">Tier</th><th>Why This Weight</th><th style="width:280px">Citations</th></tr></thead>
 <tbody>${weightRows}</tbody>
</table>
</div>
 
<!-- WORKS CITED -->
<div class="report-section page-break">
<div class="section-hdr">Works Cited</div>
${[
 ['IFRS Foundation / ISSB','IFRS S1 General Requirements for Disclosure of Sustainability-related Financial Information and IFRS S2 Climate-related Disclosures. International Sustainability Standards Board, June 2023. Effective for annual periods beginning 1 January 2024. https://www.ifrs.org/issued-standards/ifrs-sustainability-disclosure-standards/'],
 ['EFRAG','European Sustainability Reporting Standards (ESRS) and Corporate Sustainability Reporting Directive (CSRD). European Financial Reporting Advisory Group, 2023&ndash;2025. Simplified ESRS draft published December 2025. https://www.efrag.org'],
 ['EFRAG','ESRS Implementation Guidance IG 2: Value Chain. European Financial Reporting Advisory Group, May 2024.'],
 ['KPMG Netherlands','Data Governance: The Key to Reliable ESG Data. KPMG Netherlands, January 2026. https://kpmg.com/nl/en/home/insights/2026/01/data-governance-the-key-to-reliable-esg-data.html'],
 ['KPMG','2024 Sustainability Organisation Survey. KPMG International, 2024.'],
 ['PwC','ESG Data Quality Under the Microscope: What Auditors Want to See. PricewaterhouseCoopers, February 2026.'],
 ['PwC','ESG Data Collection &amp; Reporting. PricewaterhouseCoopers, 2024.'],
 ['PwC','How Internal Controls Can Help Transform Sustainability Reporting. PricewaterhouseCoopers, 2025.'],
 ['EDM Council','Playbook for Effective ESG and Sustainability Data Management. EDM Council, April 2024. https://edmcouncil.org/wp-content/uploads/2024/04/EDM-Council_Playbook_ESG-and-Sustainability-Data-Mgmt_April-2024.pdf'],
 ['Harvard Law School Forum','Inside IFRS S1 and S2. Harvard Law School Forum on Corporate Governance, August 2023. https://corpgov.law.harvard.edu'],
 ['Harvard Law School Forum','ESG Performance Metrics in Executive Pay. Harvard Law School Forum on Corporate Governance, January 2024.'],
 ['The Conference Board','ESG Performance Metrics in Executive Compensation: 2024 Edition. The Conference Board, 2024. https://www.conference-board.org/publications/ESG-performance-metrics-in-executive-compensation-strategies-2024-edition'],
 ['UNESCO / Thomson Reuters Foundation','Responsible AI in Practice: 2025 Global Insights from the AI Company Data Initiative. UNESCO and Thomson Reuters Foundation, April 2026. Dataset: 2,972 companies across 11 sectors.'],
 ['UN Global Compact','AI and the Sustainable Development Goals: Operationalizing Technology for a Sustainable Future. United Nations Global Compact, 2025.'],
 ['EU AI Act','Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence. European Union, August 2024. Entered into force 1 August 2024.']
].map(([src,det]) => `<div class="cite-row-dl"><div class="cite-source-dl">${src}</div><div class="cite-detail-dl">${det}</div></div>`).join('')}
</div>
 
</div><!-- end body-wrap -->
 
<!-- CTA -->
<div class="cta-dl">
 <h3>Get a 30-minute readiness review</h3>
 <p>Review these results with Mareva Etiko and turn the diagnostic into a focused 90-day ESG &times; AI roadmap for reporting, controls, governance, and decision-use.</p>
 <p>Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello%40marevaetiko.com&su=ESG%20%C3%97%20AI%20Readiness%20Audit%20Enquiry" target="_blank" rel="noopener">hello@marevaetiko.com</a></p>
</div>
 
<div class="doc-footer-dl">
 <span>&copy; 2026 Mareva Etiko &nbsp;&middot;&nbsp; ESG &times; AI Readiness Full Report &nbsp;&middot;&nbsp; ${date}</span>
 <span>For informational purposes only. Full audit methodology available upon request.</span>
</div>
 
</body>
</html>`;
 
 const blob = new Blob([html], { type: 'text/html' });
 const url  = URL.createObjectURL(blob);
 const a    = document.createElement('a');
 a.href     = url;
 a.download = `Mareva-Etiko-Full-ESG-Report-${name.replace(/\s+/g,'-')}.html`;
 document.body.appendChild(a);
 a.click();
 document.body.removeChild(a);
 URL.revokeObjectURL(url);
}
/* ═══════════════════════════════════════════════════
  PRINT / PDF
═══════════════════════════════════════════════════ */
// Print CSS is already defined; window.print() handles it.
