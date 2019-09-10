/** Import Models */
const Monarch = require("../../models/Monarch");
const Kingdom = require("../../models/Kingdom");
/** Import JSON raw seed data */
const monarchRawData = require("../data/monarchRaw.json");

/** Retrieve all monarch documents from the database */
Monarch.find({}).then(monarchs => {
  monarchs
    /** Iterate over each monarch document */
    .forEach(monarch => {
      /** Find the original object in the JSON that matches the current monarch document.
       */
      monarchJSON = monarchRawData.find(
        monarchJSON => monarchJSON.name === monarch.name
      );

      /** Our JSON has the original string value for the "kingdom" property, so we can use that to find the one Kingom document that matches. */

      Kingdom.findOne({ title: monarchJSON.kingdom })
        .then(kingdom => {
          /** Because the document has an ObjectId, we can set that as the value of the "kingom" field of the current Monarch document. */
          monarch.kingdom = kingdom.id;
          monarch.save();
        })
        .catch(err => console.log(err)); // .catch for the Kingdom query
    })
    .catch(err => console.log(err)); // .catch for the Monarch query
});
