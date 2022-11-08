const layersOrder = [
    { name: 'background', number: 7 },
    { name: 'wings', number: 7 },
    { name: 'tops', number: 60 },
    { name: 'heads', number: 8 },
    { name: 'ears', number: 76 },
    { name: 'noises', number: 72 },
    { name: 'lips', number: 74 },
    { name: 'hair', number: 48 },
    { name: 'eyes', number: 88 },
];
  
const format = {
    width: 631,
    height: 631
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 500;

module.exports = { layersOrder, format, rarity, defaultEdition };