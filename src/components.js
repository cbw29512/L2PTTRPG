const escapeHtml = value => String(value).replace(/[&<>"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[char]));
export const icon = name => `<span class="system-icon" aria-hidden="true">${({d20:"20",spark:"✦",three:"3A",eye:"◉",duality:"◇◆",blood:"V"})[name] || "RPG"}</span>`;
export const badge = (text, tone="open") => `<span class="badge badge--${tone}">${escapeHtml(text)}</span>`;
export const nav = () => `<header class="site-header"><a class="brand" href="#/home"><span>L2P</span><strong>Learn to Play TTRPG</strong></a><nav aria-label="Primary"><a href="#/systems">Systems</a><a href="#/blog">Blog</a><a href="#/community">Find a table</a><a href="#/licenses">Licenses</a></nav></header>`;
export const footer = () => `<footer><p><strong>Independent and unofficial.</strong> Learn from these original summaries, then play from the official rules.</p><p>Copyright and trademarks belong to their respective owners.</p></footer>`;
export const shell = content => `${nav()}<main id="main-content" tabindex="-1">${content}</main>${footer()}`;
export const cards = lessons => `<div class="lesson-grid">${lessons.map((item,index)=>`<article class="lesson-card"><span>${String(index+1).padStart(2,"0")}</span><h3>${item.title}</h3><ul>${item.points.map(point=>`<li>${point}</li>`).join("")}</ul></article>`).join("")}</div>`;
export const sources = items => `<ul class="source-list">${items.map(item=>`<li><a href="${item.url}" target="_blank" rel="noreferrer">${item.label}<span aria-hidden="true"> ↗</span></a></li>`).join("")}</ul>`;
