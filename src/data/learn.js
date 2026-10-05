export const learningTopics = {
  terminology: {
    title: "D&D Terminology",
    eyebrow: "Plain-English glossary",
    intro: "D&D becomes much easier once the vocabulary stops sounding mysterious. Learn the common words in plain English first, then open deeper rules only when you need them.",
    chunks: [
      ["DM / Dungeon Master", "The person who presents the world, runs NPCs and monsters, and adjudicates the rules."],
      ["PC / Player Character", "The hero controlled by a player."],
      ["NPC", "A non-player character controlled by the DM."],
      ["d20 test", "A roll using a twenty-sided die plus relevant modifiers to see whether something succeeds."],
      ["DC", "Difficulty Class: the target number a check or saving throw usually needs to meet or beat."],
      ["AC", "Armor Class: the target number an attack roll usually needs to meet or beat to hit."],
      ["Modifier", "A number added to or subtracted from a die roll because of your character, equipment, conditions, or rules."],
      ["Proficiency", "Training. If you are proficient in something, your proficiency bonus may apply when the rules say it does."],
      ["Hit Points / HP", "A measure of how much punishment a creature can take before reaching 0 HP."],
      ["Initiative", "The roll that establishes turn order in combat."],
      ["Action / Bonus Action / Reaction", "Different parts of the action economy. A bonus action is only available when a rule grants one; a reaction responds to a trigger."],
      ["Concentration", "A rule used by certain spells that limits how many concentration effects you can maintain and may require a save after damage."],
      ["Advantage / Disadvantage", "Roll two d20s and keep the higher or lower result, respectively."],
      ["RAW", "Rules As Written: what the published rule text says, as distinct from a house rule or interpretation."]
    ]
  },
  play: {
    title: "I Want to Play D&D",
    eyebrow: "Player path",
    intro: "Start here if you have never played. Learn the words, the dice, your character sheet, and what to do when the DM asks, “What do you do?”",
    chunks: [
      ["What D&D is", "A cooperative fantasy roleplaying game. The DM describes the world; players describe what their characters try to do; the rules help resolve uncertainty."],
      ["The core loop", "DM describes → you choose → roll only if needed → resolve the result → the situation changes."],
      ["Your character", "Your sheet records what your hero is good at, what they can do, how hard they are to hurt, and what resources they have left."],
      ["The d20", "The main resolution die. It usually answers whether an attempt, attack, save, or other d20 test succeeds."],
      ["The other dice", "They often measure how much happens: damage, healing, Hit Dice, spell effects, and other variable results."],
      ["Next", "Learn dice → build a character → learn checks → learn combat → play the first Hearthford adventure."]
    ]
  },
  dm: {
    title: "I Want to DM",
    eyebrow: "Dungeon Master path",
    intro: "Learn to run D&D one decision at a time: describe situations, adjudicate uncertainty, run NPCs and monsters, and keep the table moving.",
    chunks: [
      ["Describe the situation", "Give players enough information to make a meaningful choice."],
      ["Ask what they do", "Do not decide the solution for them. Present the situation and let them act."],
      ["Call for a roll only when needed", "If success is certain or failure would not matter, a roll may be unnecessary."],
      ["Choose the right resolution", "Ability check, attack roll, saving throw, or no roll at all."],
      ["Make failure playable", "Failure should usually change the situation rather than stop the adventure."],
      ["Run creatures with goals", "Monsters protect, hunt, escape, bargain, ambush, delay, or defend. They are more than bags of hit points."]
    ]
  },
  dice: {
    title: "Dice: The Language of D&D",
    eyebrow: "Interactive fundamentals",
    intro: "The d20 is the backbone of the system. Use it to find out whether something succeeds. Other dice often tell you how much happens.",
    chunks: [
      ["d4", "Four-sided die. Common for small effect values such as some weapon damage, healing, and features."],
      ["d6", "Six-sided die. The familiar cube. Common in weapon damage, spells, healing, and Hit Dice."],
      ["d8", "Eight-sided die. Common for medium weapon damage, healing, and class Hit Dice."],
      ["d10", "Ten-sided die. Common for larger weapon/spell values and percentile dice."],
      ["d12", "Twelve-sided die. Often used for large damage values and some Hit Dice."],
      ["d20", "Twenty-sided die. The main success/failure die for attacks, checks, saves, and many other tests."],
      ["d100", "Percentile roll, usually made with two d10s or a percentile die when the game needs a result from 1 to 100."]
    ]
  },
  saves: {
    title: "Saving Throws",
    eyebrow: "Something is happening to you",
    intro: "A saving throw is usually a d20 roll to resist, avoid, endure, or reduce an effect happening to your character.",
    chunks: [
      ["Strength", "Resist being pushed, pulled, restrained, crushed, or physically overpowered."],
      ["Dexterity", "Get out of the way of blasts, traps, falling objects, or other effects you can dodge."],
      ["Constitution", "Endure poison, disease, exhaustion, harsh bodily effects, and concentration checks when rules call for them."],
      ["Intelligence", "Resist effects that attack reasoning, memory, or intellect."],
      ["Wisdom", "Resist fear, charm, mental influence, and many perception-of-reality effects."],
      ["Charisma", "Resist effects that challenge force of personality, presence, identity, or planar displacement in some rules."]
    ]
  },
  combat: {
    title: "Combat, One Roll at a Time",
    eyebrow: "Interactive combat lesson",
    intro: "Combat is a repeating sequence of turns. The d20 usually decides whether an attack connects; damage dice determine how much damage happens after a hit.",
    chunks: [
      ["1. Initiative", "Roll to determine turn order."],
      ["2. Move", "Move up to your speed, split before and after actions if the rules allow."],
      ["3. Take an action", "Attack, cast a spell, Dash, Disengage, Dodge, Help, Hide, Ready, Search, or another legal action."],
      ["4. Bonus action", "Only when a rule gives you something that uses one."],
      ["5. Reaction", "A triggered response, often outside your turn."],
      ["Attack roll", "d20 + attack modifier versus Armor Class."],
      ["Damage roll", "If the attack hits, roll the weapon/spell damage and apply modifiers/rules."]
    ]
  },
  damage: {
    title: "Every D&D Damage Type",
    eyebrow: "Quick reference + monster intuition",
    intro: "Damage type matters because creatures may resist, ignore, or be unusually vulnerable to specific kinds of damage. These associations are useful learning shortcuts, not universal rules.",
    damageTypes: [
      ["Acid", "Corrosive substances, oozes, some dragons and alchemical hazards.", "Think: dissolving or eating through material."],
      ["Bludgeoning", "Clubs, hammers, falls, crushing monsters, giants.", "Think: impact and crushing force."],
      ["Cold", "Ice magic, winter creatures, some dragons and elementals.", "Think: freezing and extreme cold."],
      ["Fire", "Flames, explosions, fire elementals, fiends, some dragons.", "Think: burning and heat."],
      ["Force", "Pure magical impact, arcane energy, some constructs and planar effects.", "Think: raw magical force rather than physical impact."],
      ["Lightning", "Storm magic, electrical traps, storm creatures, some dragons.", "Think: electricity."],
      ["Necrotic", "Undead, life-draining magic, deathly supernatural effects.", "Think: decay or draining life energy."],
      ["Piercing", "Arrows, spears, bites, spikes, stingers.", "Think: puncturing."],
      ["Poison", "Venomous beasts, poisonous monsters, toxins and some traps.", "Think: toxic injury."],
      ["Psychic", "Mind-affecting magic, aberrant creatures, mental attacks.", "Think: injury to the mind."],
      ["Radiant", "Holy/divine energy, celestial effects, some anti-undead powers.", "Think: searing divine or positive energy."],
      ["Slashing", "Swords, axes, claws and cutting hazards.", "Think: cutting."],
      ["Thunder", "Concussive sound, sonic magic, shock waves.", "Think: explosive sound pressure."]
    ]
  },
  characters: {
    title: "Build Your Character",
    eyebrow: "Teaching character sheet",
    intro: "Build directly on the character sheet. Every dropdown explains what the choice means, what it affects, why you would choose it, and how it changes the rest of the character.",
    chunks: [
      ["Concept", "Start with what you want the character to feel like at the table."],
      ["Ability scores", "See every score's modifier and exactly what changes when you raise or lower it."],
      ["Class", "Learn the role, resource model, complexity, action economy, and level-up decisions."],
      ["Background and species", "See proficiencies, features, movement, traits, and how they connect to the build."],
      ["Equipment", "Preview AC, attack bonus, damage, range, hands, and properties before committing."],
      ["Spells and features", "See action type, save/attack, range, concentration, resource cost, synergies, and common mistakes."],
      ["How to play it", "The finished sheet explains before combat, round 1, normal turns, emergencies, resources, and common mistakes."]
    ]
  },
  monsters: {
    title: "Understand Monsters",
    eyebrow: "Player + DM monster lab",
    intro: "Learn how to read a monster, what its tactics are trying to accomplish, and how monster families tend to feel in play.",
    chunks: [
      ["Stat block", "AC, HP, speed, saves, skills, senses, defenses, actions, reactions, and special traits."],
      ["Monster families", "Beasts, undead, dragons, fiends, fey, constructs, oozes, plants, aberrations, giants, elementals, humanoids, monstrosities, celestials."],
      ["Tactics", "Ask what the creature wants, what terrain helps it, what target it prefers, and when it retreats."],
      ["Defenses", "Resistance, immunity, vulnerability, condition immunity, movement, and senses can matter more than raw HP."],
      ["Iron Pit", "Use controlled simulations to demonstrate monster abilities against different heroes and editions."]
    ]
  },
  magic: {
    title: "Learn D&D Magic",
    eyebrow: "Spells without the mystery",
    intro: "Every spell can be broken into the same questions: how long does it take, what does it target, how does it resolve, how long does it last, and what resource does it cost?",
    chunks: [
      ["Casting time", "Action, bonus action, reaction, minutes, or longer."],
      ["Range and target", "Who or what can be affected and from how far away."],
      ["Attack or save", "Some spells require a spell attack; others force a saving throw; some work automatically if legal."],
      ["Concentration", "You normally maintain only one concentration effect at a time."],
      ["Duration", "Instantaneous, rounds, minutes, hours, or until a condition ends."],
      ["Spell slots", "A limited resource used to cast many leveled spells."],
      ["Advanced magic", "Countering, dispelling, flight, teleportation, divination, resurrection, planar travel, and reality-changing effects."]
    ]
  }
};

export const topicById = id => learningTopics[id] || null;
