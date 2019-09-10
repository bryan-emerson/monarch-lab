const Monarch = require("../../models/Monarch");
const Kingdom = require("../../models/kingdom");

const monarchJsonData = require("../data/monarchRaw.json");
const kingdomJsonData = require("../data/kingdomRaw.json");

Monarch.find({}).then(monarchsDB => {
  // iterate through each monarch in monarchsDB

  monarchsDB.forEach(monarchDocument => {
    // monarchDocument is the single monarch from our database
    // we will make a new variable to find the original JSON object
    const monarchJson = monarchJsonData.find(monarchJsonItem => {
      return monarchJsonItem.name === monarchDocument.name;
    });

    // console.log(monarchDocument);
    // console.log(monarchJson);

    Kingdom.findOne({ title: monarchJson.kingdom }).then(kingdomDocument => {
      // console.log(monarchJson.kingdom);
      // console.log(kingdomDocument);

      monarchDocument.kingdom = kingdomDocument.id;
      monarchDocument.save();
    });
  });
});
