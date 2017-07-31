var apiRoot = "https://api.guildwars2.com/v2";

function apiFetch(uri) {
  return fetch(uri).then(res => res.json());
}

function getItems(ids) {
  return apiFetch(apiRoot + "/items?ids=" + ids.join(","));
}

function getPrices(ids) {
  return apiFetch(apiRoot + "/commerce/prices?ids=" + ids.join(","));
}

export default { getItems, getPrices };
