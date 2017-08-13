import hash from "object-hash";
import gemstoneDust from "./gemstone-dust";
import gemstoneEcto from "./gemstone-ecto";
import upscale from "./upscale";

let recipes = [...gemstoneDust, ...gemstoneEcto];

let foundUpscales = [];
upscale.forEach(potentialUpscale => {
  recipes.forEach(recipe => {
    recipe.inputs.forEach((input, idx) => {
      if (input.id === potentialUpscale.output.id) {
        let originalInputs = [...recipe.inputs];
        originalInputs.splice(idx, 1);

        let upscaleInputs = potentialUpscale.inputs.map(o => ({
          id: o.id,
          count: o.count * input.count
        }));

        foundUpscales.push({
          ...recipe,
          inputs: [...originalInputs, ...upscaleInputs]
        });
      }
    });
  });
});

export default [...recipes, ...foundUpscales].map(recipe => ({
  ...recipe,
  hash: hash(recipe)
}));
