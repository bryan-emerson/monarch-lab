/** Import Models */
const Monarch = require("../../models/Monarch");
const Kingdom = require("../../models/Kingdom");
/** Import JSON raw seed data */
const monarchRawData = require("../data/monarchRaw.json");
const kingdomRawData = require("../data/kingdomRaw.json");

/** Map through monarchRawData to create an array of objects that match the basic fields in the Monarch model.
 *
 * We are excluding the "kingdom" field for now because it requires an ObjectId, and we need to seed the collections first.
 *
 * We'll address this in the `01--seed-related-models` file
 */

const monarchSeedData = monarchRawData.map(monarchRawItem => {
  const monarchSeedItem = {};

  monarchSeedItem.name = monarchRawItem.name;
  monarchSeedItem.house = monarchRawItem.house;
  monarchSeedItem.start = monarchRawItem.start;
  monarchSeedItem.end = monarchRawItem.end;
  monarchSeedItem.endReason = monarchRawItem.endReason;

  return monarchSeedItem;
});

/** We can seed the Kingdom data directly from the raw JSON.
 *
 * Mongoose will disregard the extra fields in the JSON when creating the documents.
 */

Kingdom.deleteMany({}).then(() => {
  Kingdom.create(kingdomRawData).then(kingdoms => console.log(kingdoms));
});
