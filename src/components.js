const escapeHtml = value => String(value).replace(/[&<>"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[char]));

const iconArt = {
  d20: `<svg viewBox="0 0 100 100" focusable="false"><path class="badge-frame" d="M50 5 91 34 76 84H24L9 34Z"/><path d="m50 5 0 34M9 34l41 5 41-5M24 84l26-45 26 45M9 34l15 50M91 34 76 84"/><path class="badge-accent" d="M38 64h24M42 57l8-9 8 9"/></svg>`,
  spark: `<svg viewBox="0 0 100 100" focusable="false"><path class="badge-frame" d="M50 6 90 31 79 79 50 94 21 79 10 31Z"/><path d="m50 6 0 33M10 31l40 8 40-8M21 79l29-40 29 40"/><path class="badge-accent" d="m72 12 3 9 9 3-9 3-3 9-3-9-9-3 9-3Z"/></svg>`,
  three: `<svg viewBox="0 0 100 100" focusable="false"><path class="badge-frame" d="M50 6 88 25v50L50 94 12 75V25Z"/><circle cx="50" cy="50" r="23"/><path d="M50 6v21M12 25l19 11M88 25 69 36M12 75l19-11M88 75 69 64M50 94V73"/><path class="badge-accent" d="M38 42c4-7 18-8 23-1 3 5 0 10-7 11 8 1 11 7 7 13-6 8-21 5-24-2"/></svg>`,
  eye: `<svg viewBox="0 0 100 100" focusable="false"><path class="badge-frame" d="M8 51c12-21 27-31 42-31s30 10 42 31C80 72 65 82 50 82S20 72 8 51Z"/><circle cx="50" cy="51" r="17"/><circle class="badge-accent" cx="50" cy="51" r="6"/><path d="M24 20 14 9M76 20 86 9M50 17V5M18 70 7 79M82 70l11 9"/></svg>`,
  duality: `<svg viewBox="0 0 100 100" focusable="false"><path class="badge-frame" d="M50 8C28 8 12 24 12 45c0 25 24 42 38 49 14-7 38-24 38-49C88 24 72 8 50 8Z"/><path d="M50 8v86M50 36c-12-14-31-5-31 10 0 14 14 24 31 34M50 36c12-14 31-5 31 10 0 14-14 24-31 34"/><circle class="badge-accent" cx="35" cy="45" r="5"/><path class="badge-accent" d="m65 38 8 7-8 7-8-7Z"/></svg>`,
  blood: `<svg viewBox="0 0 100 100" focusable="false"><path class="badge-frame" d="M50 7c8 15 28 32 28 54 0 17-12 30-28 30S22 78 22 61C22 39 42 22 50 7Z"/><path d="M31 55c8-11 30-11 38 0M35 55l7 18 8-12 8 12 7-18"/><path class="badge-accent" d="M29 28c8 0 14 6 14 14-8 0-14-6-14-14Zm42 0c-8 0-14 6-14 14 8 0 14-6 14-14Z"/></svg>`
};

export const icon = name => `<span class="system-icon system-icon--${escapeHtml(name)}" aria-hidden="true">${iconArt[name] || iconArt.d20}</span>`;
export const badge = (text, tone="open") => `<span class="badge badge--${tone}">${escapeHtml(text)}</span>`;
export const nav = () => `<header class="site-header"><a class="brand" href="#/home"><span>L2P</span><strong>Learn to Play TTRPG</strong></a><nav aria-label="Primary"><a href="#/systems">Systems</a><a href="#/blog">Blog</a><a href="#/community">Find a table</a><a href="#/licenses">Licenses</a></nav></header>`;
export const footer = () => `<footer><p><strong>Independent and unofficial.</strong> Learn from these original summaries, then play from the official rules.</p><p>Copyright and trademarks belong to their respective owners.</p></footer>`;
export const shell = content => `${nav()}<main id="main-content" tabindex="-1">${content}</main>${footer()}`;
export const cards = lessons => `<div class="lesson-grid">${lessons.map((item,index)=>`<article class="lesson-card"><span>${String(index+1).padStart(2,"0")}</span><h3>${item.title}</h3><ul>${item.points.map(point=>`<li>${point}</li>`).join("")}</ul></article>`).join("")}</div>`;
export const sources = items => `<ul class="source-list">${items.map(item=>`<li><a href="${item.url}" target="_blank" rel="noreferrer">${item.label}<span aria-hidden="true"> ↗</span></a></li>`).join("")}</ul>`;
