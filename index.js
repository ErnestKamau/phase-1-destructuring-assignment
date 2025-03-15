const farmAnimals = 'cow horse sheep pig chicken';

// 1. Destructure based on animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Destructure to get four animal names (excluding the horse)
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3. Destructure for three colors (excluding the horse and chicken)
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// 4. Destructure using color names
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Destructure using initials, skipping indigo
const [r, o, y, g, b, , v] = colors;

// 6. Destructure only indigo using `indg`
const [, , , , , indg] = colors;

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

// 7. Destructure all variables from muppet object
const { muppetName, color, song, job, partner } = muppet;

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// 8. Destructure song2 and song4, and Kermit's job and partner
const { 
  album: { 
    theMuppetMovie: { song2, song4 } 
  }, 
  nestedJob, 
  nestedPartner 
} = nestedMuppet;

console.log(moo, neigh, baa, oink, cluck);
console.log(bessie, dolly, babe, little);
console.log(blackAndWhite, black, pink);
console.log(red, orange, yellow, green, blue, indigo, violet);
console.log(r, o, y, g, b, v);
console.log(indg);
console.log(muppetName, color, song, job, partner);
console.log(song2, song4, nestedJob, nestedPartner);
