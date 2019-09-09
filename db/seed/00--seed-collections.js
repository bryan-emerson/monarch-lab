const Monarch = require("../../models/Monarch");
const monarchRawData = require("../data/monarchRaw.json");

const monarchSeedData = monarchRawData.map(monarchRaw => {
  const monarchSeedItem = {};
  monarchSeedItem.name = monarchRaw.name;
  monarchSeedItem.house = monarchRaw.house;
  monarchSeedItem.start = monarchRaw.start;
  monarchSeedItem.end = monarchRaw.end;
  monarchSeedItem.endReason = monarchRaw.endReason;

  return monarchSeedItem;
});
