import hash from "object-hash";

const target = {
  output: { count: 1 },
  inputs: [{ id: 68063, count: 1 }]
};

export default {
  ...target,
  hash: hash(target)
};
