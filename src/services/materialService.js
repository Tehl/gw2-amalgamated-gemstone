import api from "./gw2api";

function getMaterials(ids) {
  return Promise.all([
    api.getItems(ids),
    api.getPrices(ids)
  ]).then(res => {
    let materials = {};

    res[0].forEach(
      item => (materials[item.id] = { id: item.id, name: item.name })
    );
    res[1].forEach(
      item =>
        (materials[item.id] = {
          ...materials[item.id],
          buy: item.buys.unit_price,
          sell: item.sells.unit_price
        })
    );

    return materials;
  });
}

export default { getMaterials };
