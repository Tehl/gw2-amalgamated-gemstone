const items = [
  { id: 68063, name: "Amalgamated Gemstone" },
  { id: 24277, name: "Pile of Crystalline Dust" },
  { id: 24514, name: "Crest of the Assassin" },
  { id: 24518, name: "Crest of the Magi" },
  { id: 24532, name: "Crest of the Rabid" }
];

const prices = [
  {
    id: 68063,
    name: "Amalgamated Gemstone",
    buys: { unit_price: 26024 },
    sells: { unit_price: 26888 }
  },
  {
    id: 24277,
    name: "Pile of Crystalline Dust",
    buys: { unit_price: 2101 },
    sells: { unit_price: 2132 }
  },
  {
    id: 24514,
    name: "Crest of the Assassin",
    buys: { unit_price: 22982 },
    sells: { unit_price: 32981 }
  },
  {
    id: 24518,
    name: "Crest of the Magi",
    buys: { unit_price: 3013 },
    sells: { unit_price: 3198 }
  },
  {
    id: 24532,
    name: "Crest of the Rabid",
    buys: { unit_price: 3019 },
    sells: { unit_price: 3417 }
  }
];

function getItems(ids) {
  return Promise.resolve(items);
}

function getPrices(ids) {
  return Promise.resolve(prices);
}

export default { getItems, getPrices };
