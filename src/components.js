const escapeHtml = value => String(value).replace(/[&<>\"]/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "\"":"&quot;" }[char]));

const d20Geometry = `
  <path class="badge-frame" d="M50 5 91 33 76 85H24L9 33Z"/>
  <path d="M50 5v34M9 33l41 6 41-6M24 85l26-46 26 46M9 33l15 52M91 33 76 85"/>
  <text class="badge-glyph badge-number" x="50" y="65" text-anchor="middle">20</text>
`;

const iconArt = {
  d20: `<svg viewBox="0 0 100 100" focusable="false">${d20Geometry}<path class="badge-accent-line" d="M31 74h38"/></svg>`,
  spark: `<svg viewBox="0 0 100 100" focusable="false">${d20Geometry}<path class="badge-accent" d="m78 9 3.4 9.6L91 22l-9.6 3.4L78 35l-3.4-9.6L65 22l9.6-3.4Z"/></svg>`,
  three: `<svg viewBox="0 0 100 100" focusable="false"><path class="badge-frame" d="M50 6 88 27v46L50 94 12 73V27Z"/><path d="M50 6v16M12 27l14 8M88 27l-14 8M12 73l14-8M88 73l-14-8M50 94V78"/><circle cx="50" cy="50" r="27"/><text class="badge-glyph badge-action" x="50" y="61" text-anchor="middle">3A</text></svg>`,
  eye: `<svg viewBox="0 0 100 100" focusable="false"><circle class="badge-frame" cx="50" cy="50" r="43"/><path class="badge-silhouette" d="M33 35 16 21l6 25 12 7m32-18 18-14-6 25-12 7M31 48c0-17 8-27 19-27s19 10 19 27v11c0 6-4 10-10 12H41c-6-2-10-6-10-12Z"/><path class="badge-cutout" d="m37 45 10 3-10 4Zm26 0-10 3 10 4Z"/><path d="M37 65c-7 8-8 16-4 23M44 67c-4 8-3 15 1 21M50 68v22M56 67c4 8 3 15-1 21M63 65c7 8 8 16 4 23"/></svg>`,
  duality: `<svg viewBox="0 0 100 100" focusable="false"><path class="badge-frame" d="M50 8C28 8 12 24 12 45c0 25 24 42 38 49 14-7 38-24 38-49C88 24 72 8 50 8Z"/><path class="badge-blade" d="M50 16 57 35 50 75 43 35Z"/><path d="M50 75v14M42 82h16"/><circle class="badge-accent" cx="30" cy="48" r="6"/><path class="badge-accent" d="m70 40 8 8-8 8-8-8Z"/></svg>`,
  blood: `<svg viewBox="0 0 100 100" focusable="false"><path class="badge-frame" d="M50 7 82 23v34c0 18-13 30-32 37-19-7-32-19-32-37V23Z"/><path d="M24 43c13 10 39 10 52 0M29 51c12 6 30 6 42 0"/><path class="badge-fangs" d="m31 48 16 5-9 30Zm38 0-16 5 9 30Z"/><path class="badge-blood" d="M50 61c5 7 8 12 8 16a8 8 0 0 1-16 0c0-4 3-9 8-16Z"/></svg>`
};

export const icon = name => `<span class="system-icon system-icon--${escapeHtml(name)}" aria-hidden="true">${iconArt[name] || iconArt.d20}</span>`;
export const badge = (text, tone="open") => `<span class="badge badge--${tone}">${escapeHtml(text)}</span>`;
export const nav = () => `<header class="site-header"><a class="brand" href="#/home"><span>L2P</span><strong>Learn to Play TTRPG</strong></a><nav aria-label="Primary"><a href="#/systems">Systems</a><a href="#/blog">Blog</a><a href="#/community">Find a table</a><a href="#/licenses">Licenses</a></nav></header>`;
export const footer = () => `<footer><p><strong>Independent and unofficial.</strong> Learn from these original summaries, then play from the official rules.</p><p>Copyright and trademarks belong to their respective owners.</p></footer>`;
export const shell = content => `${nav()}<main id="main-content" tabindex="-1">${content}</main>${footer()}`;
export const cards = lessons => `<div class="lesson-grid">${lessons.map((item,index)=>`<article class="lesson-card"><span>${String(index+1).padStart(2,"0")}</span><h3>${item.title}</h3><ul>${item.points.map(point=>`<li>${point}</li>`).join("")}</ul></article>`).join("")}</div>`;
export const sources = items => `<ul class="source-list">${items.map(item=>`<li><a href="${item.url}" target="_blank" rel="noreferrer">${item.label}<span aria-hidden="true"> ↗</span></a></li>`).join("")}</ul>`;
