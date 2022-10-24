let type = [ 'swamp', 'forest', 'city', 'ocean', 'grasslands', 'desert', 'mountain'];
let food = [ 'sunlight', 'moss', 'dead things', 'bitter tears', 'hay', 'flowers', 'roots'];
let enemy = [ 'firefly', 'racoon', 'tiger', 'infection', 'height', 'snake', 'bird'];

const ranNumberGen = () => {
    return Math.floor(Math.random() * 7) 
}

const randType = type[ranNumberGen()];
const randFood = food[ranNumberGen()];
const randEnemy = enemy[ranNumberGen()];
const magicalCreature = () => {
    console.log(`You have a ${randType} magical creature that lives off of ${randFood}. Its natural enemys are ${randEnemy}s, so be on the lookout!`)
};

magicalCreature();
