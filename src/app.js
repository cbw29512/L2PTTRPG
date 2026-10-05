import { homeView, learnView, systemsView, systemView, blogView, postView, communityView, licensesView, notFoundView } from "./views.js";
import { parseHash } from "./router.js";

const root = document.querySelector("#app");

const render = () => {
  try {
    const { path, filters } = parseHash(location.hash);
    const parts = path.split("/");
    if (path === "home") root.innerHTML = homeView();
    else if (parts[0] === "learn" && parts[1]) root.innerHTML = learnView(parts[1]);
    else if (path === "systems") root.innerHTML = systemsView();
    else if (path === "blog") root.innerHTML = blogView();
    else if (path === "community") root.innerHTML = communityView(filters);
    else if (path === "licenses") root.innerHTML = licensesView();
    else if (parts[0] === "system" && parts[1]) {
      root.innerHTML = systemView(parts[1]);
      if (parts[2]) requestAnimationFrame(() => document.getElementById(parts[2])?.scrollIntoView());
    } else if (parts[0] === "blog" && parts[1]) root.innerHTML = postView(parts[1]);
    else root.innerHTML = notFoundView();
    document.querySelector("#main-content")?.focus({ preventScroll:true });
  } catch (error) {
    console.error("[L2P] Rendering failed.", error);
    root.innerHTML = "<main><h1>The site could not load.</h1><p>Refresh the page to try again.</p></main>";
  }
};

root.addEventListener("submit", event => {
  try {
    if (event.target.id !== "community-filters") return;
    event.preventDefault();
    const data = new FormData(event.target);
    location.hash = `/community?system=${encodeURIComponent(data.get("system"))}&role=${encodeURIComponent(data.get("role"))}`;
  } catch (error) {
    console.error("[L2P] Community filters failed.", error);
  }
});

window.addEventListener("hashchange", render);
render();


const roll = sides => Math.floor(Math.random() * sides) + 1;

const renderSave = ({ type, mod, dc, die }) => {
  const total = die + mod;
  const pass = total >= dc;
  document.querySelector("#save-die").textContent = String(die);
  document.querySelector("#save-result").textContent = `${type} save: ${die} + ${mod} = ${total} — ${pass ? "PASS" : "FAIL"}`;
  document.querySelector("#save-explain").textContent = pass
    ? `You met or beat DC ${dc}. The specific rule now tells you what success changes: no effect, half damage, reduced effect, or something else.`
    : `You did not reach DC ${dc}. Apply the failure effect written by the spell, trap, monster ability, or hazard.`;
};

const renderAttack = ({ attackMod, ac, damageSides, damageMod, die }) => {
  const total = die + attackMod;
  const hit = die === 20 || (die !== 1 && total >= ac);
  document.querySelector("#attack-die").textContent = String(die);
  if (!hit) {
    document.querySelector("#attack-result").textContent = `Attack: ${die} + ${attackMod} = ${total} vs AC ${ac} — MISS`;
    document.querySelector("#attack-explain").textContent = "Because the attack missed, no weapon damage roll is made.";
    return;
  }
  const damageRoll = roll(damageSides);
  const damage = damageRoll + damageMod;
  document.querySelector("#attack-result").textContent = `Attack: ${die} + ${attackMod} = ${total} vs AC ${ac} — HIT`;
  document.querySelector("#attack-explain").textContent = `Now roll damage: d${damageSides} rolled ${damageRoll} + ${damageMod} = ${damage} damage.`;
};

root.addEventListener("click", event => {
  try {
    if (event.target.id === "roll-die") {
      const sides = Number(document.querySelector("#die-select")?.value || 20);
      const result = roll(sides);
      document.querySelector("#visual-die").textContent = `d${sides}`;
      document.querySelector("#roll-result").textContent = `Rolled ${result}`;
      document.querySelector("#roll-explain").textContent = `d${sides} = one ${sides}-sided die. This roll landed on ${result}.`;
    }

    if (["roll-save","show-save-pass","show-save-fail"].includes(event.target.id)) {
      const type = document.querySelector("#save-type")?.value || "Dexterity";
      const mod = Number(document.querySelector("#save-mod")?.value || 0);
      const dc = Number(document.querySelector("#save-dc")?.value || 10);
      let die = roll(20);
      if (event.target.id === "show-save-pass") die = Math.min(20, Math.max(1, dc - mod));
      if (event.target.id === "show-save-fail") die = Math.max(1, Math.min(20, dc - mod - 1));
      renderSave({ type, mod, dc, die });
    }

    if (["roll-attack","show-hit","show-miss"].includes(event.target.id)) {
      const attackMod = Number(document.querySelector("#attack-mod")?.value || 0);
      const ac = Number(document.querySelector("#target-ac")?.value || 10);
      const damageSides = Number(document.querySelector("#damage-die")?.value || 8);
      const damageMod = Number(document.querySelector("#damage-mod")?.value || 0);
      let die = roll(20);
      if (event.target.id === "show-hit") die = Math.min(20, Math.max(2, ac - attackMod));
      if (event.target.id === "show-miss") die = Math.max(1, Math.min(19, ac - attackMod - 1));
      renderAttack({ attackMod, ac, damageSides, damageMod, die });
    }
  } catch (error) {
    console.error("[E&S] Interactive lesson failed.", error);
  }
});
