export const parseHash = hash => {
  try {
    const raw = hash.replace(/^#\/?/, "") || "home";
    const [path, query = ""] = raw.split("?");
    const params = new URLSearchParams(query);
    return {
      path: path.replace(/\/+$/, "") || "home",
      filters: {
        system: params.get("system") || "all",
        role: params.get("role") || "all"
      }
    };
  } catch (error) {
    console.error("[L2P] Route parsing failed.", error);
    return { path:"home", filters:{ system:"all", role:"all" } };
  }
};
