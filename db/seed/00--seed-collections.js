/** Import Models */
const Monarch = require("../../models/Monarch");
const Kingdom = require("../../models/Kingdom");
/** Import JSON raw seed data */
const monarchRawData = require("../data/monarchRaw.json");
const kingdomRawData = require("../data/kingdomRaw.json");

/******************************************************************************/

/** We cannot seed the Monarchs collection directly from the raw JSON because of the Schema for "kingdoms".
 *
 * If we run this commented-out code, we will get this error:
 *
 * `ValidationError: Monarch validation failed: kingdom: Cast to ObjectID failed for value <whatever> at path "kingdom"`
 *
 * The "kingdoms" field is for ObjectIds, which we need to create in the Kingdoms collection.
 */

// Monarch.deleteMany({}).then(() => {
//   Monarch.create(monarchRawData).then(monarchs => console.log(monarchs));
// });

/******************************************************************************/

/** Map through monarchRawData to create an array of objects that match the basic fields in the Monarch model.
 *
 * We are excluding the "kingdom" field for now because it requires an ObjectId, and we need to seed the collections first.
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

/******************************************************************************/

/** We can use the `monarchSeedData` to create the documents in the Monarch collection as usual.
 *
 * The "kingom" field will be empty at first, which is ok! We'll address this in the `01--seed-related-models` file.
 */

Monarch.deleteMany({}).then(() => {
  Monarch.create(monarchSeedData).then(monarchs => console.log(monarchs));
});

/******************************************************************************/

/** We can seed the Kingdom data directly from the raw JSON.
 *
 * Mongoose will disregard the extra fields in the JSON when creating the documents.
 */

Kingdom.deleteMany({}).then(() => {
  Kingdom.create(kingdomRawData).then(kingdoms => console.log(kingdoms));
});
