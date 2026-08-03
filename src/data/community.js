export const trustLevels = [
  ["Email checked", "Account controls a verified email address."],
  ["Community history", "Completed games and conduct reports can build a visible record."],
  ["Identity reviewed", "Optional stronger review through a documented provider."],
  ["Venue or organizer confirmed", "Public venue, club, store, or organization has been independently confirmed."]
];

export const listings = [
  {id:"florence-pf", title:"Pathfinder beginners in Florence", system:"pathfinder-2e", role:"players", region:"Florence, South Carolina", format:"In person · public venue", schedule:"Two Saturdays per month · evening", age:"Adults", access:"Step-free venue requested", safety:"Session zero · lines and veils · open door", trust:["Email checked","Venue pending"]},
  {id:"online-dagger", title:"Daggerheart story-first campaign", system:"daggerheart", role:"gm", region:"Online · Eastern Time", format:"Online voice and VTT", schedule:"Weekly · weeknight", age:"21+", access:"Captions welcomed", safety:"Lines and veils · X-card · breaks", trust:["Email checked","Community history"]},
  {id:"horror-group", title:"Investigative horror one-shots", system:"call-of-cthulhu", role:"players", region:"Pee Dee region", format:"In person · rotating public venues", schedule:"Monthly", age:"Adults", access:"Contact organizer for accommodations", safety:"Content survey · open door · debrief", trust:["Email checked"]},
  {id:"vampire-online", title:"V5 political chronicle", system:"vampire-v5", role:"players", region:"Online · Eastern Time", format:"Online voice", schedule:"Twice monthly · Sunday", age:"25+", access:"Camera optional", safety:"Detailed consent sheet · lines and veils · aftercare", trust:["Email checked","Community history"]}
];

export const communitySchema = {
  public:["display name","coarse region","system","role sought","schedule","age band","accessibility notes","safety tools","documented trust badges"],
  private:["email","phone","precise address","identity documents","private messages","moderation evidence"],
  rule:"No public email, phone number, precise home address, or unverified identity claim."
};
