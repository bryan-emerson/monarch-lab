const Monarch = require("../../models/Monarch");
const monarchRawData = require("../data/monarchRaw.json");

Monarch.deleteMany({}).then(() => {
  Monarch.create(monarchRawData).then(monarchs => console.log(monarchs));
});
