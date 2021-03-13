require('./connection.js')
let mongoose = require('mongoose')
let monarchModel = ('../models/Monarch.js')
let monarchJson = require('./data/monarchRaw.json')
let kingdomModel = ('../models/Kingdom.js')
let kingdomJson = require('./data/kingdomRaw.json')

let destructureMonarch =
  ({name, house, start, end, endReason, kingdom})=>
  ({name, capital, region, population})


  let destructuredMonarchs = (monarchJson.map(destructureMonarch))

  monarchModel
      .deleteMany({})
      .then(()=> monarchModel.create(destructuredMonarchs))
      .then(mongoose.disconnect)
      .then(()=> console.log('done!'))


