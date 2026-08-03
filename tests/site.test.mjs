import assert from "node:assert/strict";
import { systems, systemById } from "../src/data/systems.js";
import { posts } from "../src/data/blog.js";
import { listings } from "../src/data/community.js";
import { parseHash } from "../src/router.js";
import { icon } from "../src/components.js";

try {
  assert.equal(systems.length, 6);
  assert.equal(new Set(systems.map(system => system.id)).size, systems.length);
  assert.equal(new Set(systems.map(system => system.icon)).size, systems.length, "Each launch system needs a distinct badge.");
  for (const system of systems) {
    assert.ok(system.player.length >= 6);
    assert.ok(system.gm.length >= 6);
    assert.ok(system.sources.length >= 2);
    assert.ok(system.license.basis && system.license.attribution);
    assert.match(system.lastReviewed, /^\d{4}-\d{2}-\d{2}$/);
    const badgeMarkup = icon(system.icon);
    assert.match(badgeMarkup, /<svg viewBox="0 0 100 100"/);
    assert.match(badgeMarkup, new RegExp(`system-icon--${system.icon}`));
  }
  assert.equal(systemById("dnd-2014").edition, "2014 rules / SRD 5.1");
  assert.equal(systemById("dnd-2024").edition, "2024 rules / SRD 5.2.1");
  assert.equal(systemById("call-of-cthulhu").license.tone, "restricted");
  assert.equal(posts.length, 4);
  assert.ok(listings.every(item => item.system && item.role && item.region));
  assert.deepEqual(parseHash("#/community?system=daggerheart&role=gm"), {
    path:"community", filters:{ system:"daggerheart", role:"gm" }
  });
  console.log("L2PTTRPG tests passed.");
} catch (error) {
  console.error("[L2P] Test failure.", error);
  process.exitCode = 1;
}
