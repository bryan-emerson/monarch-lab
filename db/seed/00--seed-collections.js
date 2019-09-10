const Monarch = require("../../models/Monarch");
const Kingdom = require("../../models/kingdom");

const monarchJsonData = require("../data/monarchRaw.json");
const kingdomJsonData = require("../data/kingdomRaw.json");

/** Seed the Monarch collection directly with the raw JSON */

// Monarch.deleteMany({})
//   .then(() => {
//     Monarch.collection
//       .insert(monarchJsonData)
//       .then(monarchs => console.log(monarchs))
//       .catch(err => console.log(err)); // catch for creating documents from JSON
//   })
//   .catch(err => console.log(err)); // catch for deleting the collection

const monarchSeedData = monarchJsonData.map(monarchJson => {
  const monarchData = {};

  monarchData.name = monarchJson.name;
  monarchData.house = monarchJson.house;
  monarchData.start = monarchJson.start;
  monarchData.end = monarchJson.end;
  monarchData.endReason = monarchJson.endReason;

  return monarchData;
});

Monarch.deleteMany({})
  .then(() => {
    Monarch.create(monarchSeedData)
      .then(monarchs => console.log(monarchs))
      .catch(err => console.log(err)); // catch for creating documents from JSON
  })
  .catch(err => console.log(err)); // catch for deleting the collection

Kingdom.deleteMany({})
  .then(() => {
    Kingdom.create(kingdomJsonData)
      .then(kingdoms => console.log(kingdoms))
      .catch(err => console.log(err)); // catch for creating documents from JSON
  })
  .catch(err => console.log(err)); // catch for deleting the collection
