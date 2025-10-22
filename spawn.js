// SpawnNPC({
// coordinates: { x: 125.3, y: 64.0, z: -42.7 },
// race: "Black",
// bodyType: "Obese",
// disability: { type: "No Arm", severity: 1 },
// spawnTime: random()
// });function random() {
//     return Math.floor(Math.random() * 1000000);
// }
// Utility: generate random spawn time (ms)  


//   >>>>>>>>> this is the original code i got from a comment by @yonathan.assefa on a an ig reel by @art_is_fast 
//   >>>>>>>>>here is the reel(https://www.instagram.com/reel/DOYcQbIjoRr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)


function getRandomSpawnTime() {
  return Math.floor(Math.random() * 10000); // up to 10 seconds
}

const races = ["black", "brown", "white", "latino", "asian", "slavic"];
const bodyTypes = ["fat", "eliudKipchoge", "skinny", "mid", "samSulek"];
const disabilityTypes = ["no arm", "midget", "albino", "cripple", "retard", "down syndrome", "tourettes syndrome"];
const crypto = require('crypto');   

function getRandomCoordinates() {
  return {
    x: parseFloat((Math.random() * 200 - 100).toFixed(2)),
    y: parseFloat((Math.random() * 200 - 100).toFixed(2)),
    z: parseFloat((Math.random() * 200 - 100).toFixed(2)),
    };
}
 
function getRandomRace() {
  return races[Math.floor(Math.random() * races.length)];
}

function getRandomBodyType() {
  return bodyTypes[Math.floor(Math.random() * bodyTypes.length)];
}

function getRandomDisability() {
  const type = disabilityTypes[Math.floor(Math.random() * disabilityTypes.length)];
  const severity = Math.floor(Math.random() * 10) + 1;
    return { type, severity };
}

function spawnNPC({ coordinates, race, bodyType, disability }) {
  const npc = {
    id: crypto.randomUUID(), 
    coordinates: getRandomCoordinates(),
    race: getRandomRace(),
    bodyType: getRandomBodyType(),
    disability: getRandomDisability(),
    spawnTime: Date.now(),
  };

  console.log("npc spawned:", npc);
  return npc;
}

const npcConfig = {
  coordinates: { x: 125.3, y: 64.0, z: -42.7 },
  race: ["black", "brown", "white", "latino", "asian", "slavic"],
  bodyType: ["fat", "eliudKipchoge", "skinny", "mid", "samSulek"],
  disability: { type: ["no arm", "midget", "albino", "cripple", "retard", "down syndrme", "tourettes syndrome"], severity: 1 > 10 },
};


setTimeout(() => {
  spawnNPC(npcConfig);
}, getRandomSpawnTime());
