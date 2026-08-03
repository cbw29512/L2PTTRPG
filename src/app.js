import { homeView, systemsView, systemView, blogView, postView, communityView, licensesView, notFoundView } from "./views.js";
import { parseHash } from "./router.js";

const root = document.querySelector("#app");

const render = () => {
  try {
    const { path, filters } = parseHash(location.hash);
    const parts = path.split("/");
    if (path === "home") root.innerHTML = homeView();
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
